export default function Projects() {
  const projects = [
    { id: 1, title: 'Shamrock', desc: 'Landing page para academia de inglés en Logroño. Media de 97 en Lighthouse.', image: '/shamrock.png', tech: ['HTML', 'CSS', 'JS', 'PHP'], link: 'https://shamrockenglishsolutions.es/' },
    { id: 2, title: '37Grams.', desc: 'Página para un profesor de inglés, con temática en blanco y negro.', image: '/37grams.png', tech: ['HTML', 'CSS', 'JS'], link: 'https://thirtysevengrams.com/' },
    { id: 3, title: 'Cartas Pokemon', desc: 'Minijuego de cartas pokémon recogidas de la PokéAPI.', image: '/cartasPokemon.png', tech: ['HTML', 'CSS', 'JS'], link: 'https://github.com/isarubio95/Cartas-Pokemon'  },
    { id: 4, title: 'Fichajes', desc: 'Aplicación web para fichar entradas y salidas de los empleados y generar informes.', image: '/appFichar.png', tech: ['PHP', 'SQL'], link: 'https://github.com/isarubio95/App-Fichar'  },
    { id: 5, title: 'Manos Al Barro', desc: 'Trabajo para DAW, centrado en la accesibilidad, navegabilidad y usabilidad.', image: '/manosAlBarro.png', tech: ['HTML', 'CSS', 'JS', 'BootStrap'], link: 'https://github.com/isarubio95/Manos-al-Barro'  },
    { id: 6, title: 'PokéGochi', desc: 'Minijuego que usa la PokéAPI, proyecto para aprender JQuery.', image: '/pokeGochi.png', tech: ['HTML', 'CSS', 'JS', 'JQuery'], link: 'https://github.com/isarubio95/PokeGochi'  },
  ]

  return (
    <section id='proyectos' className="bg-gray-100 text-gray-800 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Echa un vistazo a mis <span className="text-green-500">Proyectos</span>
        </h2>

        {/* items-stretch hace que todas las cards tengan la misma altura */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, desc, image, tech, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {/* h-full + flex-col para que todas tengan la misma altura */}
      <div className="bg-white ring-1 ring-black/5 rounded-xl shadow-xl hover:-translate-y-2 transition transform duration-300 ease-in-out text-left cursor-pointer flex flex-col h-full">
        
        <div className="h-48 bg-gray-200 rounded-t-lg mb-4 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* flex-grow empuja el contenido para ocupar espacio y equilibrar alturas */}
        <div className="px-4 pb-4 flex flex-col flex-grow">
          <h3 className="text-lg text-gray-900 font-bold mb-1">{title}</h3>
          <h4 className="mb-4 flex-grow">{desc}</h4>
          
          <div className="flex gap-2 flex-wrap text-xs text-white">
            {tech.map((t, index) => (
              <span key={index} className="bg-black px-3 py-1 rounded-xl">
                {t}
              </span>
            ))}
          </div>
        </div>       

      </div>
    </a>
  )
}
