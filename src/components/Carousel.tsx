import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface CarouselProps {
  children: React.ReactNode[]
}

export default function Carousel({ children: slides }: CarouselProps) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white text-black hover:bg-slate-100"
        >
          <IoIosArrowBack size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white text-black hover:bg-slate-100"
        >
          <IoIosArrowForward size={40} />
        </button>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`transition-all w-3 h-3 bg-white rounded-full ${curr === index ? 'p-2' : 'bg-opacity-50'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
