<template>
  <section>
    <div class="bg-purple z-0">
      <div class="container flex items-center banner relative">
        <img
          src="~assets/images/siraj-kimuli-mobile.png"
          alt="Siraj Kimuli"
          class="absolute bottom-0 right-0 md:hidden w-2/3 siraj-mobile"
        >
        <img
          src="~assets/images/siraj-kimuli-desktop-2.png"
          alt="Siraj Kimuli"
          class="absolute bottom-0 right-0 hidden md:block w-2/3 lg:w-auto"
        >
        <div class="w-full md:w-2/3 lg:w-1/2 ml-0 lg:ml-24 mt-24 md:mt-32 z-50 intro">
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
      <div class="bg-white md:my-32 flex flex-wrap">
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
          <p class="mt-10 mt-16 w-full lg:w-2/3">
            <nuxt-link
              to="/work"
              class="cursor-pointer group transition-colors duration-300 hover:border-yellow hover:text-purple py-2 px-4 border-2 border-blue text-blue w-full flex"
            >
              Look at my craft
              <ArrowRight
                stroke-width="2"
                class="transition-all ease-in-out duration-500 ml-auto mr-4 group-hover:mr-0 w-6 h-6 stroke-current text-blue group-hover:text-yellow"
              />
            </nuxt-link>
          </p>
        </div>
        <div class="w-full lg:w-1/2 px-8 py-16 md:p-16">
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
            I enjoy <br>
            writing too
          </h2>
          <p class="mt-10 md:mt-6">
            About accessibility, <br>
            product design, user experience, <br>
            budgeting and planing.
          </p>
          <p class="mt-10 md:mt-16 w-full lg:w-2/3">
            <nuxt-link
              to="/blog"
              class="cursor-pointer group transition-colors duration-300 hover:border-yellow hover:text-purple py-2 px-4 border-2 border-blue text-blue w-full flex"
            >
              Go to Blog
              <ArrowRight
                stroke-width="2"
                class="transition-all ease-in-out duration-500 ml-auto mr-4 group-hover:mr-0 w-6 h-6 stroke-current text-blue group-hover:text-yellow"
              />
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>

    <!--Recent Blog-->
    <div class="container mt-32 overflow-x-hidden">
      <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
        Recent Blog
      </h2>
      <div class="flex flex-wrap -mx-6 overflow-x-hidden">
        <BlogCard to="/blog/breaking-the-current-workflow-for-better-ux">
          Breaking the current workflow to improve prove productivity.
          <template #icon>
            <span class="text-7xl leading-none p-0">✂️</span>
          </template>
        </BlogCard>

        <BlogCard to="/blog/why-you-need-a-design-system">
          Why you need a design system
          <template #icon>
            <span class="text-7xl leading-none p-0">🗂</span>
          </template>
        </BlogCard>

        <BlogCard color="bg-white" to="/blog/getting-out-of-survival-mode">
          Getting out of survival mode. ~ Perfect Routines
          <template #icon>
            <span class="text-7xl leading-none p-0">🥵</span>
          </template>
        </BlogCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Siraj Kimuli - Software Engineer',
  ogTitle: 'Siraj Kimuli - Software Engineer',
  description: 'Siraj Kimuli is here to share his experience designing and developing products as a software engineer and product designer' ,
})
</script>
<style>
  .siraj-mobile{
    animation: 5s bringIn;
    transform: translateX(0px);
  }
  @keyframes bringIn {
    0%{
      transform: translateX(30px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
