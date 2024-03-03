import { HeaderText } from './HeaderText'
import { motion } from 'framer-motion'

export default function HomeHeader() {
  const sentence = 'Sou desenvolvedor e designer'.split('')

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="flex  items-center justify-center h-screen"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-5xl flex">
          {sentence.map((letter, index) => {
            return (
              <HeaderText key={index}>
                {letter === ' ' ? '\u00A0' : letter}
              </HeaderText>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
