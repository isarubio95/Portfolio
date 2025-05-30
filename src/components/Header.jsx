import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header () {
  const [activeSection, setActiveSection] = useState('inicio')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const links = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'stack', label: 'Stack' },
    { id: 'contacto', label: 'Contacto' }
  ]

  return (
    <>
      {/* ───── HEADER ───── */}
      <header className="absolute sm:fixed mt-5 sm:mt-0 z-50 sm:shadow-custom sm:top-5 sm:left-0 sm:right-0 mx-auto w-[95%] lg:w-5/6 sm:rounded-full sm:bg-white text-black">
        <nav className="sm:w-full sm:h-14 flex items-center sm:justify-center justify-end px-2">

          {/* ───── Desktop nav ───── */}
          <ul className="hidden w-full h-full sm:flex items-center justify-between text-sm uppercase font-medium">
            {links.map((link) => (
              <li key={link.id} className="flex h-full w-full items-center justify-center">
                <a
                  href={`#${link.id}`}
                  className={`flex w-[95%] h-5/6 items-center justify-center transition-all duration-200 rounded-full ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-green-600 to-green-400 text-white'
                      : 'hover:text-green-500'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ───── Hamburguesa ───── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-2xl text-black"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </header>

      {/* ───── Menú lateral móvil ───── */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-2xl z-40 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <nav className="mt-6 px-6 flex flex-col gap-6 text-lg font-medium">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 px-4 rounded ${
                activeSection === link.id
                  ? 'bg-green-500 text-white'
                  : 'text-green-600 hover:text-green-700'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ───── Fondo oscuro al abrir menú ───── */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}
