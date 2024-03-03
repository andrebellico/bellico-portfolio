'use client'

import HomeHeader from '@/components/Home'
import StackAndUses from '@/components/StackAndUses'
import ClientsWork from '@/components/Clients'
import SelectedWorks from '@/components/SelectedWorks'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <StackAndUses />
      <ClientsWork />
      <SelectedWorks />
    </>
  )
}
