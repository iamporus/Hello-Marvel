<template>
    <div class="ma-1 text-xs-center">
    <v-rating v-model="rating" color="amber"></v-rating>
  </div>
</template>

<script>
  export default {
    data: () => ({
      rating: 3
    })
  }
</script>