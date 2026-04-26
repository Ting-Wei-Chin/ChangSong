import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINE_URL = 'https://line.me/R/ti/p/@798aqusu'

const fieldVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: i => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
}

function Field({ label, children, index }) {
  return (
    <motion.div custom={index} variants={fieldVariant} initial="hidden" whileInView="visible"
                viewport={{ once: true }}>
      <label className="block text-[9px] text-dark/50 tracking-[0.4em] uppercase mb-2">{label}</label>
      {children}
    </motion.div>
  )
}

const inputCls = `w-full px-0 py-3 bg-transparent border-0 border-b border-[#E8D8B8]
                  text-sm text-dark placeholder-dark/30 tracking-wide
                  focus:outline-none focus:border-gold transition-colors duration-400`

export default function ContactSection() {
  const [form, setForm]           = useState({ name: '', phone: '', unit: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const set = k => e => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    window.open(LINE_URL, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#FFFDF5]">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 1 }}
          >
            <p className="text-[9px] tracking-[0.5em] text-gold uppercase mb-6">Contact Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark mb-6 leading-tight">
              預約看房<br />
              <span className="text-dark/40 text-3xl">讓我們為您介紹</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ duration: 1 }}
              className="h-px w-16 bg-gold/60 mb-10 origin-left"
            />
            <p className="text-dark/60 text-sm leading-relaxed mb-12">
              香頌日和即將完工，我們誠摯邀請您親臨現場感受這份生活美學。
              留下您的聯絡資料，顧問將在最短時間內與您聯繫，為您安排專屬看房導覽。
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <p className="text-[9px] text-dark/40 tracking-[0.4em] uppercase mb-2">地址</p>
                <p className="text-sm text-dark/70">台北市大安區臥龍街 151 巷 62-2 & 62-4 號</p>
              </div>
              <div>
                <p className="text-[9px] text-dark/40 tracking-[0.4em] uppercase mb-2">LINE 諮詢</p>
                <motion.a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                          whileHover={{ x: 4 }}
                          className="inline-flex items-center gap-3 text-sm text-gold hover:text-dark transition-colors">
                  <span className="w-6 h-px bg-current" />
                  @798aqusu
                </motion.a>
              </div>
            </div>

            {/* Decorative number */}
            <div className="mt-16 hidden lg:block">
              <motion.p
                initial={{ opacity: 0 }} whileInView={{ opacity: 0.04 }}
                viewport={{ once: true }} transition={{ duration: 1.5 }}
                className="font-serif text-[140px] text-dark leading-none select-none"
              >
                香
              </motion.p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success"
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                            className="text-center py-20">
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-8"
                  >
                    <span className="text-gold text-2xl">✓</span>
                  </motion.div>
                  <h3 className="font-serif text-2xl text-dark mb-3">感謝您的詢問</h3>
                  <p className="text-sm text-dark/50 mb-8 tracking-wide">我們的顧問將透過 LINE 與您聯繫</p>
                  <motion.a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            className="inline-block px-8 py-3 bg-[#06C755] text-white text-xs tracking-[0.2em] uppercase">
                    前往 LINE 繼續諮詢
                  </motion.a>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <Field label="姓名 *" index={0}>
                      <input type="text" required placeholder="您的姓名"
                             className={inputCls} value={form.name} onChange={set('name')} />
                    </Field>
                    <Field label="電話 *" index={1}>
                      <input type="tel" required placeholder="聯絡電話"
                             className={inputCls} value={form.phone} onChange={set('phone')} />
                    </Field>
                  </div>

                  <Field label="有興趣的戶型" index={2}>
                    <select className={`${inputCls} appearance-none cursor-pointer`}
                            value={form.unit} onChange={set('unit')}>
                      <option value="">請選擇（可略）</option>
                      <option value="一房">一房｜約 20 坪</option>
                      <option value="二房">二房｜約 20 坪</option>
                      <option value="三房">三房｜約 45 坪</option>
                    </select>
                  </Field>

                  <Field label="留言" index={3}>
                    <textarea rows={4} placeholder="有任何問題或特殊需求，歡迎告訴我們..."
                              className={`${inputCls} resize-none`}
                              value={form.message} onChange={set('message')} />
                  </Field>

                  <motion.div custom={4} variants={fieldVariant} initial="hidden"
                              whileInView="visible" viewport={{ once: true }}>
                    <motion.button type="submit"
                                   whileHover={{ backgroundColor: '#B8935A', color: '#FFFDF5' }}
                                   whileTap={{ scale: 0.97 }}
                                   className="w-full py-4 border border-dark text-dark text-xs
                                              tracking-[0.3em] uppercase transition-all duration-500 mb-4">
                      送出預約申請
                    </motion.button>

                    <motion.a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                              whileHover={{ backgroundColor: '#05A847' }}
                              className="flex items-center justify-center gap-3 w-full py-4
                                         bg-[#06C755] text-white text-xs tracking-[0.2em] uppercase transition-colors">
                      <span>💬</span> LINE 即時諮詢 @798aqusu
                    </motion.a>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
