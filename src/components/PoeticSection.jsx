import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { assets } from '../assets.js'

const lines = [
  { text: '這不只是一棟建築，',       delay: 0    },
  { text: '是一種生活的選擇，',       delay: 0.15 },
  { text: '是日光與靜謐的相遇，',     delay: 0.30 },
  { text: '是大安區最後的溫柔角落。', delay: 0.45 },
]

export default function PoeticSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const bgY     = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])
  const textY   = useTransform(scrollYProgress, [0, 0.5, 1], ['30px', '0px', '-30px'])

  const bgSrc = assets.sections.poetic

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        {bgSrc
          ? <img src={bgSrc} alt="" className="w-full h-full object-cover" />
          : <div className="w-full h-full img-garden" />
        }
        <div className="absolute inset-0 bg-black/65" />
      </motion.div>

      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Content */}
      <motion.div style={{ opacity, y: textY }}
                  className="relative z-10 text-center px-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.2 }}
          className="h-px w-16 bg-gold/60 mx-auto mb-10" />

        {lines.map((line, i) => (
          <motion.p key={i}
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.2, delay: line.delay, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-white/90 text-xl md:text-2xl leading-relaxed tracking-wider mb-1">
            {line.text}
          </motion.p>
        ))}

        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.6 }}
          className="h-px w-16 bg-gold/60 mx-auto mt-10" />

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }}
          className="text-white text-[10px] tracking-[0.5em] uppercase mt-8">
          臺北市大安區 ・ 臥龍街 151 巷
        </motion.p>
      </motion.div>
    </section>
  )
}
