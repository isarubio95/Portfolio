import { useState, useRef } from 'react'
import { FiSend } from 'react-icons/fi'

export default function Contact() {
  const formRef = useRef(null)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const cleanPhone = (value) => value.replace(/[\s.-]/g, '')

  const handleSubmit = (e) => {
    const form = formRef.current
    e.preventDefault()

    // Limpiar teléfono antes de validar
    form.phone.value = cleanPhone(form.phone.value)

    setSubmitted(true)

    if (form.checkValidity() && validatePhone(form.phone.value)) {
      alert('Formulario enviado correctamente ✅')
      form.reset()
      setTouched({})
      setSubmitted(false)
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
      if (!el.value) return false // ⬅️ importante: si está vacío, no hay error
      return touched[field] && !validatePhone(el.value)
    }

    return touched[field] && !el.validity.valid
  }

  const isValid = (field) => {
    const el = formRef.current?.[field]
    if (!el) return null

    if (field === 'phone') {
      if (!el.value) return null // ⬅️ no marcamos ni válido ni inválido si está vacío
      return touched[field] ? validatePhone(el.value) : null
    }

    return touched[field] ? el.validity.valid : null
  }

  return (
    <section id="contacto" className="bg-gray-100 py-20">
      <div className="w-4/5 mx-auto text-center">
        <h2 className="text-gray-700 text-3xl font-bold mb-10">Contacto</h2>

        <form ref={formRef} className="max-w-xl mx-auto grid gap-8 text-left" noValidate onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              autocomplete="name"
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
                autocomplete="email"
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
                autocomplete="tel"
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
              autocomplete="off"
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
              className="bg-green-500 text-white font-medium px-6 py-2 rounded-full shadow-lg
              transition-all duration-300 hover:bg-green-600 hover:shadow-xl hover:scale-105
              active:scale-95 active:shadow-inner flex items-center gap-2"
            >
              Enviar
              <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
