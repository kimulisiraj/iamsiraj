<template>
  <div class="w-full md:w-1/3 p-6 group">
    <nuxt-link
      :to="to"
      class="flex flex-col justify-between bg-white h-80 block p-8 hover:shadow-lg duration-75 transition-transform hover:scale-50"
    >
      <h3 class="text-2xl font-semibold leading-tight text-purple group-hover:text-blue">
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
    to: {
      type: String,
      default: '/blog'
    }
  }
}
</script>
