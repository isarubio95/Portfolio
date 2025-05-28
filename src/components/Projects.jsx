export default function Projects() {
  const projects = [
    { id: 1, title: '37Grams.', image: '/37grams.png', tech: ['HTML', 'CSS', 'JS'] },
    { id: 2, title: 'Cartas Pokemon', image: '/cartasPokemon.png', tech: ['HTML', 'CSS', 'JS'] },
    { id: 3, title: 'Fichajes', image: '/appFichar.png', tech: ['PHP'] },
    { id: 4, title: 'Manos Al Barro', image: '/manosAlBarro.png', tech: ['HTML', 'CSS', 'JS', 'BootStrap'] },
    { id: 5, title: 'PokéGochi', image: '/pokeGochi.png', tech: ['HTML', 'CSS', 'JS'] },
    { id: 6, title: 'Fichajes', image: '/appFichar.png', tech: ['PHP'] },
  ]

  return (
    <section id='proyectos' className="bg-gray-100 text-gray-800 py-20">
      <div className="w-5/6 mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Echa un vistazo a mis <span className="text-green-500">Proyectos</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, image, tech }) {
  return (
    <div className="bg-white text rounded-xl shadow-xl hover:-translate-y-2 transition transform duration-300 ease-in-out text-left">
      <div className="h-48 bg-gray-200 rounded-t-lg	 mb-4 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className='pl-4 pb-4'>
        <h3 className="text-lg text-gray-900 font-semibold mb-2">{title}</h3>
          <div className="flex gap-2 flex-wrap text-xs text-white">
            {tech.map((t, index) => (
              <span key={index} className="bg-black px-3 py-1 rounded-xl">
                {t}
              </span>
            ))}
        </div>
      </div>
        
    </div>
  )
}
