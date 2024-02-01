/** @type {import('tailwindcss').Config} */
import themes from './src/themes'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: themes,
  plugins: []
}
