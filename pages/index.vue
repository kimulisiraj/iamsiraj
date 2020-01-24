<template>
  <section>
    <!--introduction banner-->
    <div class="bg-purple">
      <div class="container flex items-center banner">
        <div class="w-full md:w-2/3 lg:w-1/2 ml-0 lg:ml-24 mt-32">
          <h1 class="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-none">
            Software Engineer
          </h1>
          <p class="text-purple-light mt-8 text-xlg">
            I came to think of my job description more and more as "a translator between real world problems, and
            technical solutions", instead of "a programmer who writes code" - Brent
          </p>
          <a href="#content" class="block mt-8 md:mt-16">
            <ArrowDown />
          </a>
        </div>
      </div>
    </div>

    <!--summary-->
    <div id="content" class="container px-0">
      <div class="bg-white md:my-24 flex flex-wrap">
        <div
          class="w-full lg:w-1/2 px-8 py-16 md:p-16 border-r-0 lg:border-r-4 border-b-4 md:border-b-0 border-gray-100"
        >
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
            I build & <br>
            design things
          </h2>
          <p class="mt-6">
            Web Applications, <br>
            Websites, Open Source Project <br>
            and experimental.
          </p>
          <p class="mt-16">
            <nuxt-link to="/work" class="py-2 px-4 border-2 border-blue text-blue">
              Look at my craft
            </nuxt-link>
          </p>
        </div>
        <div class="w-full lg:w-1/2 px-8 py-16 md:p-16">
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
            I enjoy, <br>
            writing
          </h2>
          <p class="mt-10 md:mt-6">
            About accessibility, <br>
            product design, user experience, <br>
            budgeting and planing.
          </p>
          <p class="mt-10 md:mt-16">
            <nuxt-link to="/blog" class="py-2 px-4 border-2 border-blue text-blue">
              Go to Blog
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>

    <!--Recent Blog-->
    <div class="container mt-24 md:mt-32 overflow-x-hidden">
      <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
        Recent Blog
      </h2>
      <div class="flex flex-wrap -mx-6 overflow-x-hidden">
        <BlogCard color="bg-red" to="/blog/the-back-button-a-mistake-google-regrets">
          The “Back Button”
          - A Mistake that
          google regrets
          <template v-slot:icon>
            <BackButtonArt class="h-16" />
          </template>
        </BlogCard>

        <BlogCard color="bg-yellow" to="blog/design-free-online-resources">
          Free Online Resources for
          UX/UI Design
          <template v-slot:icon>
            <ResourcesArt class="h-16" />
          </template>
        </BlogCard>

        <BlogCard>
          Breaking current
          WorkFlow for better
          User Experience
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
      title: `Siraj Kimuli - Software Engineer`,
      meta: [
        { hid: 'description', name: 'description', content: `I'm Siraj Kimuli a Software Engineer from Uganda Kampala who Enjoys Writing` },
        { hid: 'keywords', name: 'keywords', content: `Web application, Website Design, open source projects, product design, user experience, programmer, writing code` }
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
