import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const units = [
  {
    id: 'single',
    type: '一房',
    en: 'Studio Suite',
    size: '約 20 坪',
    sqm: '≈ 66 m²',
    target: '單身貴族・首購族',
    tags: ['首購首選', '低總價', '輕鬆負擔'],
    desc: '精心規劃的單人雅居，空間運用極致，每個角落都是生活美學的展現。適合嚮往獨立品味生活的都市新貴。',
    highlights: ['獨立玄關設計', '全熱交換系統', '頂樓空中花園使用權'],
    gradient: 'from-[#E8DCC8] to-[#D4C4A8]',
  },
  {
    id: 'double',
    type: '二房',
    en: 'Residence',
    size: '約 20 坪',
    sqm: '≈ 66 m²',
    target: '小家庭・雙薪夫妻',
    tags: ['空間精緻', '近捷運', '生活機能強'],
    desc: '溫馨兩房格局，動線流暢，光線充沛。坐擁六張犁捷運 600 公尺的地利，是小家庭的完美起點。',
    highlights: ['南北通透採光', '獨立主臥衛浴', '系統廚具規劃'],
    gradient: 'from-[#D4C4A8] to-[#C4B090]',
    featured: true,
  },
  {
    id: 'triple',
    type: '三房',
    en: 'Grand Residence',
    size: '約 45 坪',
    sqm: '≈ 148 m²',
    target: '換屋族・三代同堂',
    tags: ['大坪數', '頂級學區', '寬敞舒適'],
    desc: '寬敞三房格局，三代同堂也寬裕。坐鎮大安頂級學區核心，是家庭換屋升級、資產保值的最優解。',
    highlights: ['三面採光規劃', '主臥更衣室', '客廳景觀陽台'],
    gradient: 'from-[#C4B090] to-[#B09878]',
  },
]

export default function UnitsSection() {
  const [active, setActive] = useState('double')
  const current = units.find(u => u.id === active)

  return (
    <section id="units" className="py-28 md:py-36 bg-[#F5EFD8]/40">
      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-[9px] tracking-[0.5em] text-gold uppercase mb-4">Floor Plans</p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark mb-4">精選戶型</h2>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }}
            className="h-px w-20 bg-gold/60 mx-auto mb-4"
          />
          <p className="text-dark/50 text-xs tracking-[0.2em]">平面圖即將公開・歡迎加入 LINE 提前預覽</p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex justify-center gap-0 mb-14 border border-[#E8D8B8]">
          {units.map(u => (
            <button key={u.id} onClick={() => setActive(u.id)}
                    className={`relative flex-1 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-400
                      ${active === u.id
                        ? 'bg-dark text-gold'
                        : 'bg-transparent text-dark/50 hover:text-dark hover:bg-[#E8D8B8]/30'
                      }`}>
              {u.type}
              {u.featured && active !== u.id && (
                <span className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-gold" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#E8D8B8]">

            {/* Floor plan visual */}
            <div className={`relative h-72 lg:h-auto bg-gradient-to-br ${current.gradient} flex flex-col items-center justify-center overflow-hidden`}>
              {/* Architectural grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8B6914" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />

                {/* Simple floor plan shape */}
                {current.id === 'single' && (
                  <g transform="translate(80, 60)" stroke="#5C3D0A" strokeWidth="1.5" fill="rgba(92,61,10,0.08)">
                    <rect x="0" y="0" width="240" height="180" />
                    <rect x="0" y="0" width="150" height="100" />
                    <rect x="150" y="0" width="90" height="70" />
                    <line x1="0" y1="100" x2="150" y2="100" />
                    <line x1="150" y1="70" x2="240" y2="70" />
                  </g>
                )}
                {current.id === 'double' && (
                  <g transform="translate(60, 50)" stroke="#5C3D0A" strokeWidth="1.5" fill="rgba(92,61,10,0.08)">
                    <rect x="0" y="0" width="280" height="200" />
                    <rect x="0" y="0" width="140" height="120" />
                    <rect x="140" y="0" width="140" height="100" />
                    <rect x="0" y="120" width="280" height="80" />
                    <line x1="140" y1="0" x2="140" y2="120" />
                    <line x1="0" y1="120" x2="280" y2="120" />
                    <line x1="140" y1="100" x2="280" y2="100" />
                  </g>
                )}
                {current.id === 'triple' && (
                  <g transform="translate(30, 40)" stroke="#5C3D0A" strokeWidth="1.5" fill="rgba(92,61,10,0.08)">
                    <rect x="0" y="0" width="340" height="220" />
                    <rect x="0" y="0" width="130" height="130" />
                    <rect x="130" y="0" width="120" height="110" />
                    <rect x="250" y="0" width="90" height="100" />
                    <rect x="0" y="130" width="340" height="90" />
                    <line x1="130" y1="0" x2="130" y2="130" />
                    <line x1="250" y1="0" x2="250" y2="100" />
                    <line x1="0" y1="130" x2="340" y2="130" />
                  </g>
                )}
              </svg>

              <div className="relative z-10 text-center">
                <p className="font-serif text-[80px] text-[#5C3D0A]/20 leading-none">{current.type[0]}</p>
                <p className="text-[9px] text-[#5C3D0A]/50 tracking-[0.4em] uppercase mt-2">平面示意</p>
              </div>

              {/* Size badge */}
              <div className="absolute bottom-6 left-6">
                <p className="font-serif text-2xl text-[#5C3D0A]/70">{current.size}</p>
                <p className="text-[10px] text-[#5C3D0A]/50 tracking-widest">{current.sqm}</p>
              </div>
            </div>

            {/* Info panel */}
            <div className="p-10 lg:p-14 bg-[#FFFDF5] flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="text-[9px] text-gold tracking-[0.4em] uppercase mb-2">{current.en}</p>
                    <h3 className="font-serif text-4xl text-dark">{current.type}</h3>
                  </div>
                  {current.featured && (
                    <span className="text-[9px] tracking-[0.2em] uppercase text-gold border border-gold px-3 py-1">
                      最受歡迎
                    </span>
                  )}
                </div>

                <p className="text-xs text-dark/50 tracking-widest mb-2">{current.target}</p>
                <p className="text-sm text-dark/70 leading-relaxed mb-8">{current.desc}</p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  {current.highlights.map((h, i) => (
                    <motion.div key={h}
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex items-center gap-3">
                      <div className="w-4 h-px bg-gold flex-shrink-0" />
                      <span className="text-xs text-dark/70 tracking-wide">{h}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {current.tags.map(tag => (
                    <span key={tag}
                          className="text-[10px] tracking-[0.15em] border border-[#E8D8B8] text-dark/60 px-3 py-1 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E8D8B8] pt-8 mt-8 flex items-center justify-between">
                <div>
                  <p className="text-[9px] text-dark/40 tracking-widest uppercase mb-1">Price</p>
                  <p className="font-serif text-xl text-gold">歡迎洽詢</p>
                </div>
                <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                          className="px-8 py-3 bg-dark text-white text-xs tracking-[0.2em] uppercase
                                     hover:bg-gold transition-all duration-400">
                  預約看房
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
