'use client'

import HomeHeader from '@/components/Home'
import StackAndUses from '@/components/StackAndUses'
import ClientsWork from '@/components/Clients'
import SelectedWorks from '@/components/SelectedWorks'
import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <AboutMe />
      <StackAndUses />
      <ClientsWork />
      <SelectedWorks />
      <ContactMe />
    </>
  )
}
