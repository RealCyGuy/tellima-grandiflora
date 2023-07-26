import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
      },
    },
    colors: {
      text: "#f6ffec",
      background: "#0b1401",
      primary: "#75dc00",
      secondary: "#242e19",
      accent: "#8767ad",
    },
  },
};
