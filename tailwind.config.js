/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    minHeight: {
      '500': '500px',
    },
      screens: {
        'ssm': '240px',
        'smallv': '300px',
        'vs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'norm': '1208px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    colors:{
      whiteblue: "#00C9E0",
      white: "#fff",
      darkblue: "#011627",
      bluebl: "#02223B",
    },
    extend: {
      backgroundImage: {
        'hero-img': "url('../img/bg.jpg')",
        'bg-body': "url('../img/bgbody.jpg')",
      },
      boxShadow: {
        '5xl': '5px 15px 40px 0px rgba(0, 201, 224, 0.20)',
      },
      boxShadow:{
        '6xl': '5px 15px 40px 0px rgba(0, 201, 224, 0.20)',
      },
      height: {
        '600': '600px',
        '300': '300px',
      },
      maxWidth:{
        '485': '485px'
      }
    },
  },
  plugins: [],
}

