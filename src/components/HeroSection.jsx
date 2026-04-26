import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { assets } from '../assets.js'

// ── Staggered letter animation ─────────────────────
const charVariant = {
  hidden:  { opacity: 0, y: 50, filter: 'blur(8px)' },
  visible: i => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 1.1, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

function AnimatedTitle({ text, className }) {
  return (
    <div className={`flex justify-center flex-wrap ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span key={i} custom={i} variants={charVariant}
                     initial="hidden" animate="visible"
                     className="inline-block font-serif">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  )
}

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const videoY   = useTransform(scrollYProgress, [0, 1], ['0%',  '25%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const opacity  = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const { hero, heroWebm, heroPoster } = assets.video
  const heroBg = assets.sections.hero

  return (
    <section ref={ref} className="relative h-screen overflow-hidden" id="hero">

      {/* ── Background layer ──────────────────────── */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 scale-110">

        {/* Real video (when available) */}
        {hero && (
          <video autoPlay loop muted playsInline poster={heroPoster || ''}
                 className="absolute inset-0 w-full h-full object-cover">
            {heroWebm && <source src={heroWebm} type="video/webm" />}
            <source src={hero} type="video/mp4" />
          </video>
        )}

        {/* Real image fallback (when no video) */}
        {!hero && heroBg && (
          <img src={heroBg} alt="香頌日和"
               className="absolute inset-0 w-full h-full object-cover" />
        )}

        {/* CSS gradient fallback (when neither video nor image) */}
        <div className={`absolute inset-0 img-hero ${(hero || heroBg) ? 'opacity-0' : 'opacity-100'}`} />
      </motion.div>

      {/* ── Overlay ───────────────────────────────── */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0"
           style={{ background: 'linear-gradient(to top, rgba(26,12,4,0.7) 0%, transparent 50%)' }} />

      {/* ── Content ───────────────────────────────── */}
      <motion.div style={{ y: contentY, opacity }}
                  className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.15em' }}
          animate={{ opacity: 1, letterSpacing: '0.55em' }}
          transition={{ duration: 2, delay: 0.1, ease: 'easeOut' }}
          className="text-[9px] text-gold/80 uppercase tracking-[0.55em] mb-10">
          Taipei &nbsp;·&nbsp; Da'an District &nbsp;·&nbsp; 2025
        </motion.p>

        <AnimatedTitle text="香頌日和" className="text-white mb-4"
                       style={{ fontSize: 'clamp(3.5rem, 10vw, 8.5rem)', letterSpacing: '0.18em' }} />

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.15em' }}
          animate={{ opacity: 0.65, letterSpacing: '0.6em' }}
          transition={{ duration: 2.2, delay: 1.0, ease: 'easeOut' }}
          className="font-serif italic text-gold text-sm md:text-lg uppercase mt-4 mb-10">
          Chanson Soleil
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent mb-10" />

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-white/80 text-xs md:text-sm tracking-[0.3em] mb-12 uppercase">
          大安區精品住宅 &nbsp;·&nbsp; 七層全新完工 &nbsp;·&nbsp; 限量釋出
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center">
          <motion.a href="#contact"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,1)', color: '#1A0C04', scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-12 py-4 border border-white/50 text-white text-xs
                               tracking-[0.3em] uppercase transition-all duration-500 min-w-[180px] text-center">
            預約看房
          </motion.a>
          <motion.a href="#features"
                    whileHover={{ backgroundColor: 'rgba(184,147,90,1)', color: '#fff', scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-12 py-4 bg-gold/20 border border-gold/60 text-gold text-xs
                               tracking-[0.3em] uppercase transition-all duration-500 min-w-[180px] text-center">
            探索物件
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────── */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 1.2 }}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[9px] text-white/40 tracking-[0.5em] uppercase">Scroll</span>
        <div className="relative w-px h-14 bg-white/15 overflow-hidden rounded-full">
          <motion.div animate={{ y: ['-100%', '200%'] }}
                      transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                      className="absolute w-full h-1/2 bg-gradient-to-b from-gold/80 to-transparent rounded-full" />
        </div>
      </motion.div>

      <div className="absolute bottom-0 inset-x-0 h-48
                      bg-gradient-to-t from-[#FFFDF5] via-[#FFFDF5]/20 to-transparent
                      pointer-events-none z-10" />
    </section>
  )
}
