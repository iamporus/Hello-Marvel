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

import HeroCard from './HeroCard';
import requestHelper from './../../utils';

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
        loadingStatus: true,
        apikey: this.$appConfig.api.publicKey,
        privateKey: this.$appConfig.api.privateKey,
        toys: [],
      }
    },
    methods :{
        changeToyName(){
            this.$root.$emit('toyChanged', this.toys[this.currentIndex]);
        },
        createToysFromResponse(response){
        //   console.log(response);
          response.forEach(element => {
              var toy = {
                 id: element.id,
                heroName: element.name,
                imageUrl: element.thumbnail.path+".jpg",
                rating: Math.random() * (5 - 3) + 3,
                price: Math.round(Math.random() * (25 - 12) + 12)
              }
              this.toys.push(toy);
          });
        },

        getProducts() {
        
        this.loadingStatus = true;
        
        const ts = Date.now();
        const apikey = this.apikey;
        const privateKey = this.privateKey;
        const hash = requestHelper.createHashForApi(ts, privateKey, apikey);

        const url = `${this.$appConfig.api.url}/characters?comics=29198`;
        
        fetch(url+"&apikey="+apikey+"&ts="+ts+"&hash="+hash+"&limit=10&offset=0")
        .then(response => response.json())
        .then(data => (this.createToysFromResponse(data.data.results)))
        .catch(err => {
          console.error(err);
          this.loadingStatus = false
        //   this.$router.push('/');
        });
      },
    },
    created() {

        this.getProducts();

        this.$root.$on('cardImageLoaded',() => {
            // console.log('force load');
            this.$refs.carousel.$forceUpdate()
        });
    }
    
  }
</script>