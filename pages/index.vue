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
        <BlogCard color="bg-red">
          The “Back Button”
          - A Mistake that
          google regrets
          <template v-slot:icon>
            <svg class="h-16" viewBox="0 0 248.747 140.004">
              <g id="Group_20" data-name="Group 20" transform="translate(-147.253 -2490.498)">
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M56,0l56,97H0Z"
                  transform="translate(195.753 2490.498) rotate(30)"
                  fill="#fff"
                  opacity="0.4"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M56,0l56,97H0Z"
                  transform="translate(231.753 2490.498) rotate(30)"
                  fill="#fff"
                  opacity="0.4"
                />
                <circle
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx="51.5"
                  cy="51.5"
                  r="51.5"
                  transform="translate(293 2522)"
                  fill="#fff"
                  opacity="0.4"
                />
              </g>
            </svg>
          </template>
        </BlogCard>

        <BlogCard color="bg-yellow">
          Free Online Resources for
          UX/UI Design
          <template v-slot:icon>
            <svg class="h-16" viewBox="0 0 208.745 104">
              <g id="Group_21" data-name="Group 21" transform="translate(-741.255 -2527)">
                <circle
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  cx="52"
                  cy="52"
                  r="52"
                  transform="translate(846 2527)"
                  fill="#fff"
                  opacity="0.504"
                />
                <line
                  id="Line_5"
                  data-name="Line 5"
                  y2="103"
                  transform="translate(799.25 2534.4) rotate(30)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="15"
                  opacity="0.504"
                />
                <line
                  id="Line_6"
                  data-name="Line 6"
                  y2="103"
                  transform="translate(836.25 2534.4) rotate(30)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="15"
                  opacity="0.504"
                />
              </g>
            </svg>
          </template>
        </BlogCard>

        <BlogCard>
          Breaking current
          WorkFlow for better
          User Experience
          <template v-slot:icon>
            <svg class="h-16" viewBox="0 0 156 104">
              <g id="Group_22" data-name="Group 22" transform="translate(-1345 -2527)">
                <circle
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  cx="52"
                  cy="52"
                  r="52"
                  transform="translate(1345 2527)"
                  fill="#fff"
                  opacity="0.504"
                />
                <line
                  id="Line_7"
                  data-name="Line 7"
                  y2="49"
                  transform="translate(1465.5 2527)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="15"
                  opacity="0.5"
                />
                <line
                  id="Line_8"
                  data-name="Line 8"
                  y2="104"
                  transform="translate(1493.5 2527)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="15"
                  opacity="0.5"
                />
              </g>
            </svg>
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
      title: `Software Engineer - Siraj Kimuli`,
      meta: [
        { hid: 'description', name: 'description', content: `I'm Siraj Kimuli a Software Engineer from Uganda Kampala who Enjoys Writing` }
      ]
    }
  },
  components: {
    BlogCard,
    ArrowDown
  }
}
</script>
