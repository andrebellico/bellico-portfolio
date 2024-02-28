import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Carousel from './Carousel'

export default function SelectedWorks() {
  const [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const slides = ['/Soluções.svg', '/Soluções.svg', '/Soluções.svg']

  return (
    <>
      <h1 className="text-3xl mb-24 text-neutral-50">Selected Works</h1>
      <div className="flex gap-8">
        <Image
          src="/asyncP.svg"
          onClick={openModal}
          width={362}
          height={490}
          alt="logo"
        />
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                      {slides.map((s) => (
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
            Desenvolvi o visual da landing page da empresa com o foco em atrair
            clientes e aumentar o faturamento, aprendendo e aprimorando técnicas
            de marketing.
          </h1>
          <h1 className="my-6">Design</h1>
          <button className="border rounded-full p-2 flex font-thin text-sm items-center justify-center">
            view work
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="flex text-white gap-8 my-24">
        <div className="p-2 gap-4">
          <h1 className="mb-4">Architecture System</h1>
          <h1 className="text-3xl ">
            Plana AdHoc is a system to automatize the process of choosing
            architecture customizations, in a intuitive; and interactive way!
          </h1>
          <h1 className="my-6">Website</h1>
          <div className="flex gap-2">
            <button className="border rounded-full p-2 flex font-thin text-sm items-center justify-center">
              view work
              <IoIosArrowForward />
            </button>
            <button className="border rounded-full p-2 flex font-thin text-sm items-center justify-center">
              view work
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <Image src="/PlanaAdhoc.svg" width={362} height={490} alt="logo" />
      </div>
      <div className="flex text-white gap-8">
        <Image src="/Group 6.svg" width={362} height={490} alt="logo" />
        <div className="p-2 gap-4">
          <h1 className="mb-4">AnalizeCash</h1>
          <h1 className="text-3xl ">
            Analize Consultoria - Trabalhamos com serviços financeiros,
            treinamentos e soluções personalizadas para e-commerce.
          </h1>
          <h1 className="my-6">Prototype and Development</h1>
          <div className="flex gap-2">
            <button className="border rounded-full p-2 flex font-thin text-sm items-center justify-center">
              view work
              <IoIosArrowForward />
            </button>
            <button className="border rounded-full p-2 flex font-thin text-sm items-center justify-center">
              view work
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-8 text-white my-24">
        <div className="p-2 gap-4">
          <h1 className="mb-4">AsyncUI</h1>
          <h1 className="text-2xl ">
            Design system é um sistema de padronização dos elementos, regras e
            princípios que orientam o desenvolvimento das interfaces de uma
            empresa. Seu objetivo é criar uma identidade para o usuário e
            facilitar o trabalho dos designers e desenvolvedores.
          </h1>
          <h1 className="my-6">Application</h1>
          <div className="flex gap-2">
            <Link
              href={'https://devcodapp.github.io/async-ui/'}
              className="border rounded-full p-2 flex font-thin text-sm items-center justify-center"
            >
              view work
              <IoIosArrowForward />
            </Link>
            <Link
              href={'https://github.com/devcodapp/async-ui'}
              className="border rounded-full p-2 flex font-thin text-sm items-center justify-center"
            >
              github
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
        <Image src="/DesignSystem.svg" width={362} height={490} alt="logo" />
      </div>
    </>
  )
}
