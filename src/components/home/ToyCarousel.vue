<template>

  <v-carousel
    dark
    cycle
    interval="4000"
    height="430"
    :show-arrows="false"
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        height="80%"
      >
        <v-row
          class="fill-height fill-width"
          align="center"
          justify="center"
        >
            <HeroCard/>
          
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  
</template>

<script>

import HeroCard from './HeroCard'

  export default {
    components:{
      HeroCard
    },
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>