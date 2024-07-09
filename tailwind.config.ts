import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  safelist: [
    {
      pattern: /brand-(green|amber|red|grey)-[0-9]{3}/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
} satisfies Config;
