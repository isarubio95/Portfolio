import { useState, useRef } from 'react'
import { FiSend } from 'react-icons/fi'
import toast from 'react-hot-toast'

export default function Contact() {
  const formRef = useRef(null)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const cleanPhone = (value) => value.replace(/[\s.-]/g, '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    form.phone.value = cleanPhone(form.phone.value)
    setSubmitted(true)

    if (!form.checkValidity() || !validatePhone(form.phone.value)) return

    setLoading(true)

    const formData = new URLSearchParams({
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
      website: form.website.value
    })

    try {
      const res = await fetch('https://rioja.dev/enviar.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
      })

      const msg = await res.text()
      if (!res.ok) throw new Error(msg)

      toast.success(msg)
      form.reset()
      setTouched({})
      setSubmitted(false)
    } catch (err) {
      toast.error(err.message || 'Hubo un error al enviar el formulario')
    } finally {
      setLoading(false)
    }
  }

  const validatePhone = (value) => {
    if (!value) return true
    const regex = /^(\+34\s?)?(\d{3}[\s.-]?\d{3}[\s.-]?\d{3})$/
    return regex.test(value)
  }

  const getInputClass = (fieldValid) => `
    peer w-full bg-gray-200 rounded-xl p-3 outline-none text-black placeholder-transparent
    shadow-inner transition-all duration-200 ease-in-out ring-1
    ${fieldValid == null ? 'ring-gray-500' : fieldValid ? 'ring-2 ring-green-500' : 'ring-2 ring-red-500'}
  `

  const getLabelClass = (fieldValid) => `
    absolute left-3 top-3 text-sm pointer-events-none transition-all duration-200
    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
    peer-focus:top-[-30px] peer-focus:text-sm
    peer-[&:not(:placeholder-shown)]:top-[-30px] peer-[&:not(:placeholder-shown)]:text-sm
    ${fieldValid == null ? 'text-gray-600' : fieldValid ? 'text-green-600' : 'text-red-600'}
  `

  const errorText = {
    name: 'Introduce un nombre válido (ej. Juan Rubio)',
    email: 'Introduce un email válido (ej. tucorreo@gmail.com)',
    phone: 'Introduce un teléfono válido (ej. +34 600 000 000 o 600-000-000)',
    message: 'El mensaje es obligatorio.',
  }

  const getError = (field) => {
    const el = formRef.current?.[field]
    if (!el) return false

    if (field === 'phone') {
      if (!el.value) return false
      return (touched[field] || submitted) && !validatePhone(el.value)
    }

    return (touched[field] || submitted) && !el.validity.valid
  }


  const isValid = (field) => {
    const el = formRef.current?.[field]
    if (!el) return null

    if (field === 'phone') {
      if (!el.value) return null
      return (touched[field] || submitted) ? validatePhone(el.value) : null
    }

    return (touched[field] || submitted) ? el.validity.valid : null
  }


  return (
    <section id="contacto" className="bg-gray-100 py-20">
      <div className="w-4/5 mx-auto text-center">
        <h2 className="text-gray-700 text-3xl font-bold mb-10">Contacto</h2>

        <form ref={formRef} className="max-w-xl mx-auto grid gap-8 text-left" noValidate onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="relative">
            <input
              type="text"
              name="website"
              className="hidden"
              autoComplete="off"
            />
            <input
              id="name"
              name="name"
              type="text"
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              autoComplete="name"
              placeholder="Tu nombre"
              className={getInputClass(isValid('name'))}
              required
              onBlur={handleBlur}
            />
            <label htmlFor="name" className={getLabelClass(isValid('name'))}>Nombre</label>
            {getError('name') && <p className="text-red-600 text-sm mt-1">{errorText.name}</p>}
          </div>

          {/* Email y Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="tucorreo@ejemplo.com"
                className={getInputClass(isValid('email'))}
                required
                onBlur={handleBlur}
              />
              <label htmlFor="email" className={getLabelClass(isValid('email'))}>Email</label>
              {getError('email') && <p className="text-red-600 text-sm mt-1">{errorText.email}</p>}
            </div>

            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+34 600 000 000"
                className={getInputClass(isValid('phone'))}
                onBlur={handleBlur}
              />
              <label htmlFor="phone" className={getLabelClass(isValid('phone'))}>Teléfono (opcional)</label>
              {getError('phone') && <p className="text-red-600 text-sm mt-1">{errorText.phone}</p>}
            </div>
          </div>

          {/* Mensaje */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={4}
              autoComplete="off"
              placeholder="Escribe tu mensaje…"
              className={`${getInputClass(isValid('message'))} resize-none`}
              required
              onBlur={handleBlur}
            />
            <label htmlFor="message" className={getLabelClass(isValid('message'))}>Mensaje</label>
            {getError('message') && <p className="text-red-600 text-sm mt-1">{errorText.message}</p>}
          </div>

          {/* Botón */}
          <div className="group inline-block mx-auto">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-full shadow-lg font-medium flex items-center gap-2 transition-all duration-300
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-600/90 hover:shadow-xl hover:scale-105 active:scale-95 active:shadow-inner'}
                text-white`}
              aria-label="Enviar formulario"
            >
              {loading ? (
                <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
              ) : (
                <>
                  Enviar <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </button>

          </div>
        </form>
      </div>
    </section>
  )
}
