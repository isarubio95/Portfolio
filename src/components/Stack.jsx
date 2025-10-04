import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import {
  FaReact, FaHtml5, FaCss3Alt, FaPhp, FaJs, FaJava
} from 'react-icons/fa'
import { SiLaravel, SiFigma, SiMysql } from 'react-icons/si'

const techStack = [
  { name: 'HTML',  icon: FaHtml5,  color: 'text-orange-500' },
  { name: 'CSS',   icon: FaCss3Alt,color: 'text-blue-500'   },
  { name: 'JavaScript', icon: FaJs,   color: 'text-yellow-400' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400'  },
  { name: 'PHP',   icon: FaPhp,   color: 'text-indigo-400' },
  { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
  { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-300' },
  { name: 'Java',  icon: FaJava,  color: 'text-red-600' }
]

export default function Stack () {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex]   = useState(0)
  const [perView,     setPerView]       = useState(2)  // se actualizará con Swiper

  const totalSlides  = techStack.length
  const bulletCount  = Math.max(1, totalSlides - perView + 1)

  return (
    <section id="stack" className="bg-gray-800 py-20 text-white">
      <div className="max-w-5xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold">
          Stack <span className="text-green-500">Tecnológico</span>
        </h2>

        <div className="mt-12 relative px-12 md:px-20">
          {/* Flechas */}
          <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer select-none hover:text-green-400" />
          <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer select-none hover:text-green-400" />

          {/* Carrusel */}
          <Swiper
            modules={[Navigation]}
            onSwiper={(s) => {
              swiperRef.current = s
              setPerView(s.params.slidesPerView)           // valor inicial
            }}
            onBreakpoint={(s) => setPerView(s.params.slidesPerView)} // cambia con el ancho
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            slidesPerView={2}
            breakpoints={{
              640:  { slidesPerView: 3 },
              1024: { slidesPerView: 5 }
            }}
          >
            {techStack.map(({ icon: Icon, name, color }, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Icon  className={`w-16 h-16 mb-2 ${color}`} />
                  <span className="text-sm font-medium">{name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bullets */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: bulletCount }).map((_, i) => (
              <button
                key={i}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'bg-green-500'
                    : 'bg-white opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
