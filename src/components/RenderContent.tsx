'use client'

import Sidebar from './Sidebar'

interface iRenderContent {
  children: React.ReactNode
}

export function RenderContent({ children }: iRenderContent) {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="p-6 h-full w-full overflow-y-auto">{children}</div>
    </>
  )
}
