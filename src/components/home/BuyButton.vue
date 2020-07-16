<template>
    <v-footer absolute dark>
        <!-- <transition name="slide-fade" mode="out-in"> -->
        <v-btn block large color="error" class="font-weight-black" :key="priceInDollars"> {{priceInDollars}}$  |  Buy</v-btn>
        <!-- </transition> -->
    </v-footer>
</template>

<script>
export default {
    props: [
        'price'
    ],
    data() {
        return {
            priceInDollars: ""
        }
    },
    created() {
        this.$root.$on('toyChanged',(toy) => {
            this.priceInDollars = toy.price;
        })
    }
    
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>