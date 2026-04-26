/**
 * ╔═══════════════════════════════════════════════════╗
 * ║           香頌日和 Design Tokens                   ║
 * ║   改這個檔案 → 全站樣式自動更新                      ║
 * ╚═══════════════════════════════════════════════════╝
 */

export const theme = {

  // ══════════════════════════════════════════════════
  // 🎨 COLORS  顏色
  // ══════════════════════════════════════════════════
  colors: {

    // 主色調
    gold:        '#B8935A',    // 金色點綴（按鈕、線條、標籤）
    'gold-dark': '#A07840',    // 金色 hover 狀態
    'gold-light':'#D4B07A',    // 淺金（透明效果用）

    // 深色系
    dark:        '#2D2926',    // 主深色（文字、背景）
    'dark-mid':  '#3A3330',    // 稍淺深色（section 背景）
    'dark-rich': '#1A0C04',    // 最深色（hero 背景）

    // 暖白 / 米色系
    light:        '#FFFDF5',   // 主背景色
    cream:        '#F5EFD8',   // 淺米色（section 背景）
    'cream-warm': '#EDE4CC',   // 暖米色（card 背景）
    'cream-deep': '#DDD0B0',   // 較深米色

    // 文字色
    'text-primary':  '#2C1810',  // 主要文字
    'text-secondary':'#6B5040',  // 次要文字
    'text-muted':    '#9A8070',  // 說明文字

    // 邊框
    border:      '#E8D8B8',    // 標準邊框
    'border-mid':'#D0BEA0',    // 較深邊框

    // 第三方
    line:        '#06C755',    // LINE 綠
    'line-dark': '#05A847',    // LINE hover
  },

  // ══════════════════════════════════════════════════
  // 🔤 TYPOGRAPHY  字體
  // ══════════════════════════════════════════════════
  fonts: {
    serif: "'Playfair Display', 'Noto Serif TC', serif",
    sans:  "'Noto Sans TC', sans-serif",
  },

  fontSize: {
    // Hero 大標題
    hero:    'clamp(3rem, 9vw, 8rem)',      // 響應式大字
    // Section 標題
    h1:      'clamp(2rem, 5vw, 3.5rem)',
    h2:      'clamp(1.5rem, 3vw, 2.5rem)',
    h3:      '1.25rem',
    // 內文
    body:    '0.875rem',    // 14px
    small:   '0.75rem',     // 12px
    // 標籤 / 追蹤文字
    label:   '0.5625rem',   // 9px
  },

  letterSpacing: {
    tight:   '0.05em',
    normal:  '0.1em',
    wide:    '0.2em',
    wider:   '0.35em',
    widest:  '0.5em',
    hero:    '0.18em',     // 大標題字距
  },

  // ══════════════════════════════════════════════════
  // ⚡ ANIMATION  動畫
  // ══════════════════════════════════════════════════
  animation: {
    // 緩動曲線
    ease: {
      luxury:  [0.16, 1, 0.3, 1],    // 主要緩動（快入慢出）
      smooth:  [0.4, 0, 0.2, 1],     // 標準 Material
      bounce:  [0.34, 1.56, 0.64, 1],// 彈跳感
    },

    // 時長（秒）
    duration: {
      fast:   0.3,
      normal: 0.6,
      slow:   1.0,
      hero:   1.2,    // Hero 動畫
      letter: 1.1,    // 逐字動畫
    },

    // 逐字動畫延遲
    letterDelay: 0.08,   // 每個字的間隔（秒）

    // Lenis 平滑滾動
    lenisDuration: 1.4,
  },

  // ══════════════════════════════════════════════════
  // 📐 LAYOUT  版型
  // ══════════════════════════════════════════════════
  layout: {
    maxWidth:  '72rem',   // max-w-6xl (1152px)
    padding:   '2rem',    // px-8
    sectionPy: '7rem',    // section 上下留白
  },

  // ══════════════════════════════════════════════════
  // 🎬 OVERLAY  遮罩
  // ══════════════════════════════════════════════════
  overlay: {
    hero:   'rgba(0,0,0,0.45)',    // Hero 影片遮罩（調整明暗）
    poetic: 'rgba(0,0,0,0.65)',    // 詩意區塊遮罩
    dark:   'rgba(0,0,0,0.75)',    // 深色遮罩
  },
}

export default theme
