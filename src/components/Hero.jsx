import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaFileAlt, FaFigma } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id='inicio' className="bg-gradient-to-b from-gray-100 to-gray-300 h-[85vh] sm:h-screen flex flex-col sm:flex-row justify-center items-center sm:gap-6 gap-4 ">
      {/* Imagen */}
      <div className='w-5/12 sm:min-w-[307px] short:hidden flex justify-center md:justify-end'>
        <div className='sm:h-64 sm:w-64 bg-gray-700 aspect-square flex justify-center sm:items-end rounded-full'>
          <img
            src="profile.jpg"
            alt="Isaías Rubio"
            className="sm:h-56 sm:w-56 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="w-5/6 sm:w-5/12 min-w-[250px]">
        <h2 className="text-gray-800 text-4xl sm:text-5xl text-center sm:text-left font-bold mb-4">Isaías Rubio</h2>
        <p className="text-base sm:text-lg mt-2 text-gray-900 max-w-sm mb-4">
          Técnico superior en Desarrollo de Aplicaciones Web. Abierto a nuevas contrataciones.
        </p>

        {/* Ubicación */}
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-700">
          <FaMapMarkerAlt className="text-gray-500" />
          <span>Logroño, La Rioja, España</span>
        </div>

        {/* Iconos sociales */}
        <div className="mt-4 flex items-center gap-4 text-xl text-gray-700">
          <a href="https://github.com/isarubio95" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" aria-label="Visitar mi perfil de GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/isa%C3%ADas-rubio-hern%C3%A1ndez-539085139/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" aria-label="Visitar mi perfil de LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.figma.com/@isaiasrubio" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" aria-label="Visitar mi perfil de Figma">
            <FaFigma  />
          </a>
        </div>

        {/* Botones */}
        <div className='flex flex-wrap'>
          <button
            className="mt-4 flex items-center gap-1 mr-3 bg-green-500 text-white px-5 py-2 rounded-full font-medium shadow-lg transition-all duration-300 
                      hover:bg-green-600 hover:shadow-xl hover:scale-105 
                      active:scale-95 active:shadow-inner"
            onClick={() => {
              const seccion = document.getElementById('contacto');
              seccion?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Ir al sección de contacto"
          >
            Contactar <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
          <a
            href="/CV-Isaias-Rubio.pdf"
            download
            className="mt-4 flex items-center gap-1 bg-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg transition-all duration-300 
                      hover:bg-blue-600 hover:shadow-xl hover:scale-105 
                      active:scale-95 active:shadow-inner"
            aria-label="Descargar currículum"
          >
            Descargar CV <FaFileAlt className="text-md transition-transform duration-300 ml-1" />
          </a>
        </div>
        

      </div>
    </section>
  )
}
