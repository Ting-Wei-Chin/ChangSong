/**
 * ╔═══════════════════════════════════════════════════╗
 * ║           香頌日和 Media Assets                    ║
 * ║   改這個檔案 → 全站圖片影片自動更新                   ║
 * ║                                                   ║
 * ║   使用方法：                                        ║
 * ║   • 把檔案放進 /public/videos/ 或 /public/images/   ║
 * ║   • 把下面的 null 換成檔案路徑                       ║
 * ║   • null = 自動顯示漸層佔位符                        ║
 * ╚═══════════════════════════════════════════════════╝
 */

export const assets = {

  // ══════════════════════════════════════════════════
  // 🎬 VIDEO  影片
  // ══════════════════════════════════════════════════
  video: {
    // Hero 全螢幕背景影片
    // 放到 /public/videos/hero.mp4
    hero:       null,           // e.g. '/videos/hero.mp4'
    heroWebm:   null,           // e.g. '/videos/hero.webm'  (較小，推薦)
    heroPoster: null,           // e.g. '/images/hero-poster.jpg' (影片載入前的封面)
  },

  // ══════════════════════════════════════════════════
  // 🖼️ SECTION BACKGROUNDS  區塊背景圖
  // ══════════════════════════════════════════════════
  sections: {
    // Hero 區塊背景（影片載入失敗時的備用）
    hero:     null,   // e.g. '/images/hero-bg.jpg'

    // 詩意區塊（黑暗背景）
    poetic:   null,   // e.g. '/images/garden.jpg'

    // ImageReveal：上層「油畫/建築意象」
    painting: null,   // e.g. '/images/rendering.jpg'

    // ImageReveal：下層「實景照片」
    exterior: null,   // e.g. '/images/exterior-real.jpg'
  },

  // ══════════════════════════════════════════════════
  // 🖼️ UNITS  戶型平面圖
  // ══════════════════════════════════════════════════
  floorPlans: {
    one:   null,   // e.g. '/images/floorplan-1r.jpg'
    two:   null,   // e.g. '/images/floorplan-2r.jpg'
    three: null,   // e.g. '/images/floorplan-3r.jpg'
  },

  // ══════════════════════════════════════════════════
  // 🖼️ GALLERY  空間賞析圖庫
  // ══════════════════════════════════════════════════
  // src: null → 顯示漸層佔位符
  // src: '/images/xxx.jpg' → 顯示真實照片
  gallery: [
    {
      id:       1,
      src:      null,           // e.g. '/images/exterior.jpg'
      label:    '建築外觀',
      en:       'Exterior',
      fallback: 'img-exterior', // CSS 漸層 class（佔位符）
      span:     'col-span-2 row-span-2',
    },
    {
      id:       2,
      src:      null,           // e.g. '/images/living.jpg'
      label:    '客廳',
      en:       'Living Room',
      fallback: 'img-living',
      span:     '',
    },
    {
      id:       3,
      src:      null,           // e.g. '/images/kitchen.jpg'
      label:    '廚房',
      en:       'Kitchen',
      fallback: 'img-kitchen',
      span:     '',
    },
    {
      id:       4,
      src:      null,           // e.g. '/images/bedroom.jpg'
      label:    '主臥',
      en:       'Master Bedroom',
      fallback: 'img-bedroom',
      span:     '',
    },
    {
      id:       5,
      src:      null,           // e.g. '/images/garden.jpg'
      label:    '空中花園',
      en:       'Sky Garden',
      fallback: 'img-garden',
      span:     '',
    },
    {
      id:       6,
      src:      null,           // e.g. '/images/night.jpg'
      label:    '夜景',
      en:       'Night View',
      fallback: 'img-night',
      span:     'col-span-2',
    },
  ],
}

export default assets
