<template>

  <v-carousel
    dark
    cycle
    interval="6000"
    height="450"
    :show-arrows="false"
    hide-delimiter-background
    v-model="currentIndex"
    @change="changeToyName($event)"
    ref="carousel"
  >
    <v-carousel-item
      v-for="(toy, i) in toys"
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
            <HeroCard></HeroCard>
          
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
    mounted () {
        console.log("Mounted: "+this.currentIndex);
        setTimeout(this.$refs.carousel.computeCarouselWidth, 300);
        this.$root.$emit('toyChanged', this.toys[this.currentIndex]);
}   ,
    data () {
      return {
        currentIndex: 0,
        toys: [
            {
                id: 0,
                heroName: "Iron Man",
                imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg",
                rating: 4.5,
                price: 15.99
            },
            {
                id: 1,
                heroName: "Spider Man",
                imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg",
                rating: 3,
                price: 14.35
            },
            {
                id: 2,
                heroName: "Hulk",
                imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg",
                rating: 5,
                price: 18.79,
                
            },
            {
                id: 3,
                heroName: "Dr Strange",
                imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg",
                rating: 2.5,
                price: 13.99
            },
            {
                id: 4,
                heroName: "Thanos",
                imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd.jpg",
                rating: 4,
                price: 17.85
            },
        ],
      }
    },
    methods :{
        changeToyName(){
            console.log(this.currentIndex);
            this.$root.$emit('toyChanged', this.toys[this.currentIndex]);
        },
    },
    created() {
        this.$root.$on('cardImageLoaded',() => {
            console.log('force load');
            this.$refs.carousel.$forceUpdate()
        })
    }
    
  }
</script>