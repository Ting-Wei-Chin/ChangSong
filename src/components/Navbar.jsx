import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINE_URL = 'https://line.me/R/ti/p/@798aqusu'

const links = [
  { label: '物件特色', href: '#features' },
  { label: '精選戶型', href: '#units'    },
  { label: '地理位置', href: '#location' },
  { label: '聯絡我們', href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-[#FFFDF5]/95 backdrop-blur-md border-b border-[#E8D8B8]/60 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group">
            <motion.div whileHover={{ letterSpacing: '0.25em' }} transition={{ duration: 0.4 }}>
              <h1 className={`font-serif text-lg tracking-[0.2em] transition-colors duration-500 ${
                scrolled ? 'text-dark' : 'text-white'
              }`}>
                香頌日和
              </h1>
              <p className={`text-[9px] tracking-[0.4em] uppercase font-light transition-colors duration-500 ${
                scrolled ? 'text-gold' : 'text-gold/80'
              }`}>
                Chanson Soleil
              </p>
            </motion.div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l, i) => (
              <motion.a
                key={l.href} href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className={`text-xs tracking-[0.2em] uppercase relative group transition-colors duration-300 ${
                  scrolled ? 'text-dark/70 hover:text-dark' : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" />
              </motion.a>
            ))}
            <motion.a
              href={LINE_URL} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 border border-gold text-gold text-xs tracking-[0.2em] uppercase
                         hover:bg-gold hover:text-white transition-all duration-400"
            >
              LINE 諮詢
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 ${scrolled ? 'text-dark' : 'text-white'}`}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                         className="block w-6 h-px bg-current transition-all" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }}
                         className="block w-6 h-px bg-current transition-all" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                         className="block w-6 h-px bg-current transition-all" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1A0F08]/97 flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        onClick={() => setMenuOpen(false)}
                        className="font-serif text-2xl text-white/80 hover:text-gold transition-colors tracking-widest">
                {l.label}
              </motion.a>
            ))}
            <motion.a href={LINE_URL} target="_blank"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                      className="mt-4 px-8 py-3 border border-gold text-gold text-sm tracking-[0.2em] uppercase">
              LINE 諮詢
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
