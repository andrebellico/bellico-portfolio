// import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'

// import SpotifyWebApi from 'spotify-web-api-js'

interface NavbarProps {
  children?: React.ReactNode
}

// const spotifyApi = new SpotifyWebApi()

// interface SpotifyToken {
//   access_token: string
// }

// interface NowPlaying {
//   name: string
//   albumArt: string
// }

// const getTokenFromUrl = (): SpotifyToken => {
//   return (
//     window.location.hash
//       .substring(1)
//       .split('&')
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       .reduce((initial: any, item: string) => {
//         const parts = item.split('=')
//         initial[parts[0]] = decodeURIComponent(parts[1])
//         return initial
//       }, {}) as SpotifyToken
//   )
// }
export default function Navbar({ children }: NavbarProps) {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const [spotifyToken, setSpotifyToken] = useState<string>('')
  //   const [nowPlaying, setNowPlaying] = useState<NowPlaying>({
  //     name: '',
  //     albumArt: '',
  //   })
  //   const [loggedIn, setLoggedIn] = useState<boolean>(false)

  //   useEffect(() => {
  //     const token = getTokenFromUrl().access_token
  //     window.location.hash = ''

  //     if (token) {
  //       setSpotifyToken(token)
  //       spotifyApi.setAccessToken(token)
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       spotifyApi.getMe().then((user: any) => {
  //         console.log(user)
  //       })
  //       setLoggedIn(true)
  //     }
  //   }, [])

  //   const getNowPlaying = () => {
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     spotifyApi.getMyCurrentPlaybackState().then((response: any) => {
  //       setNowPlaying({
  //         name: response.item.name,
  //         albumArt: response.item.album.images[0].url,
  //       })
  //     })
  //   }
  return (
    <header className="absolute top-0 z-10 h-24 w-full flex items-center justify-center">
      <motion.div
        initial={{ top: -100 }}
        animate={{ top: 0 }}
        transition={{ duration: 0.5 }}
        className="text-pink-500  z-[999] fixed top-0 left-0 right-0 bg-transparent flex items-center p-3 justify-between mx-28"
      >
        <h1 className="font-semibold text-xl">Bellico</h1>
        <div className="gap-2 text-sm flex">
          {/* {loggedIn && (
            <>
              <div>
                <img src={nowPlaying.albumArt} width={40} height={40} />
              </div>
              <div className="w-48 text-white ">
                Song playing now:
                <h1 className="text-pink-700">{nowPlaying.name}</h1>
              </div>
            </>
          )} */}
          <a href="https://github.com/andrebellico" className="ml-8">
            <FaGithub size={20} />
          </a>
          <a href={`https://wa.me/5511975981987?text=Olá, tudo bem?`}>
            <FaWhatsapp size={20} />
          </a>
          <a href="https://www.linkedin.com/in/andr%C3%A9-bellico/">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/andrevsbellico/" className="">
            <FaInstagram size={20} />
          </a>
          {/* {loggedIn ? (
            <button className="text-white" onClick={() => getNowPlaying()}>
              Check Now Playing
            </button>
          ) : (
            <a href="http://localhost:8888/" className="text-white">
              Connect Spotify
            </a>
          )} */}
        </div>
      </motion.div>
      {children}
    </header>
  )
}
