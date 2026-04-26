import Navbar           from './components/Navbar.jsx'
import HeroSection       from './components/HeroSection.jsx'
import PoeticSection     from './components/PoeticSection.jsx'
import ImageRevealSection from './components/ImageRevealSection.jsx'
import FeatureSection    from './components/FeatureSection.jsx'
import UnitsSection      from './components/UnitsSection.jsx'
import LocationSection   from './components/LocationSection.jsx'
import GallerySection    from './components/GallerySection.jsx'
import ContactSection    from './components/ContactSection.jsx'
import { motion }        from 'framer-motion'

const LINE_URL = 'https://line.me/R/ti/p/@798aqusu'

function Footer() {
  return (
    <footer className="py-16 bg-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-xl text-white tracking-[0.2em] mb-1">香頌日和</h3>
            <p className="text-[9px] text-gold/70 tracking-[0.4em] uppercase">Chanson Soleil</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-white/30 tracking-widest mb-1">台北市大安區臥龍街 151 巷 62-2 & 62-4 號</p>
            <p className="text-[10px] text-white/20 tracking-widest">© 2025 香頌日和 All Rights Reserved</p>
          </div>
          <motion.a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, backgroundColor: '#05A847' }}
                    className="flex items-center gap-3 px-6 py-3 bg-[#06C755] text-white text-xs tracking-[0.2em] uppercase transition-colors">
            💬 LINE @798aqusu
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />

      <main>
        {/* 1. Cinematic hero with parallax */}
        <HeroSection />

        {/* 2. Poetic quote section */}
        <PoeticSection />

        {/* 3. ★ Scroll-driven image reveal (painting → real photo) */}
        <ImageRevealSection />

        {/* 4. Feature highlights */}
        <FeatureSection />

        {/* 5. Interactive unit selector */}
        <UnitsSection />

        {/* 6. Location + map */}
        <LocationSection />

        {/* 7. Gallery with hover zoom + lightbox */}
        <GallerySection />

        {/* 8. Contact form */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
