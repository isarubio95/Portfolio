import profilePic from '../assets/profile.jpg'
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaFileAlt, FaFigma } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id='inicio' className="bg-gradient-to-b from-gray-100 to-gray-300 mx-auto h-screen flex flex-col sm:flex-row justify-center items-center flex-wrap gap-6">
      {/* Imagen */}
      <div className='w-5/12 min-w-[307px] flex justify-end'>
        <div className='h-60 bg-gray-700 w-60 flex justify-center items-end rounded-full'>
          <img
            src={profilePic}
            alt="Isaías Rubio"
            className="h-56 w-56 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="w-5/6 sm:w-5/12 min-w-[250px]">
        <h2 className="text-gray-800 text-5xl font-bold mb-4">Isaías Rubio</h2>
        <p className="text-lg mt-2 text-gray-900 max-w-sm mb-4">
          Ut elit odio Nullam urna sit placerat sit sodales, amet, leo. dui consectetur urna. vehicula.
        </p>

        {/* Ubicación */}
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-700">
          <FaMapMarkerAlt className="text-gray-500" />
          <span>Logroño, La Rioja, España</span>
        </div>

        {/* Iconos sociales */}
        <div className="mt-4 flex items-center gap-4 text-xl text-gray-700">
          <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
            <FaFileAlt  />
          </a>
          <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
            <FaFigma  />
          </a>
        </div>

        {/* Botón */}
        <button className="mt-4 flex items-center gap-1 bg-green-500 text-white px-5 py-2 rounded-full font-medium shadow-lg transition-all duration-300 
            hover:bg-green-600 hover:shadow-xl hover:scale-105 
            active:scale-95 active:shadow-inner">
            Contactar <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>

      </div>
    </section>
  )
}
