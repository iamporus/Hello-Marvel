<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
      app
      color="red"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Marvel Logo"
          contain
          src="./assets/marvel_logo_red.png"
          transition="scale-transition"
          width="60"
        />
      </div>
      <v-spacer/>
      <div class="button font-weight-black d-flex align-center">
        Bring Home your Superheroes!
      </div>
      
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    Home,
  },
  computed:{
    theme(){
      return 'dark'
    }
  },
};
</script>
