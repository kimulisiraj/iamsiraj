-<template>
  <div class="bg-gray-900 h-screen w-screen items-center flex justify-center relative">
    <div class="container">
      <h1 class="text-white text-5xl leading-tight">
        <span class="text-5xl">😊</span>
        Hey
        <span class="text-yellow font-semibold">Mwiine.</span>
      </h1>
      <p class="text-red mt-6 text-xl demo">
        Would you join me for <strike>Donna 🤪</strike> Dinner ?
      </p>
      <p class="text-red mt-2">
        Friday [18:00Hrs] is blocked for you.
      </p>
      <div class="mt-10 bottom-0">
        <a href="https://wa.me/256783211244?text=Yes" target="_blank" class="font-bold text-xl text-white border-2 border-white py-2 px-4">Yes 😋</a>
        <button disabled class="cursor-not-allowed ml-4 font-bold opacity-25 text-xl text-white border-2 border-white py-2 px-4">
          No 🥵
        </button>
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
      feelings: '😍😜🤭🥳🤩😊'
    }
  },
  mounted () {
    this.animate()
  },
  methods: {
    animate () {
      // [...this.feelings].forEach(f => this.$gsap.to('.demo', {
      //   text: f,
      //   duration: 2
      // }))
      const tl = this.$gsap.timeline()
      tl.to('.demo', {
        text: 'We are <strike>testing</strike>',
        duration: 2
      })
    }
  }
}
</script>
