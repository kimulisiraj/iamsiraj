<template>
  <main class="font-sans text-lg">
    <Navigation />
    <nuxt />
    <Footer />
  </main>
</template>
<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
export default {
  components: {
    Navigation,
    Footer
  }
}
</script>
