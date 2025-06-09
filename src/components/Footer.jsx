export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Isaías Rubio</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/isa%C3%ADas-rubio-hern%C3%A1ndez-539085139/" className="hover:text-white transition">LinkedIn</a>
          <a href="https://github.com/isarubio95" className="hover:text-white transition">GitHub</a>
          <a href="https://www.figma.com/@isaiasrubio" className="hover:text-white transition">Figma</a>
        </div>
      </div>
    </footer>
  )
}
