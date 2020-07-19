<template>
  <v-card
    max-width="400"
    class="fill-height"
    height="400"
  >
    <!-- <v-card-title>Hero</v-card-title> -->
    <v-img class="fill-height" :src=imageUrl eager></v-img>
  </v-card>
</template>

<script>

export default {
    
    data() {
        return {
            imageUrl: "",
        }
    },
    created() {
        this.$root.$on('toyChanged',(toy) => {
            this.imageUrl = toy.imageUrl;
        })
    },
}

</script>