<template>
  <section>
    <!--introduction banner-->
    <div class="bg-red">
      <div class="container flex items-center banner blog">
        <div class="w-full lg:w-2/5 ml-0 lg:ml-24 mt-24 md:mt-32">
          <h1 class="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-none">
            Blog
          </h1>
          <p class="text-white opacity-75 mt-8 text-xlg">
            I write about accessibility, product design, user experience, web application development, budgeting and
            planing.
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
        <BlogCard color="bg-red" to="/blog/the-back-button-a-mistake-google-regrets">
          The “Back Button” - A Mistake that google regrets
          <template v-slot:icon>
            <BackButtonArt class="h-16" />
          </template>
        </BlogCard>

        <BlogCard color="bg-yellow" to="/blog/free-online-ui-ux-design-resources">
          Free Online Resources for UX/UI Design
          <template v-slot:icon>
            <ResourcesArt class="h-16" />
          </template>
        </BlogCard>

        <BlogCard to="/blog/breaking-the-current-workflow-for-better-ux">
          Breaking current the workflow for better User Experience
          <template v-slot:icon>
            <WorkflowArt class="h-16" />
          </template>
        </BlogCard>
      </div>
    </div>
  </section>
</template>

<script>
import BlogCard from '@/components/BlogCard'
import ArrowDown from '@/components/svg/ArrowDown'
import ResourcesArt from '@/components/svg/ResourcesArt'
import BackButtonArt from '@/components/svg/BackButtonArt'
import WorkflowArt from '@/components/svg/WorkflowArt'

export default {
  head () {
    return {
      title: `Blog - Siraj Kimuli`,
      meta: [
        { hid: 'description', name: 'description', content: `I write about UI/UX Design, Product Develop, Accessibility and career experiences as Software Engineer` },
        { hid: 'keywords', name: 'keywords', content: `Back button, User Experience, UI/UX Design, Online Resources, Workflow` }
      ]
    }
  },
  components: {
    BlogCard,
    ArrowDown,
    ResourcesArt,
    WorkflowArt,
    BackButtonArt
  }
}
</script>
