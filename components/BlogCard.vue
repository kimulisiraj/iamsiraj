<template>
  <div class="w-full md:w-1/3 p-6">
    <nuxt-link
      :to="to"
      :class="color"
      class="flex flex-col justify-between bg-white h-80 block p-8 hover:shadow-lg duration-75 transition-transform hover:scale-50"
    >
      <h3 class="text-2xl font-semibold leading-tight text-white">
        <slot />
      </h3>
      <div class="w-full mt-auto">
        <slot name="icon" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',

  props: {
    color: {
      type: String,
      default: 'bg-purple'
    },
    to: {
      type: String,
      default: '/blog'
    }
  }
}
</script>
