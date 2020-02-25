<template>
  <section>
    <!--introduction banner-->
    <div class="bg-red">
      <div class="container flex items-center banner blog">
        <div class="w-full lg:w-2/5 ml-0 lg:ml-24 mt-24 md:mt-32">
          <h1 class="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-none">
            <span>📝</span> Blog
          </h1>
          <p class="text-white opacity-75 mt-8 text-xlg">
            Sharing is caring; Here I share what I have learnt in ages as a software engineer and a partner at LUCKYGrafics, something in the lines of product design, User experience design, application development, budgeting and planning.
          </p>
          <a href="#content" class="block cursor-pointer mt-8 md:mt-16">
            <ArrowDown />
          </a>
        </div>
      </div>
    </div>

    <!--Blog Listing-->
    <div id="content" class="container mt-24 md:mt-32 overflow-x-hidden">
      <div class="flex flex-wrap -mx-6 overflow-x-hidden">
        <BlogCard color="bg-white" to="/blog/breaking-the-current-workflow-for-better-ux">
          Breaking current the workflow for better User Experience
          <template v-slot:icon>
            <span class="text-7xl leading-none p-0">✂️</span>
          </template>
        </BlogCard>

        <BlogCard color="bg-blue" to="/blog/why-you-need-a-design-system">
          Why you need a design system
          <template v-slot:icon>
            <span class="text-7xl leading-none p-0">🗂</span>
          </template>
        </BlogCard>

        <BlogCard color="bg-yellow" to="/blog/free-online-ui-ux-design-resources">
          Free Online Resources for UX/UI Design
          <template v-slot:icon>
            <span class="text-7xl leading-none p-0">🔖</span>
          </template>
        </BlogCard>

        <BlogCard color="bg-red" to="/blog/the-back-button-a-mistake-google-regrets">
          The “Back Button” - A Mistake that google regrets
          <template v-slot:icon>
            <span class="text-7xl leading-none p-0 text-gray-100">🔙</span>
          </template>
        </BlogCard>
      </div>
    </div>
  </section>
</template>

<script>
import BlogCard from '@/components/BlogCard'
import ArrowDown from '@/components/svg/ArrowDown'

export default {
  head () {
    return {
      title: `Blog - Siraj Kimuli`,
      meta: [
        { hid: 'description', name: 'description', content: `I write about UI/UX Design, Product Design & Development, Accessibility and share my career experiences as Software Engineer` },
        { hid: 'keywords', name: 'keywords', content: `Back button, User Experience, UI/UX Design, Online Resources, Workflow` }
      ]
    }
  },
  components: {
    BlogCard,
    ArrowDown
  }
}
</script>
