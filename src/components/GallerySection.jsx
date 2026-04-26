import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { assets } from '../assets.js'

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

// Renders either a real <img> or the CSS gradient fallback
function GalleryImage({ item, className = '' }) {
  return item.src
    ? <img src={item.src} alt={item.label} className={`absolute inset-0 w-full h-full object-cover ${className}`} />
    : <div className={`absolute inset-0 ${item.fallback} ${className}`} />
}

export default function GallerySection() {
  const [hovered, setHovered]   = useState(null)
  const [lightbox, setLightbox] = useState(null)

  const items = assets.gallery

  return (
    <section id="gallery" className="py-28 md:py-36 bg-dark">
      <div className="max-w-6xl mx-auto px-8">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 1 }}
                    className="text-center mb-16">
          <p className="text-[9px] tracking-[0.5em] text-gold uppercase mb-4">Gallery</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">空間賞析</h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }}
                      className="h-px w-20 bg-gold/60 mx-auto" />
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden"
                    whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-4 grid-rows-3 gap-2 h-[600px] md:h-[700px]">
          {items.map(item => (
            <motion.div key={item.id} variants={itemVariants}
                        className={`relative overflow-hidden cursor-pointer group ${item.span || ''}`}
                        onHoverStart={() => setHovered(item.id)}
                        onHoverEnd={()  => setHovered(null)}
                        onClick={() => setLightbox(item)}>

              {/* Image or gradient */}
              <motion.div className="absolute inset-0"
                          animate={{ scale: hovered === item.id ? 1.08 : 1 }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                <GalleryImage item={item} />
              </motion.div>

              {/* Overlay */}
              <motion.div className="absolute inset-0 bg-black/60"
                          animate={{ opacity: hovered === item.id ? 0.2 : 0.45 }}
                          transition={{ duration: 0.4 }} />

              {/* Label */}
              <motion.div className="absolute bottom-0 left-0 right-0 p-4"
                          animate={{ y: hovered === item.id ? 0 : 8, opacity: hovered === item.id ? 1 : 0.6 }}
                          transition={{ duration: 0.4 }}>
                <p className="text-[9px] text-gold/80 tracking-[0.3em] uppercase">{item.en}</p>
                <p className="font-serif text-white text-sm">{item.label}</p>
              </motion.div>

              {/* Zoom icon */}
              <motion.div className="absolute top-4 right-4 w-8 h-8 border border-white/30 flex items-center justify-center"
                          animate={{ opacity: hovered === item.id ? 1 : 0, scale: hovered === item.id ? 1 : 0.8 }}
                          transition={{ duration: 0.3 }}>
                <span className="text-white text-xs">+</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  viewport={{ once: true }} transition={{ delay: 0.5 }}
                  className="text-center text-[10px] text-white/30 tracking-[0.3em] uppercase mt-6">
          * 圖片為示意效果，實際以完工為準
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-8"
                      onClick={() => setLightbox(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-3xl aspect-video overflow-hidden"
                        onClick={e => e.stopPropagation()}>
              <GalleryImage item={lightbox} />
              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] text-gold tracking-[0.4em] uppercase">{lightbox.en}</p>
                <p className="font-serif text-white text-xl">{lightbox.label}</p>
              </div>
            </motion.div>
            <button onClick={() => setLightbox(null)}
                    className="absolute top-6 right-6 text-white/50 hover:text-white text-2xl transition-colors">
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
