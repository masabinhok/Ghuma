import { text } from "stream/consumers";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        background: '#e0aaff', //light background
        foreground: '#c77dff', // for foregrounds
        text: {
          DEFAULT: '#10002b', //text color
          muted: '#240046', //muted text color
        },
        brand: {
          DEFAULT: '#5a189a', //brand color
          light: '#7b2cbf', //light brand color
          dark: '#3c096c', //dark brand color
        },
        shade: {
          light: '#f8f9fa', //light shade
          dark: '#212529', //dark shade
        },
        error: '#ef233c', // for errors
        success: '#70e000', // for success
      },
      fontFamily: {
        'sans' : ['Work Sans', 'sans-serif'],
      }

    },
  },
  plugins: [],
}