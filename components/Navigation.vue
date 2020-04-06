<template>
  <div class="relative z-40 -mb-20 ">
    <div class="w-full bg-yellow">
      <div :class="menuOpen?'open':''" class="container flex justify-center items-center menu">
        <div class="py-12" @click="menuOpen = !menuOpen">
          <nuxt-link to="/" class="hover:opacity-75 text-xl text-purple font-bold block md:inline mt-6 md:mt-0 mr-6">
            <span>🏠</span> Home
          </nuxt-link>
          <nuxt-link to="/about" class="hover:opacity-75 text-xl text-purple font-bold block md:inline mt-6 md:mt-0 mr-6 ">
            <span>🤔</span> About
          </nuxt-link>
          <nuxt-link to="/work" class="hover:opacity-75 text-xl text-purple font-bold block md:inline mt-6 md:mt-0 mr-6">
            <span>💼</span> Work
          </nuxt-link>
          <nuxt-link to="/blog" class="hover:opacity-75 text-xl text-purple font-bold block md:inline mt-6 md:mt-0 mr-6">
            <span>📝</span> Blog
          </nuxt-link>
        </div>
      </div>
    </div>
    <nav class="flex justify-between h-20 items-center container py-4 text-white">
      <nuxt-link to="/" class="font-bold typewriter block hover:text-yellow group py-2">
        I'm Siraj Kimuli
        <span class="group-hover:opacity-100 opacity-0 transition ease-in-out duration-300 hidden md:inline">
          <ArrowRight stroke-width="2" class="stroke-current text-yellow w-6 mx-2 inline" />
          Go home
        </span>
      </nuxt-link>
      <button
        class="hover:border-yellow transition-all duration-300 hover:text-yellow font-bold border-2 border-white text-sm py-2 px-4 focus:outline-none"
        @click="menuOpen = !menuOpen"
      >
        <span v-show="!menuOpen">Menu</span>
        <span v-show="menuOpen">X</span>
      </button>
    </nav>
  </div>
</template>

<script>
import ArrowRight from '@/components/svg/ArrowRight'
export default {
  name: 'Navigation',
  components: { ArrowRight },
  data () {
    return {
      menuOpen: false
    }
  }
}
</script>
<style scoped>
  .menu{
    @apply h-0 opacity-0 overflow-hidden;
    transition: all 0.5s ease-in-out;
  }
  .menu.open{
    @apply opacity-100;
    height: 50vh;
  }
</style>
