<script setup lang="ts">
const { page } = useContent()
</script>
<template>
  <Navigation/>
  <div class="bg-blue font-serif -mb-24">
    <div class="container flex items-center banner">
      <div class="w-full lg:w-3/5 mx-auto text-white ">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-none">
          {{ page.title }}
        </h1>
<!--        <p class="font-bold text-lg mt-8">-->
<!--          {{ page.description }}-->
<!--        </p>-->
      </div>
    </div>
  </div>

  <div class="prose prose-slate mx-auto max-w-4xl rounded bg-slate-50 px-6 py-3">
    <slot/>
  </div>
  <Footer/>
</template>
