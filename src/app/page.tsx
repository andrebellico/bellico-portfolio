'use client'

import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'

export default function Home() {
  return (
    <>
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
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-4xl">
            I’m a designer specialising in UI/UX and Interaction Design
          </h1>
        </div>
        <div className="mx-28 h-96">
          <div className="font-light">
            <div className="flex">
              <h1 className="text-neutral-700 text-3xl">
                Some of the clients I have{' '}
              </h1>
            </div>
            <p className="text-3xl">designed for</p>
          </div>
          <div className="flex font-semibold mt-24 text-neutral-800 text-3xl justify-around">
            <div>
              <h1>ANALIZE</h1>
            </div>
            <div>
              <h1>ASYNC</h1>
            </div>
            <div>
              <h1>PlanaAdhoc</h1>
            </div>
          </div>
        </div>
        <div className="mx-28 ">
          <h1 className="text-3xl mb-24">Selected Works</h1>
          <div className="flex gap-8">
            <Image src="/asyncP.svg" width={594} height={490} alt="logo" />
            <div className="p-2 gap-4">
              <h1 className="mb-4">Landing Page</h1>
              <h1 className="text-3xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                adipisci commodi, sit uns
              </h1>
              <h1 className="my-6">Website Design</h1>
              <button className="border rounded-full p-2 flex font-thin text-sm items-center justify-center">
                view work
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="flex gap-8 my-24">
            <div className="p-2 gap-4">
              <h1 className="mb-4">Landing Page</h1>
              <h1 className="text-3xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                adipisci commodi, sit uns
              </h1>
              <h1 className="my-6">Website Design</h1>
              <button className="border rounded-full p-2 flex font-thin text-sm items-center justify-center">
                view work
                <IoIosArrowForward />
              </button>
            </div>
            <Image src="/PlanaAdhoc.svg" width={594} height={490} alt="logo" />
          </div>
          <div className="flex gap-8">
            <Image src="/Analize.svg" width={594} height={490} alt="logo" />
            <div className="p-2 gap-4">
              <h1 className="mb-4">Landing Page</h1>
              <h1 className="text-3xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                adipisci commodi, sit uns
              </h1>
              <h1 className="my-6">Website Design</h1>
              <button className="border rounded-full p-2 flex font-thin text-sm items-center justify-center">
                view work
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="flex gap-8 my-24">
            <div className="p-2 gap-4">
              <h1 className="mb-4">Landing Page</h1>
              <h1 className="text-3xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                adipisci commodi, sit uns
              </h1>
              <h1 className="my-6">Website Design</h1>
              <button className="border rounded-full p-2 flex font-thin text-sm items-center justify-center">
                view work
                <IoIosArrowForward />
              </button>
            </div>
            <Image
              src="/DesignSystem.svg"
              width={594}
              height={490}
              alt="logo"
            />
          </div>
          <div className="mx-28 gap-4 items-center justify-center flex h-[996px]">
            <h1 className="text-3xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              adipisci commodi, sit uns
            </h1>
            <Image src="/Horizontal.svg" width={480} height={490} alt="logo" />
          </div>
        </div>
      </Transition>
    </>
  )
}
