<template>
    <div class="ma-1 text-xs-center">
    <v-rating v-model="rating" color="amber" half-increments></v-rating>
  </div>
</template>

<script>
  export default {
    data: () => ({
      rating: 0
    }),
    created() {
        this.$root.$on('toyChanged',(toy) => {
            this.rating = toy.rating;
        })
    }
  }
</script>