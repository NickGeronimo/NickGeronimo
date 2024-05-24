import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-shade':  '#ECEDED',
        'light-accent':'#796D6D',
        'main-color':'#6F909C',
        'dark-shade':'#7E4456',
        'dark-accent':'#262C46',

      },
      // rgb(33, 42, 49) - slate
// rgb(46, 57, 68) - light-slate
// rgb(18, 78, 102) - blue
// rgb(116, 141, 146) - grey blue
// rgb(211, 217, 212)

// 'light-shade':  '#ECEAE2',
// 'light-accent':'#818E8F',
// 'main-color':'#6D8E88',
// 'dark-shade':'#323433',
// 'dark-accent':'#377998',
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "transparent": "transparent",
      },
      screens:{
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(min-aspect-ratio: 13/20)'},
      },
      keyframes: {
        'open-menu':{
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out fowards',
      },
    },
  },
  plugins: [],
};
export default config;
