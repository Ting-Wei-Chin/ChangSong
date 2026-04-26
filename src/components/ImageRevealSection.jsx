import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { assets } from '../assets.js'

export default function ImageRevealSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const rawClip    = useTransform(scrollYProgress, [0.05, 0.75], [0, 100])
  const smoothClip = useSpring(rawClip, { stiffness: 60, damping: 20, mass: 0.5 })
  const clipPath   = useTransform(smoothClip, v => `inset(0% 0% ${v}% 0%)`)
  const realImgY   = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1])
  const textY       = useTransform(scrollYProgress, [0.5, 0.85], [40, 0])
  const label1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const label2Opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])

  const { painting, exterior } = assets.sections

  return (
    <div ref={ref} style={{ height: '250vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Real photo (bottom) ───────────────── */}
        <motion.div style={{ y: realImgY }} className="absolute inset-0 scale-110">
          {exterior
            ? <img src={exterior} alt="香頌日和實景" className="w-full h-full object-cover" />
            : <div className="w-full h-full img-exterior" />
          }
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </motion.div>

        {/* ── Painting (top, clips away) ────────── */}
        <motion.div style={{ clipPath }} className="absolute inset-0 grain-overlay">
          {painting
            ? <img src={painting} alt="建築意象" className="w-full h-full object-cover" />
            : <div className="w-full h-full img-painting" />
          }
          <div className="absolute inset-0"
               style={{
                 background: `
                   repeating-linear-gradient(-45deg, rgba(255,255,255,0.02) 0px,
                   rgba(255,255,255,0.02) 1px, transparent 1px, transparent 8px),
                   radial-gradient(ellipse at 30% 40%, rgba(212,168,90,0.2) 0%, transparent 50%)
                 `,
               }} />
          <motion.div style={{ opacity: label1Opacity }}
                      className="absolute bottom-10 left-10">
            <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-1">建築意象</p>
            <p className="font-serif italic text-white/70 text-lg">Artistic Rendering</p>
          </motion.div>
        </motion.div>

        {/* ── Real photo label ──────────────────── */}
        <motion.div style={{ opacity: label2Opacity }}
                    className="absolute bottom-10 left-10 z-10">
          <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-1">實景呈現</p>
          <p className="font-serif italic text-white/70 text-lg">Real Exterior</p>
        </motion.div>

        {/* ── Center text ───────────────────────── */}
        <motion.div style={{ opacity: textOpacity, y: textY }}
                    className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <div className="h-px w-20 bg-gold/60 mb-8" />
          <p className="text-[9px] text-gold tracking-[0.5em] uppercase mb-4">Architecture</p>
          <h2 className="font-serif text-white text-3xl md:text-5xl tracking-widest text-center mb-4">
            七層精品建築
          </h2>
          <p className="text-white/60 text-sm tracking-widest">台北市大安區・即將完工</p>
        </motion.div>

        {/* ── Progress bar ──────────────────────── */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-20 bg-white/10 relative overflow-hidden">
            <motion.div style={{ scaleY: scrollYProgress }}
                        className="absolute top-0 w-full bg-gold origin-top" />
          </div>
        </div>
      </div>
    </div>
  )
}
