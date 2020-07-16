<template>
    <transition name="slide-fade" mode="out-in">
    <div class="ma-2 white--text font-weight-bold title text-uppercase" :key="title">
        {{title}}
    </div>
    </transition>
</template>

<script>
export default {
    props: [
        'toyName'
    ],
    data() {
        return {
            title: ""
        }
    },
    created() {
        this.$root.$on('toyChanged',(toy) => {
            this.title = toy.heroName;
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