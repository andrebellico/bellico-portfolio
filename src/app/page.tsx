'use client'

import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import Card from '../components/Cards'
import { FaBookReader } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'
import { Avatar } from '@nextui-org/react'
import { Transition } from '@headlessui/react'
import { BiDownload } from 'react-icons/bi'

export default function Home() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <div className="flex">
        <Transition
          appear={true}
          show={true}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0 left-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <main className="my-10 mx-44">
            <div className="flex">
              <Image
                className="rounded-lg"
                src="/perfil.png"
                alt="Perfil do Bellico"
                height={100}
                width={100}
              />
              <div className="ml-4">
                <h1 className="text-3xl font-semibold">André Bellico</h1>
                <p className="font-semibold text-neutral-600">
                  Front-end, Web Developer @ASYNC
                </p>
                <Transition.Child
                  enter="transition ease-in-out duration-90 transform"
                  enterFrom="-translate-x-full opacity-0"
                  enterTo="translate-x-0 opacity-100"
                  leave="transition  ease-in-out duration-90 transform"
                  leaveFrom="translate-x-0 opacity-100"
                  leaveTo="-translate-x-full opacity-0"
                >
                  <div className="mt-2 gap-2 flex">
                    <h1 className="font-medium bg-pink-900 text-xs px-2 w-fit p-1 rounded-lg">
                      ReactJS
                    </h1>
                    <h1 className="font-medium bg-pink-900 text-xs px-2 w-fit p-1 rounded-lg">
                      TypeScript
                    </h1>
                    <h1 className="font-medium bg-pink-900 text-xs px-2 w-fit p-1 rounded-lg">
                      Git/GitHub
                    </h1>
                    <h1 className="font-medium bg-pink-900 text-xs px-2 w-fit p-1 rounded-lg">
                      NodeJs
                    </h1>
                    <h1 className="font-medium bg-pink-900 text-xs px-2 w-fit p-1 rounded-lg">
                      Figma
                    </h1>
                    <h1 className="font-medium bg-pink-900 text-xs px-2 w-fit p-1 rounded-lg">
                      TailwindCSS
                    </h1>
                  </div>
                </Transition.Child>
              </div>
            </div>
            <Card icon={<FaBookReader />} title="About Me">
              Atualmente, estou focado no aprimoramento das minhas habilidades
              na criação de sistemas, interfaces atraentes e intuitivas,
              utilizando ferramentas como React, Typescript e TailwindCSS.
              Recentemente, participei de projetos nos quais fortaleci minhas
              competências em HTML, CSS, Node.js, Figma e MongoDB. A combinação
              destas tecnologias tem permitido que eu contribua de forma eficaz
              para o desenvolvimento de interfaces elegantes e funcionais. Estou
              comprometido em continuar aprendendo e explorando novas técnicas
              para aprimorar ainda mais minhas capacidades.
            </Card>
            <Transition.Child
              enter="transition ease-in-out duration-90 transform"
              enterFrom="-translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition  ease-in-out duration-90 transform"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="-translate-x-full opacity-0"
            >
              <div className="flex fle gap-4">
                <Card
                  link="stackand"
                  icon={<HiAcademicCap />}
                  linkTitle="More"
                  title="Experience"
                >
                  <div className="flex gap-4 items-center my-4">
                    <Avatar isBordered src="/async.svg" />
                    <div>
                      <h1>ASYNC</h1>
                      <p className="text-neutral-600">Desenvolvedor</p>
                      <p className="text-neutral-700">2023/Nov - Present</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <Avatar isBordered src="/uniitalo.png" />
                    <div>
                      <h1>Universidade Uniítalo</h1>
                      <p className="text-neutral-600">
                        Análise e Desenvolvimento de Sistemas
                      </p>
                      <p className="text-neutral-700">2024 - 2026</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <Avatar isBordered src="/rocketseat.png" />
                    <div>
                      <h1>Rocketseat</h1>
                      <p className="text-neutral-600">ReactJS</p>
                      <p className="text-neutral-700">2023 - 50hrs</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <Avatar isBordered src="/udemy.png" />
                    <div>
                      <h1>Udemy</h1>
                      <p className="text-neutral-600">Lógica de Programação</p>
                      <p className="text-neutral-700">2023 - 20hrs</p>
                    </div>
                  </div>
                  <iframe name="iframe_download" className="hidden"></iframe>
                  <a
                    download="Curriculum.pdf"
                    className="bg-pink-900 w-full gap-2 items-center flex justify-center font-semibold px-4 py-2 rounded-lg"
                    href="/Curriculum.pdf"
                    target="iframe_download"
                  >
                    Download CV
                    <BiDownload size={18} />
                  </a>
                </Card>
                <Card icon={<FaBookReader />} title="More about me">
                  <ul className="list-disc p-4">
                    <li>Age: 18</li>
                    <li>Role: Web Developer</li>
                    <li>
                      Languages: English (intermediary) | Portuguese (native)
                    </li>
                    <li>Location: São Paulo, Brazil</li>
                    <li>Pronous: he/him</li>
                    <li>
                      Interest: Listem music, play games, play instruments, go
                      out with friends
                    </li>
                  </ul>
                </Card>
              </div>
            </Transition.Child>
            <Card icon={<FaBookReader />} title="Projects">
              <div></div>
            </Card>
          </main>
        </Transition>
      </div>
    </>
  )
}
