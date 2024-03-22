import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function ClientsWork() {
  const containerRef2 = useRef(null)
  const isInView2 = useInView(containerRef2, { once: true })
  const mainControls = useAnimation()
  const { scrollYProgress } = useScroll({
    target: containerRef2,
    offset: ['start end', 'end start'],
  })

  const paragraphOneValues = useTransform(
    scrollYProgress,
    [0, 1],
    ['30%', '0%'],
  )

  useEffect(() => {
    if (isInView2) {
      mainControls.start('visible')
    }
  }, [isInView2, mainControls])
  return (
    <motion.div ref={containerRef2} className="text-white mb-28 mx-28 h-96">
      <div className="font-light sm:text-3xl text-2xl">
        <div className="flex ">
          <motion.h1
            style={{ translateX: paragraphOneValues }}
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0 }}
            className="text-neutral-500 "
          >
            Alguns dos clientes para os quais tenho{' '}
          </motion.h1>
        </div>
        <motion.p
          style={{ translateX: paragraphOneValues }}
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0 }}
          className=" text-white"
        >
          desenvolvido
        </motion.p>
      </div>
      <div className="sm:flex md:flex-none gap-4 flex-none font-semibold mt-24 text-white text-2xl sm:text-3xl justify-around">
        <div>
          <motion.h1
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, color: '#be185d' }}
            transition={{ duration: 0.7 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-4"
          >
            ANALIZE
          </motion.h1>
        </div>
        <div>
          <motion.h1
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, color: '#be185d' }}
            transition={{ duration: 0.7 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-4"
          >
            ASYNC
          </motion.h1>
        </div>
        <div>
          <motion.h1
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, color: '#be185d' }}
            transition={{ duration: 0.7 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-4"
          >
            Plana Adhoc
          </motion.h1>
        </div>
      </div>
    </motion.div>
  )
}
