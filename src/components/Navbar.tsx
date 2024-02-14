interface NavbarProps {
  children?: React.ReactNode
}

export default function Navbar({ children }: NavbarProps) {
  return (
    <header className="flex">
      <div className="text-pink-700 fixed top-0 left-0 right-0 bg-black flex items-center p-3 justify-between mx-28">
        <h1 className="font-semibold text-xl">Bellico</h1>
        <div className="gap-2 text-xs flex">
          <h1>HOME</h1>
          <h1 className="text-white">WORK</h1>
          <h1 className="text-white">ABOUT</h1>
        </div>
      </div>
      {children}
    </header>
  )
}
