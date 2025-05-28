import { FiSend } from 'react-icons/fi'

export default function Contact () {
  /*  ─── Clase reutilizable para inputs y textarea ───  */
  const baseInput =
    'bg-gray-200 w-full border-2 border-green-600 rounded-xl p-3 outline-none ' +
    'text-black placeholder:text-gray-500 shadow-inset ' +                               
    ' focus:border-green-400'                             

  return (
    <section id="contacto" className="bg-gray-100 py-20">
      <div className="w-4/5 mx-auto text-center">
        <h2 className="text-gray-700 text-3xl font-bold mb-10">Contacto</h2>

        <form className="max-w-xl mx-auto grid gap-6 text-left">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="text-gray-800 block mb-1 font-medium">
              Nombre
            </label>
            <input id="name" type="text" className={baseInput} placeholder="Tu nombre" />
          </div>

          {/* Email y Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="text-gray-800 block mb-1 font-medium">
                Email
              </label>
              <input id="email" type="email" className={baseInput} placeholder="tucorreo@ejemplo.com" />
            </div>

            <div>
              <label htmlFor="phone" className="text-gray-800 block mb-1 font-medium">
                Teléfono
              </label>
              <input id="phone" type="tel" className={baseInput} placeholder="+34 600 000 000" />
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="text-gray-800 block mb-1 font-medium">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={4}
              className={baseInput + ' resize-none'}
              placeholder="Escribe tu mensaje…"
            />
          </div>

          {/* Botón */}
          <div className="group inline-block mx-auto">
            <button
              type="submit"
              className="bg-green-500 text-white font-medium px-6 py-2 rounded-full shadow-lg
                        transition-all duration-300 hover:bg-green-600 hover:shadow-xl hover:scale-105
                        active:scale-95 active:shadow-inner
                        flex items-center gap-2"
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
