'use client'

import HomeHeader from '@/components/Home'
import StackAndUses from '@/components/StackAndUses'
import ClientsWork from '@/components/Clients'
import AboutMe from '@/components/AboutMe'
import SelectedWorks from '@/components/SelectedWorks'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <StackAndUses />
      <ClientsWork />
      <div className="mx-28 ">
        <SelectedWorks />
        <AboutMe />
      </div>
    </>
  )
}
