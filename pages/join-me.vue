<template>
  <div v-cloak id="content" class="bg-gray-900 h-screen w-screen items-center flex justify-center relative">
    <div class="px-6 w-full" style="max-width: 480px">
      <h1 class="text-white text-5xl leading-tight flex justify-center flex-col items-center transition-all ease-in duration-75">
        <span class="smile text-8xl">😊</span>
        <span class="hey ml-2">Hey
          <span class="text-yellow font-semibold mwiine">Mwiine.</span>
        </span>
      </h1>
      <div class="text-center">
        <p class="text-red mt-6 text-xl demo">
          <span class="opacity-0">.</span>
        </p>
        <p class="text-red mt-2 time">
          <span class="opacity-0">.</span>
        </p>

        <div class="mt-10 bottom-0 buttons flex flex-col flex-wrap">
          <a
            href="https://wa.me/256783211244?text=Yes"
            target="_blank"
            class="yes-button font-bold text-center text-yellow border-2 border-yellow py-2 px-4"
          >Yes <span
            class="happy"
          >😋</span></a>
          <a
            href="https://wa.me/256783211244?text=Yes, next Friday."
            target="_blank"
            class="opacity-30 text-center font-bold mt-4 text-white border-2 border-white py-2 px-4 hover:scale-50"
          >Maybe another day 🙄</a>
        </div>
      </div>
      <div class="fixed bottom-0 right-0 text-6xl flex justify-center w-full">
        <div class="shy">
          🙈
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoinMe',
  layout: 'would',

  data () {
    return {
      feelings: ['😍😜🤭🥳🤩😊']
    }
  },
  mounted () {
    this.animate()
  },
  methods: {
    animate () {
      const tl = this.$gsap.timeline()

      this.$gsap.to('.yes-button', {
        delay: 20,
        scale: 1.05,
        repeat: -1,
        ease: 'power1.out',
        duration: 1,
        yoyo: true
      })

      tl.from('.smile', {
        delay: 1,
        opacity: 0,
        x: 0,
        ease: 'back.out(1.7)',
        scale: 0.2,
        duration: 1
      })
        .from('.hey', {
          opacity: 0,
          duration: 0.5,
          ease: 'power4.out',
          y: -20
        })
        .to('.demo', {
          delay: 1,
          text: 'You\'re Smart 🤔',
          ease: 'power2.out',
          duration: 2
        })
        .to('.demo', {
          text: 'You\'re Beautiful 👸',
          duration: 2
        })
        .to('.demo', {
          text: 'You\'re Wonderful 🤪',
          duration: 2
        })
        .to('.demo', {
          text: '.',
          duration: 2
        })
        .to('.demo', {
          text: ' Would you join me for <strike>Donna 🤪</strike> Dinner ?',
          duration: 2
        })
        .to('.time', {
          text: 'I suggest Friday [18:00Hrs].',
          duration: 2
        })
        .from('.buttons', {
          opacity: 0,
          duration: 1,
          y: 10,
          ease: 'power2.out'
        })
        .from('.shy', {
          opacity: 0,
          delay: 1,
          duration: 0.5,
          y: 30
        })
    }
  }
}
</script>
<style>
  [v-cloak]{
    display: none;
  }
</style>
