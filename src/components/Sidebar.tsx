import { FaHome, FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdFolderShared, MdEmail } from 'react-icons/md'
import { FaComputer } from 'react-icons/fa6'
import { RiExternalLinkFill } from 'react-icons/ri'

interface SibebarProps {
  children?: React.ReactNode
}

export default function Card({ children }: SibebarProps) {
  return (
    <aside className="h-screen border-r-2 w-80 text-sm border-pink-950">
      <div className="hover:bg-pink-800 transition flex items-center gap-2 p-4 m-2 mt-4 rounded h-7">
        <FaHome />
        <a href="/">Home</a>
      </div>

      <p className="text-neutral-600 items-center m-2 mt-7 ml-6">Me</p>
      <div className="hover:bg-pink-800 transition flex items-center gap-2 p-4 m-2 rounded h-7">
        <MdFolderShared />
        <a href="#">My Projects</a>
      </div>
      {/* <div className="hover:bg-pink-800 transition flex items-center gap-2 p-4 m-2 rounded h-7">
        <FaBook />
        <a href="#">About Me</a>
      </div> */}
      <div className="hover:bg-pink-800 transition flex items-center gap-2 p-4 m-2 rounded h-7">
        <FaComputer />
        <a href="#">Stack and uses</a>
      </div>

      <p className="text-neutral-600 items-center m-2 mt-7 ml-6">
        Social Media
      </p>
      <div className="hover:bg-pink-800 transition flex items-center gap-2 p-4 m-2 rounded h-7">
        <FaGithub />
        <div className="flex justify-between w-full items-center">
          <a href="https://github.com/andrebellico">Github</a>
          <RiExternalLinkFill />
        </div>
      </div>
      <div className="hover:bg-pink-800 transition flex items-center gap-2 p-4 m-2 rounded h-7">
        <FaLinkedin />
        <div className="flex justify-between w-full items-center">
          <a href="https://www.linkedin.com/in/andr%C3%A9-bellico/">Linkedin</a>
          <RiExternalLinkFill />
        </div>
      </div>
      <div className="hover:bg-pink-800 transition flex items-center gap-2 p-4 m-2 rounded h-7">
        <MdEmail />
        <div className="flex justify-between w-full items-center">
          <a href="#">Email</a>
          <RiExternalLinkFill />
        </div>
      </div>
      {children}
    </aside>
  )
}
