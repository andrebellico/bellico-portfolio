import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function AboutMe() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const mainControls = useAnimation()

  const { scrollYProgress: completionProgress } = useScroll({
    target: containerRef,
    offset: ['end start', 'center end'],
  })
  const paragraphOneValue = useTransform(
    completionProgress,
    [0, 1],
    ['30%', '0%'],
  )
  const paragraphTwoValue = useTransform(
    completionProgress,
    [0, 1],
    ['-30%', '0%'],
  )

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])
  return (
    <motion.div
      ref={containerRef}
      className="mx-28 gap-4 text-white items-center justify-center flex h-[996px]"
    >
      <motion.h1
        style={{ translateX: paragraphTwoValue }}
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0 }}
        className="text-3xl "
      >
        Desenvolvedor web apaixonado por criar soluções inovadoras e eficientes
        para problemas complexos.
      </motion.h1>
      <motion.img
        style={{ translateX: paragraphOneValue }}
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0 }}
        src="/Horizontal.svg"
        width={480}
        height={490}
        alt="logo"
      />
    </motion.div>
  )
}
