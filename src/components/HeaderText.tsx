import { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

interface HeaderTextProps {
  children: React.ReactNode
}

export const HeaderText = ({ children }: HeaderTextProps) => {
  const controls = useAnimationControls()
  const [isPlaying, setIsPlaying] = useState(false)

  const rubberBand = () => {
    controls.start({
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.4, .55, 1)',
        'scale3d(0.75, 1.25, 1)',
        'scale3d(1.25, .85, 1)',
        'scale3d(.9, 1.05, 1)',
        'scale3d(1, 1, 1)',
      ],
      // eslint-disable-next-line prettier/prettier
      transition: { times: [0, 0.4, 0.6, 0.7, 0.8, 0.9] },
    })
    setIsPlaying(true)
  }

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) {
          rubberBand()
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      style={{ color: isPlaying ? '#be185d' : '#ffff' }}
    >
      {children}
    </motion.span>
  )
}
