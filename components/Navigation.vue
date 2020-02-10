<template>
  <nav class="flex justify-between -mb-20 h-20 items-center container py-4 text-white">
    <a href="/" class="font-bold typewriter block hover:text-yellow group py-2">
      I'm Siraj Kimuli
      <span class="group-hover:opacity-100 opacity-0 transition-all duration-300">
        <ArrowRight stroke-width="2" class="stroke-current text-yellow w-6 mx-2 inline" />
        Go home
      </span>
    </a>
    <a href="#menu" class="font-bold border-2 border-white text-sm py-2 px-4">
      Menu
    </a>
  </nav>
</template>

<script>
import ArrowRight from '@/components/svg/ArrowRight'
export default {
  name: 'Navigation',
  components: { ArrowRight }
}
</script>
