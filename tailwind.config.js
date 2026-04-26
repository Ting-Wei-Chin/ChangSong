/**
 * Tailwind 讀取 src/theme.js 的 colors
 * 改 theme.js → Tailwind class 自動更新
 */
import { theme } from './src/theme.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    extend: {
      // ── Colors from theme.js ──────────────────────
      colors: theme.colors,

      // ── Font families ─────────────────────────────
      fontFamily: {
        serif: theme.fonts.serif.split(',').map(f => f.trim().replace(/'/g, '')),
        sans:  theme.fonts.sans.split(',').map(f => f.trim().replace(/'/g, '')),
      },

      // ── Letter spacing ────────────────────────────
      letterSpacing: theme.letterSpacing,

      // ── Max width ─────────────────────────────────
      maxWidth: {
        site: theme.layout.maxWidth,
      },
    },
  },

  plugins: [],
}
