import Image from 'next/image'
import { motion } from 'framer-motion'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'

export default function AboutMe() {
  const handleContact = () => {
    const contactSection = document.querySelector('#ContactMe')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="flex mx-24 text-white items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-pink-600 text-lg">Olá, meu nome é</p>
        <h1 className="mb-4 text-5xl mt-2">André Bellico</h1>
        <p className="mr-10 pr-10 ">
          Olá! Sou André Bellico, um desenvolvedor web apaixonado por
          tecnologia, com quatro meses de experiência na área. Tenho um forte
          desejo de dedicar-me à criação de sistemas inovadores, combinando
          interfaces atraentes e intuitivas em projetos desafiadores. Estou
          constantemente buscando novas oportunidades e desafios para expandir
          meu conhecimento e habilidades.
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
          <button
            onClick={handleContact}
            className="items-center flex border mt-4 border-pink-600 text-pink-400 p-3 rounded-md"
          >
            Entre em contato <IoIosArrowRoundForward />{' '}
          </button>
          <div className="text-neutral-700 flex items-center gap-2 ml-2 mt-4">
            <a href="https://www.linkedin.com/in/andr%C3%A9-bellico/">
              <FaLinkedin
                size={24}
                className="hover:text-neutral-50 transition"
              />
            </a>
            <a href="https://www.instagram.com/andrevsbellico/">
              <FaInstagram
                size={24}
                className="hover:text-neutral-50 transition"
              />
            </a>
            <a href={`https://wa.me/5511975981987?text=Olá, tudo bem?`}>
              <FaWhatsapp
                size={24}
                className="hover:text-neutral-50 transition"
              />
            </a>
            <a href="https://github.com/andrebellico">
              <FaGithub
                size={24}
                className="hover:text-neutral-50 transition"
              />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="origin-center flex  text-white items-center justify-center h-screen w-full"
      >
        <Image
          className="rounded-md ml-14 shadow-lg"
          height={400}
          width={300}
          alt="profile"
          src={'/profile.png'}
        />
      </motion.div>
    </div>
  )
}
