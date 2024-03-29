import Image from 'next/image'
import { useTranslations } from 'use-intl'
import { motion } from 'framer-motion'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function AboutMe() {
  const t = useTranslations()

  const handleContact = () => {
    const contactSection = document.querySelector('#ContactMe')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="flex mx-24  text-white items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-pink-600 md:text-base sm:text-sm lg:text-lg">
          {t('ABOUTME.subheading')}
        </p>
        <h1 className="mb-4 md:text-4xl sm:3xl lg:text-5xl mt-2">
          André Bellico
        </h1>
        <p className="sm:mr-10 mr-0 pr-0 sm:pr-10 lg:text-base md:text-sm sm:text-xs">
          {t('ABOUTME.presentation')}
        </p>
        <div className="gap-3  lg:grid-cols-6 grid-cols-2 grid text-[0.6rem] md:grid-cols-3 md:text-xs sm:text-xs lg:text-sm sm:grid-cols-2 mt-1">
          <div className="rounded bg-pink-800/30 flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            NextJs
          </div>
          <div className="rounded bg-pink-800/30 flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            ReactJs
          </div>
          <div className="rounded bg-pink-800/30 flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            TailwindCSS
          </div>
          <div className="rounded bg-pink-800/30 flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            TypeScript
          </div>
          <div className="rounded bg-pink-800/30 flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            NodeJs
          </div>
          <div className="rounded bg-pink-800/30 flex hover:text-pink-400 justify-center text-pink-500 pt-1">
            Radix
          </div>
        </div>
        <div className="flex items-center ">
          <button
            onClick={handleContact}
            className="items-center sm:text-base text-xs flex border mt-4 border-pink-600 text-pink-400 p-3 rounded-md"
          >
            {t('ABOUTME.contact-button')} <IoIosArrowRoundForward />{' '}
          </button>
          <div className="text-neutral-700 flex items-center gap-2 ml-2 mt-4">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/andr%C3%A9-bellico/"
            >
              <FaLinkedin
                size={24}
                className="hover:text-neutral-50 transition"
              />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/andrevsbellico/"
            >
              <FaInstagram
                size={24}
                className="hover:text-neutral-50 transition"
              />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={`https://wa.me/5511975981987?text=Olá, tudo bem?`}
            >
              <FaWhatsapp
                size={24}
                className="hover:text-neutral-50 transition"
              />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/andrebellico"
            >
              <FaGithub
                size={24}
                className="hover:text-neutral-50 transition"
              />
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className=" sm:hidden hidden md:hidden lg:flex  text-white items-center justify-center h-screen w-full"
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
