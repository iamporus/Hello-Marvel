<template>
  <div class="ma-4">
    <ToyCarousel />
    <v-sheet dark>
      <v-row class="fill-width" align="center" justify="center">
        <ToyName />
      </v-row>
      <v-row class="fill-width" align="center" justify="center">
        <ToyRating />
      </v-row>
    </v-sheet>
    <BuyButton />
  </div>
</template>

<script>

  import ToyCarousel from './../components/home/ToyCarousel'
  import BuyButton from './../components/home/BuyButton'
  import ToyName from './../components/home/ToyName'
  import ToyRating from './../components/home/ToyRating'

  export default {
    name: 'Home',
    components: {
      ToyCarousel,
      BuyButton,
      ToyName,
      ToyRating
    },
    data: () => ({

    }),
  }
</script>