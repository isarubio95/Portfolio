export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Isaías Rubio</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
