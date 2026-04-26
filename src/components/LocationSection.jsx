import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const places = [
  { icon: '🚇', name: '六張犁捷運站',       dist: '600m',  time: '步行 8 分鐘'   },
  { icon: '🏫', name: '大安國小',           dist: '近',    time: '步行可達'      },
  { icon: '🏫', name: '芳和國中',           dist: '近',    time: '步行可達'      },
  { icon: '🏫', name: '和平完全中學',       dist: '近',    time: '步行可達'      },
  { icon: '🏥', name: '台北醫學院附設醫院', dist: '1.6km', time: '摩托車 5 分鐘' },
]

export default function LocationSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section id="location" ref={ref} className="py-28 md:py-36 relative overflow-hidden bg-[#F5EFD8]/30">

      {/* Subtle bg */}
      <motion.div style={{ y: bgY }}
                  className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full"
             style={{ background: 'radial-gradient(ellipse at 60% 50%, #B8935A22 0%, transparent 70%)' }} />
      </motion.div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-[9px] tracking-[0.5em] text-gold uppercase mb-4">Location</p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark mb-4">黃金地段・大安核心</h2>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }}
            className="h-px w-20 bg-gold/60 mx-auto mb-6"
          />
          <p className="text-dark/50 text-xs tracking-[0.2em]">台北市大安區臥龍街 151 巷 62-2 & 62-4 號</p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden border border-[#E8D8B8]">
              <iframe
                title="香頌日和地圖" width="100%" height="100%" loading="lazy"
                src="https://www.google.com/maps?q=台北市大安區臥龍街151巷62&output=embed"
                className="border-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Corner ornaments */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-gold" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-gold" />
          </motion.div>

          {/* Distance list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-serif text-2xl text-dark mb-8">周邊生活機能</h3>
            <div className="space-y-0">
              {places.map((p, i) => (
                <motion.div key={p.name}
                            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ x: 6, backgroundColor: '#F5EFD8' }}
                            className="flex items-center gap-5 py-5 border-b border-[#E8D8B8]/60
                                       cursor-default transition-colors duration-300">
                  <span className="text-2xl flex-shrink-0">{p.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm text-dark font-medium">{p.name}</p>
                    <p className="text-[10px] text-dark/40 tracking-wide mt-0.5">{p.time}</p>
                  </div>
                  <motion.span whileHover={{ color: '#B8935A' }}
                               className="text-sm font-medium text-gold/80 transition-colors">
                    {p.dist}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://maps.google.com/?q=台北市大安區臥龍街151巷62"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ x: 4 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 mt-8 text-xs tracking-[0.2em] uppercase
                         text-dark/60 hover:text-gold transition-colors duration-300"
            >
              <span className="w-8 h-px bg-current transition-colors" />
              在 Google Maps 查看完整地圖
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
