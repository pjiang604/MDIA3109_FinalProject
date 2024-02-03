import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "battleshipGray": "var(--battleshipGray)",
        "darkGray": "var(--darkGray)",
        "lightGray": "var(--lightGray)",
        "gray": "var(--gray)",
        "black": "var(--black)",
        "white": "var(--white)",
        "berry": "var(--berry)",
        "berryHover": "var(--berryHover)"
      },
    },
  },
  plugins: [],
}
export default config
