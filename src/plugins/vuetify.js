import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.blue,
            secondary: colors.grey.darken1,
            accent: colors.shades.black,
            error: colors.red.accent3,
            background: colors.indigo.lighten5, // Not automatically applied
            
          },
          dark: {
            primary: colors.amber.lighten3,
            accent: colors.amber.darken2,
            background: colors.grey.darken4, // If not using lighten/darken, use base to return hex
          },
        },
      },
});
