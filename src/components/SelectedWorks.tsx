import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Carousel from './Carousel'
import { motion } from 'framer-motion'

export default function SelectedWorks() {
  const [isOpenAsync, setIsOpenAsync] = useState(false)

  function closeModalAsync() {
    setIsOpenAsync(false)
  }

  function openModalAsync() {
    setIsOpenAsync(true)
  }

  const slidesAsync = [
    'Async/Header(1).jpg',
    'Async/Soluções.jpg',
    'Async/Comentarios.jpg',
    'Async/Contatos.jpg',
  ]

  const [isOpenPlana, setIsOpenPlana] = useState(false)

  function closeModalPlana() {
    setIsOpenPlana(false)
  }

  function openModalPlana() {
    setIsOpenPlana(true)
  }

  const slidesPlana = ['Plana/Rsd.jpg', 'Plana/clients.jpg', 'Plana/Custom.jpg']

  return (
    <>
      <div className="mx-24">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl text-neutral-50 mb-4">
            Projetos em destaque
          </h1>
          <div className="border border-pink-600/20 w-full"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex mt-24 gap-8"
        >
          <Image
            src="SelectedWorks/asyncP.svg"
            onClick={openModalAsync}
            width={362}
            height={490}
            alt="logo"
          />
          <Transition show={isOpenAsync} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={closeModalAsync}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl shadow-xl transition-all">
                      <Carousel>
                        {slidesAsync.map((s) => (
                          <img src={s} key={s} />
                        ))}
                      </Carousel>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <div className="p-2 text-white gap-4">
            <h1 className="mb-4 text-pink-500">Landing Page</h1>
            <h1 className="text-2xl ">
              Desenvolvi o visual da landing page da empresa com o foco em
              atrair clientes e aumentar o faturamento, aprendendo e aprimorando
              técnicas de marketing.
            </h1>

            <a className="p-2 flex font-thin text-sm items-center ">
              Ver design
              <IoIosArrowForward />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="flex text-white gap-8 my-24"
        >
          <div className="p-2 gap-4">
            <h1 className="mb-4 text-pink-500">Sistema de arquitetura</h1>
            <h1 className="text-3xl ">
              O Plana AdHoc é um sistema que automatiza o processo de escolha de
              customizações de arquitetura, de forma intuitiva e interativa!
            </h1>
            <h1 className="my-6">Website</h1>
            <div className="flex gap-2">
              <button className=" flex font-thin text-sm items-center justify-center">
                Ver projeto
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <Image
            src="SelectedWorks/PlanaAdhoc.svg"
            width={362}
            height={490}
            onClick={openModalPlana}
            alt="logo"
          />
          <Transition show={isOpenPlana} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={closeModalPlana}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl shadow-xl transition-all">
                      <Carousel>
                        {slidesPlana.map((s) => (
                          <img src={s} key={s} />
                        ))}
                      </Carousel>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex mt-24 gap-8"
        >
          <Image
            src="SelectedWorks/DesignSystem.svg"
            width={362}
            height={490}
            alt="logo"
          />

          <div className="p-2 text-white gap-4">
            <h1 className="mb-4 text-pink-500">AsyncUI</h1>
            <h1 className="text-2xl ">
              Design system é um sistema de padronização dos elementos, regras e
              princípios que orientam o desenvolvimento das interfaces de uma
              empresa. Seu objetivo é criar uma identidade para o usuário e
              facilitar o trabalho dos designers e desenvolvedores.
            </h1>
            <h1 className="my-6">Aplicação</h1>

            <div className="flex gap-2">
              <Link
                href={'https://devcodapp.github.io/async-ui/'}
                className=" flex font-thin text-sm items-center justify-center"
              >
                Ver projeto
                <IoIosArrowForward />
              </Link>
              <Link
                href={'https://github.com/devcodapp/async-ui'}
                className=" flex font-thin text-sm items-center justify-center"
              >
                github
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
