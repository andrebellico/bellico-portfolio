'use client'

import Navbar from './Navbar'

// import Sidebar from './Sidebar'

interface iRenderContent {
  children: React.ReactNode
}

export function RenderContent({ children }: iRenderContent) {
  return (
    <>
      {/* <Sidebar></Sidebar> */}
      <Navbar></Navbar>
      <div className="h-full w-full overflow-y-auto">{children}</div>
    </>
  )
}
