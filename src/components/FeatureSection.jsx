import { motion } from 'framer-motion'

const features = [
  {
    num: '01',
    icon: '🚇',
    title: '捷運六張犁',
    sub: '步行 8 分鐘・600 公尺',
    desc: '距六張犁捷運站僅 600 公尺，大台北交通網絡一線通，往來各地輕鬆自在，通勤無壓力。',
  },
  {
    num: '02',
    icon: '🏫',
    title: '頂級學區',
    sub: '三校步行可達',
    desc: '大安國小、芳和國中、和平完全中學，三大明星學校環繞，是家庭首選、孩子最好的成長環境。',
  },
  {
    num: '03',
    icon: '🏥',
    title: '北醫醫療',
    sub: '1.6 公里・5 分鐘可達',
    desc: '台北醫學院附設醫院近在咫尺，完善醫療資源守護全家健康，銀髮族與家庭生活最安心的選擇。',
  },
  {
    num: '04',
    icon: '🌿',
    title: '歐式輕奢',
    sub: '精工設計・品味生活',
    desc: '白色基底搭配綠植點綴，法式鄉村輕奢美學，從外觀到室內每個細節都訴說著品味與質感。',
  },
]

// Stagger container
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function FeatureSection() {
  return (
    <section id="features" className="py-28 md:py-36 bg-[#FFFDF5]">
      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-[9px] tracking-[0.5em] text-gold uppercase mb-4">Why Chanson Soleil</p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark mb-4">四大核心優勢</h2>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }}
            className="h-px w-20 bg-gold/60 mx-auto"
          />
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants} initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8D8B8]/30"
        >
          {features.map((f) => (
            <motion.div key={f.num} variants={cardVariants}
                        whileHover={{ y: -8, backgroundColor: '#2D2926' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="group bg-[#FFFDF5] p-10 flex flex-col gap-6 cursor-default">
              {/* Number */}
              <span className="text-[10px] tracking-[0.4em] text-gold/60 group-hover:text-gold/40 transition-colors">
                {f.num}
              </span>

              {/* Icon */}
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }}
                          className="text-4xl w-fit">
                {f.icon}
              </motion.div>

              {/* Title */}
              <div>
                <h3 className="font-serif text-xl text-dark group-hover:text-white transition-colors duration-400 mb-1">
                  {f.title}
                </h3>
                <p className="text-[10px] tracking-[0.2em] text-gold uppercase">{f.sub}</p>
              </div>

              {/* Desc */}
              <p className="text-xs text-dark/60 group-hover:text-white/60 leading-relaxed transition-colors duration-400">
                {f.desc}
              </p>

              {/* Bottom line */}
              <motion.div
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-gold/30 group-hover:bg-gold/60 transition-colors mt-auto origin-left"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
