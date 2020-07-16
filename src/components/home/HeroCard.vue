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
    created() {
        this.$root.$on('toyChanged',(toy) => {
            this.imageUrl = toy.imageUrl;
        })
    },
}

</script>