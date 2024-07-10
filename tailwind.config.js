/** @type {import('tailwindcss').Config} */

import preset from "franken-ui/shadcn-ui/preset";
import variables from "franken-ui/shadcn-ui/variables";
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";
import presetQuick from "franken-ui/shadcn-ui/preset-quick";

const shadcn = hooks({
  theme: "zinc",
});
export default {
  content: [],
  presets: [preset],
  safelist: [
    {
      pattern: /^uk-/,
    },
  ],
  theme: {
    fontSize: {
      xs:'0.7rem',
      sm: '0.8rem',
      base: '1.4rem',

      xl: '1.5rem',
      '2xl': '2.1rem',
      '3xl': '2.2rem',
      '4xl': '2.3rem',
      '5xl': '2.4rem',
    },
    extend: {},
  },
  plugins: [
    variables({
      theme: "zinc",
    }),
      ui({
    components: {
      slidenav: {
        hooks: shadcn.slidenav,
      },
      slider: {
        hooks:  shadcn.slider,
      }, slideshow: {
        hooks: {}
      },
      badge: {
        hooks: {}
      }
    }
  })],


}

