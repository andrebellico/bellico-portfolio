import Image from 'next/image'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'

export default function AboutMe() {
  return (
    <div className="flex mx-24 text-white items-center justify-center h-screen">
      <div>
        <p className="text-pink-600 text-lg">Olá, meu nome é</p>
        <h1 className="mb-4 text-5xl mt-2">André Bellico</h1>
        <p className="mr-10 pr-10 ">
          Olá, meu nome é André Bellico e sou um desenvolvedor front-end
          apaixonado por tecnologia. Com 4 meses de experiência. Meu objetivo é
          criar interfaces de usuário bonitas e funcionais, além de liderar
          equipes técnicas em projetos desafiadores. Estou sempre aberto a novas
          oportunidades e desafios.
        </p>
        <div className="gap-3 flex mt-1">
          <div className="rounded bg-pink-800/30 px-2  text-sm flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            NextJs
          </div>
          <div className="rounded bg-pink-800/30 px-2 text-sm flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            ReactJs
          </div>
          <div className="rounded bg-pink-800/30 px-2 text-sm flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            TailwindCSS
          </div>
          <div className="rounded bg-pink-800/30 px-2 text-sm flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            TypeScript
          </div>
          <div className="rounded bg-pink-800/30 px-2 text-sm flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            NodeJs
          </div>
          <div className="rounded bg-pink-800/30 px-2 text-sm flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            Radix
          </div>
        </div>
        <div className="flex items-center ">
          <button className="items-center flex border mt-4 border-pink-600 text-pink-400 p-3 rounded-md">
            Entre em contato <IoIosArrowRoundForward />{' '}
          </button>
          <div className="text-neutral-700 flex items-center gap-2 ml-2 mt-4">
            <FaLinkedin
              size={24}
              className="hover:text-neutral-50 transition"
            />
            <FaInstagram
              size={24}
              className="hover:text-neutral-50 transition"
            />
            <FaWhatsapp
              size={24}
              className="hover:text-neutral-50 transition"
            />
            <FaGithub size={24} className="hover:text-neutral-50 transition" />
          </div>
        </div>
      </div>
      <Image
        className="rounded-md ml-14 shadow-lg"
        height={400}
        width={300}
        alt="profile"
        src={'/profile.png'}
      />
    </div>
  )
}
