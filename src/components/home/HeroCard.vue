<template>
  <v-card
    max-width="400"
    class="fill-height"
    ref="card"
  >
    <v-img class="fill-height" :src=imageUrl></v-img>
  </v-card>
</template>

<script>

export default {
    
    data() {
        return {

            imageUrl: ""
        }
    },
    mounted () {
        console.log("Mounted: URL: " + this.imageUrl);
    },    
    created() {
        this.$root.$on('toyChanged',(toy) => {
            console.log("toyChanged: URL: " + toy.imageUrl);
            this.imageUrl = toy.imageUrl;
            console.log("updated: URL: " + this.imageUrl);
            setTimeout(function(){
                this.imageUrl = toy.imageUrl;
            }, 3000);

        })
        this.$root.$on('cardImageLoaded',() => {
            console.log('force load');
            // this.$refs.card.$forceUpdate();
        })
    },
    updated() {
        console.log('updated');
    this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been re-rendered
        console.log('updated 222');
    })
}

    
}
</script>