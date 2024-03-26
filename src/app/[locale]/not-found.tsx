import Image from 'next/image'
import { IoIosArrowRoundForward } from 'react-icons/io'

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full ">
      <Image width={400} height={400} src={'/not-found.png'} alt="not found" />
      <div className="text-neutral-50">
        <h1 className="text-3xl">Oops!</h1>
        <p className="text-xl">Page not found</p>
        <p>The page you are looking for does not exist.</p>
        <p>It might have been moved or delete.</p>
        <a className="text-pink-600 text-sm flex items-center mt-2" href="/">
          back to home page
          <IoIosArrowRoundForward />
        </a>
      </div>
    </div>
  )
}

export default NotFound
