<template>

  <v-carousel
    dark
    height="auto"
    interval="6000"
    :show-arrows="false"
    cycle
    hide-delimiter-background
    v-model="currentIndex"
    @change="changeToyName($event)"
    ref="carousel"
  >
    <v-carousel-item
      v-for="(toy) in toys"
      :key="toy.id"
      eager
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
    data () {
      return {
        currentIndex: 0,
        loadingStatus: true,
        apikey: this.$appConfig.api.publicKey,
        privateKey: this.$appConfig.api.privateKey,
        toys: [],
      }
    },
    computed: {
        
        sheetHeight(){
          console.log("inside sheetHeight...");
          switch(this.$vuetify.breakpoint.name){
            case 'xs': return '200px';
            case 'sm': return '300px';
            case 'md': return '300px';
            case 'lg': return '450px';
            case 'xl': return '500px';
          }
          return '400px';
        }

    },
    methods :{
        changeToyName(){
            this.$root.$emit('toyChanged', this.toys[this.currentIndex]);
        },
        createToysFromResponse(response){
          
          for(var i=0; i< response.length;i++){
            var element = response[i];
            var toy = {
                id: element.id,
                heroName: element.name,
                imageUrl: element.thumbnail.path+".jpg",

                rating: Math.random() * (5 - 3) + 3,
                price: Math.round(Math.random() * (25 - 12) + 12)
              };

              this.toys.push(toy);
          }
          this.changeToyName();
          
        },

        getProducts() {
        
          this.loadingStatus = true;
          
          const ts = Date.now();
          const apikey = this.apikey;
          const privateKey = this.privateKey;
          const hash = requestHelper.createHashForApi(ts, privateKey, apikey);

          const url = `${this.$appConfig.api.url}/characters?comics=29198`;
          
          fetch(url+"&apikey="+apikey+"&ts="+ts+"&hash="+hash+"&limit=7&offset=0")
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
    },
    
  }
</script>