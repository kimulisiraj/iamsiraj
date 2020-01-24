<template>
  <div class="w-full md:w-1/3 p-6">
    <div class="flex shadow-xl bg-white h-80 block p-8">
      <div class="mt-auto">
        <h4 class="font-extrabold text-xl md:text-2xl">
          {{ title }}
        </h4>
        <p class="text-gray-800">
          {{ tagLine }}
        </p>
        <p class="mt-4">
          <a
            v-if="url"
            :href="`http://${ url }`"
            class="text-blue"
            target="_blank"
          >
            {{ url }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkCard',

  props: {
    tagLine: {
      type: String,
      required: false,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
