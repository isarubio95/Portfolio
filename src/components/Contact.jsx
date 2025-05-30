import { useState, useRef } from 'react'
import { FiSend } from 'react-icons/fi'

export default function Contact() {
  const formRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    const form = formRef.current
    if (!form.checkValidity()) {
      e.preventDefault()
      setSubmitted(true)
    } else {
      setSubmitted(true)
      // Aquí podrías enviar los datos
      alert('Formulario enviado correctamente ✅')
      form.reset()
    }
  }

  const getInputClass = (fieldValid) => `
    peer w-full bg-gray-200 rounded-xl p-3 outline-none text-black placeholder-transparent
    shadow-inner transition-all duration-200 ease-in-out ring-1
    ${!submitted ? 'ring-gray-500' : fieldValid ? 'ring-2 ring-green-500' : 'ring-2 ring-red-500'}
  `

  const getLabelClass = (fieldValid) => `
    absolute left-3 top-3 text-sm pointer-events-none transition-all duration-200
    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
    peer-focus:top-[-30px] peer-focus:text-sm
    peer-[&:not(:placeholder-shown)]:top-[-30px] peer-[&:not(:placeholder-shown)]:text-sm
    ${!submitted ? 'text-gray-600' : fieldValid ? 'text-green-600' : 'text-red-600'}
  `

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
              placeholder="Tu nombre"
              className={getInputClass(formRef.current?.name?.validity?.valid)}
              required
            />
            <label htmlFor="name" className={getLabelClass(formRef.current?.name?.validity?.valid)}>Nombre</label>
          </div>

          {/* Email y Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className={getInputClass(formRef.current?.email?.validity?.valid)}
                required
              />
              <label htmlFor="email" className={getLabelClass(formRef.current?.email?.validity?.valid)}>Email</label>
            </div>

            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+34 600 000 000"
                pattern="^(\+34\s?)?(\d{3}[\s.-]?){2}\d{3}$"
                className={getInputClass(
                  !formRef.current?.phone?.value ? true : formRef.current?.phone?.validity?.valid
                )}
              />
              <label htmlFor="phone" className={getLabelClass(
                !formRef.current?.phone?.value ? true : formRef.current?.phone?.validity?.valid
              )}>Teléfono (opcional)</label>
            </div>
          </div>

          {/* Mensaje */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Escribe tu mensaje…"
              className={`${getInputClass(formRef.current?.message?.validity?.valid)} resize-none`}
              required
            />
            <label htmlFor="message" className={getLabelClass(formRef.current?.message?.validity?.valid)}>Mensaje</label>
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
