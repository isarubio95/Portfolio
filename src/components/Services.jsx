import { FaPaintBrush , FaCode, FaWallet } from 'react-icons/fa'

export default function Services() {
  return (
    <section id='servicios' className="bg-gray-800 text-white py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Mis <span className='text-green-400'>Servicios</span></h2>
        <p className="mt-2 text-gray-300 max-w-xl mx-auto">
          Aquí están algunos de los servicios que ofrezco para ayudarte a mejorar tu presencia online.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <ServiceCard icon={<FaPaintBrush  size={40} />} title="Diseño Web">
            Diseño de interfaces modernas, accesibles y optimizadas para todos los dispositivos.
          </ServiceCard>

          <ServiceCard icon={<FaCode size={40} />} title="Desarrollo Frontend">
            Desarrollo en React, Tailwind, JavaScript puro y buenas prácticas para SEO y rendimiento.
          </ServiceCard>

          <ServiceCard icon={<FaWallet size={40} />} title="Tiendas Online">
            Integración de catálogos, pasarelas de pago y paneles de gestión personalizados.
          </ServiceCard>
        </div>
      </div>
    </section>
  )
}

// Componente reutilizable para servicios
function ServiceCard({ title, icon, children }) {
  return (
    <div className="bg-gray-700 border border-gray-700 rounded-lg overflow-hidden shadow-md w-full max-w-sm transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
      
      {/* Parte superior */}
      <div className="bg-[radial-gradient(circle,_rgba(34,197,94,0.2)_0%,_rgba(17,24,39,1)_30%)] py-10 flex items-center justify-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-full text-green-400 text-3xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>

      {/* Parte inferior con contenido */}
      <div className="p-5 text-left">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{children}</p>
      </div>
    </div>
  )
}

