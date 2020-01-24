<template>
  <section>
    <!--introduction banner-->
    <div class="bg-pink">
      <div class="container flex items-center banner about">
        <div class="w-full lg:w-2/5 ml-0 lg:ml-24 mt-32">
          <h1 class="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-none">
            About
          </h1>
          <p class="text-white opacity-75 mt-8 text-xlg">
            Know more about me (the author) and why this website developed. It will help us connect easier.
          </p>
          <a href="#content" class="block mt-8 md:mt-16">
            <ArrowDown />
          </a>
        </div>
      </div>
    </div>

    <!--Blog Listing-->
    <div id="content" class="container mt-24 md:mt-32">
      <div class="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 mt-48 ml-0 lg:ml-24">
        <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
          The Author
        </h2>
        <p class="mt-4">
          I’m a Product Designer, UI developer, and team player always immersed in stylesheets tweaking font sizes and
          contemplating layouts not just positioned behind artboards moving pixels as I’m committed to crafting fluent
          user experiences while staying stylish.
        </p>

        <p class="mt-4">
          Follow me on Twitter to know what am working on . Want to know which IDE, apps and hardware I use? Here you
          go!
        </p>
      </div>
      <div class="w-full md:w-2/3 lg:w-1/2 mt-48 ml-0 lg:ml-24">
        <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
          The Site
        </h2>
        <p class="mt-4">
          I write this blog about the design and building web products. My main aim is to guide you on how to design,
          develop and ship products with the best user experience as you intend in shorts time possible. With this, I
          cover a mixture of how to design visually appealing web applications and how to write maintainable code.
        </p>
        <p class="mt-4">
          My vision for this website is to; teach in-depth ‘web’ related design topics. Help you understand why and
          develop your own rationale. Using different tools.
        </p>

        <h3 class="font-extrabold text-2xl md:text-3xl mt-8">
          Built With
        </h3>
        <p class="mt-4">
          Everything (almost) used do develop this website
        </p>
        <h4 class="font-bold mt-4">
          Design: Adobe XD
        </h4>
        <p>I have used XD since the first beta, now it a great tool I can trust for prototyping.</p>
        <h4 class="font-bold mt-4">
          Code: WebStorm
        </h4>
        <p>It used to be a slow and heavy editor, now it lighting fast, It my favourite IDE for javascript projects.</p>
        <h4 class="font-bold mt-4">
          Writing: iA Writer
        </h4>
        <p>A simple markdown editor. All posts start here then are copied and pasted into the CMS. Syncs with iCloud so I can write anywhere.</p>
        <h4 class="font-bold mt-4">
          Hosting: Netlify
        </h4>
        <p>Its a cloud based hosting service; All I can say about <a href="https://www.netlify.com" target="_blank">netlify</a> everything just works the way they should,  linking your repository is all your need to get rolling.</p>
        <h4 class="font-bold mt-4">
          Framework: Nuxtjs | Vue
        </h4>
        <p>I choose Nuxtjs for Vue because it doesnt introduce other framework syntax and rules to obey to, Nuxtjs just help you organise your vue code I.e a bootstrapper for vue projects.</p>
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
        { hid: 'description', name: 'description', content: 'About the Author (Kimuli Siraje) and technology used to build this website' }
      ]
    }
  },

  components: {
    ArrowDown
  }
}
</script>
