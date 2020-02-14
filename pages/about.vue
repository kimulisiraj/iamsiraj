<template>
  <section>
    <!--introduction banner-->
    <div class="bg-pink">
      <div class="container flex items-center banner about">
        <div class="w-full lg:w-2/5 ml-0 lg:ml-24 mt-24 md:mt-32">
          <h1 class="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-none">
            <span>🤔</span>About
          </h1>
          <p class="text-white opacity-75 mt-8 text-xlg">
            I'm passionate about photography and cinematography though it's just a hobby!, anyway scroll down I will tell what I do for a living and why I this built website.
          </p>
          <a href="#content" class="block mt-8 md:mt-16">
            <ArrowDown />
          </a>
        </div>
      </div>
    </div>

    <!--Content-->
    <div id="content" class="container mt-24 md:mt-32">
      <div class="w-full mt-24 ml-0 lg:ml-24">
        <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
          The Author
        </h2>
        <div class="flex md:flex-no-wrap flex-wrap-reverse">
          <div class="w-full mt-4 md:mt-0 sm:w-4/5 md:w-2/3 lg:w-1/2">
            <p class="text-gray-700">
              A multidisciplinary software engineer with over 5 + years experience.
              My skill set extends to digital design,
              UX/UI Design, API Development, Systems Integration, working with and leading a team over multiple projects
              and
              campaigns. I get geeky about creative stuff, will jump at the chance to scuba dive and in another life I
              would
              travel the practising photography.
            </p>

            <p class="mt-4 text-gray-700">
              Goal: "Leading a great team running a successful product"
            </p>

            <p class="mt-4 text-gray-700">
              <span class="font-bold">Twitter: </span><a
                href="https://twitter.com/kimulisiraj"
                target="_blank"
                class="text-blue"
              > @kimulisiraj</a>
            </p>
            <p class="mt-2 text-gray-700">
              <span class="font-bold">Email: </span> <a href="mailto:ello@kimulisiraj.me" class="text-blue">hello@kimulisiraj.me</a>
            </p>
          </div>
          <figure class="md:ml-4 h-auto md:h-56 w-full md:w-56 object-cover">
            <img
              src="~/assets/images/siraje.jpg"
              class="w-full h-auto object-cover"
              alt="Siraj Kimuli"
            >
            <caption class="block w-full text-left bg-white py-3 px-4 text-sm">
              Co-founder <a href="https://luckygrafics.com" class="text-blue" target="_blank">LUCKYGrafics</a>
            </caption>
          </figure>
        </div>
      </div>
      <div class="w-full md:w-2/3 lg:w-1/2 mt-24 ml-0 lg:ml-24">
        <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
          The Site
        </h2>
        <p class="mt-2 text-gray-700">
          I write this blog about the design and building web products. My main aim is to guide you on how to design,
          develop and ship products with the best user experience as you intend in shorts time possible. With this, I
          cover a mixture of how to design visually appealing web applications and how to write maintainable code.
        </p>
        <p class="mt-4 text-gray-700">
          My vision for this website is to; teach in-depth ‘web’ related design topics. Help you understand why and
          develop your own rationale. Using different tools.
        </p>

        <h3 class="font-extrabold text-2xl md:text-3xl mt-8">
          Built With
        </h3>
        <p class="mt-4 text-gray-700">
          Everything (almost) used do develop this website
        </p>
        <h4 class="font-bold mt-4">
          Design: Adobe XD
        </h4>
        <p class="text-gray-700">
          I have used XD since the first beta, now it a great tool I can trust for prototyping.
        </p>
        <h4 class="font-bold mt-4">
          Code: WebStorm
        </h4>
        <p class="text-gray-700">
          It used to be a slow and heavy editor, now it lighting fast, It my favourite IDE for javascript projects.
        </p>
        <h4 class="font-bold mt-4">
          Writing: iA Writer
        </h4>
        <p class="text-gray-700">
          A simple markdown editor. All posts start here then are copied and pasted into the CMS. Syncs with iCloud so I
          can write anywhere.
        </p>
        <h4 class="font-bold mt-4">
          Hosting: Netlify
        </h4>
        <p class="text-gray-700">
          Its a cloud based hosting service; All I can say about <a href="https://www.netlify.com" target="_blank">netlify</a>
          everything just works the way they should, linking your repository is all your need to get rolling.
        </p>
        <h4 class="font-bold mt-4">
          Framework: Nuxtjs | Vue
        </h4>
        <p class="text-gray-700">
          I choose Nuxtjs for Vue because it doesnt introduce other framework syntax and rules to obey to, Nuxtjs just
          help you organise your vue code I.e a bootstrapper for vue projects.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowDown from '@/components/svg/ArrowDown'

export default {
  head () {
    return {
      title: 'About - Siraj Kimuli',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About: Siraj Kimuli is Software Engineer, Product Designer and partner at LUCKYGrafics based in Kampala, Uganda'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'UI/UX Design, Nuxtjs, Vuejs, Webstorm, Netlify, web development, Ai Writer, photography, API Development, Systems Integration, Product design'
        }
      ]
    }
  },

  components: {
    ArrowDown
  }
}
</script>
