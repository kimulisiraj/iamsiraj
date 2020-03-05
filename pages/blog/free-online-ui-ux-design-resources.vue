<template>
  <section>
    <div class="bg-red font-serif -mb-24">
      <div class="container flex items-center banner">
        <div class="w-full lg:w-3/5 mx-auto text-white ">
          <h1 class="text-4xl md:text-6xl font-extrabold leading-none">
            Free Online Resources for UX/UI Designer.
          </h1>
          <p class="font-bold text-lg mt-8">
            If I have seen further than others, it is by standing upon the shoulders of giants. - Isaac Newton
          </p>
          <p class="mt-4">
            I have been designing applications and researching about user experiences for a while, so I'm am pleased to
            share the Giants (resources) I stood upon for inspiration and guidance to quickly craft out a project.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <img
        src="~/assets/images/experience.jpg"
        alt="experience"
        class="h-72 w-full object-cover"
      >
    </div>

    <!--post content-->
    <div id="content" class="container mt-8 overflow-x-hidden">
      <div class="w-full lg:w-3/5 mx-auto content">
        <h3>Illustrations & Images</h3>
        <ul>
          <li>
            <a href="https://www.manypixels.co/gallery" target="_blank">Manypiexels</a> is an online design studio, but
            they have a fantastic gallery of illustration which they offer for free to showcase what they are capable of
            producing before you place a design order with them.
          </li>
          <li>
            <a href="https://undraw.co/illustrations" target="_blank">undraw</a> It hosts a variety of well-crafted
            illustrations for different use cases. I know when you use one of these illustration designers over the
            internet will know it came from undraw, but you can make simple adjustments to make them look unique.
          </li>
          <li>
            <a href="http://www.365cons.com" target="_blank">365cons</a>
            These are a bit fussy, though I like the attention to details given on each illustration.
          </li>
          <li>
            <a href="https://unsplash.com" target="_blank">Unsplashed</a> You might have had about this one. Is the site
            I always run to for quality stock images.
          </li>
        </ul>

        <!--Inspiration-->
        <h3>Inspiration</h3>
        <p>
          Sites of well-known brands invest in allot to have their brands stand out, and they present a better
          experience to users.
        </p>
        <ul>
          <li><a href="https://land-book.com" target="_blank">land-book.com</a></li>
          <li><a href="https://stripe.com" target="_blank">Stripe</a></li>
          <li><a href="https://dribbble.com" target="_blank">Dribbble</a></li>
          <li><a href="https://www.behance.net" target="_blank">Behance</a></li>
        </ul>

        <!-- icons-->
        <h3>Icons</h3>
        <p>
          There are many icon frameworks out there, and everyone has his favourite, though I find these following easy
          to customise and a bit unique
        </p>
        <ul>
          <li><a href="https://feathericons.com" target="_blank">feathericons</a></li>
          <li><a href="https://jam-icons.com" target="_blank">Jam-icons</a></li>
          <li><a href="http://www.zondicons.com" target="_blank">Zondicons</a></li>
          <li><a href="https://akveo.github.io/eva-icons/" target="_blank">eva icons</a></li>
          <li><a href="https://ikonate.com/" target="_blank">ikonate</a></li>
        </ul>

        <!--Patterns-->
        <h3>Background Patterns</h3>
        <p>
          I like plain and clean backgrounds, You might have noticed already by visiting this blog but sometimes they
          are boring, this is where background pattern become handy.
        </p>
        <ul>
          <li><a href="https://patterninja.com/" target="_blank">Patterninja</a></li>
          <li><a href="https://coolbackgrounds.io" target="_blank">coolbackgrounds</a></li>
          <li><a href="https://www.heropatterns.com" target="_blank">Hero Patterns</a></li>
          <li><a href="https://cssgradient.io/gradient-backgrounds/" target="_blank">cssgradient</a></li>
          <li><a href="https://www.svgbackgrounds.com" target="_blank">svgbackgrounds</a></li>
        </ul>

        <!--Browser Plugins-->
        <h3>Browser Plugins</h3>
        <p>
          These are a lot helpful when you're designing and testing in the browser. Muzil always through design trends
          to my face when ever I open the browser this becomes handy and keeps me update.
        </p>
        <ul>
          <li><a href="https://muz.li/" target="_blank">Muzil</a></li>
          <li><a href="https://keyframes.app" target="_blank">Keyframes</a></li>
          <li><a href="https://www.dailynow.co/" target="_blank">Daily 2.0</a></li>
          <li>
            <a
              href="https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en"
              target="_blank"
            >Window Resizer</a>
          </li>
          <li><a href="http://grammarly.com/" target="_blank">Grammarly</a></li>
        </ul>

        <h3>IDE & Settings</h3>
        <p>
          I started my development career with sublime text as the main code editor, and I loved it so much because it
          was fast and it could run seemly on my low powered MacBook Air.
          As I become more obsessed with code refactoring
          PhpStorm and WebStorm become very handy, and I dropped sublime, I only use it when editing a single file.
        </p>
        <p class="font-bold">
          Here is my setup and IDE of choice:-
        </p>
        <ul>
          <li><span class="font-bold">Font:</span> IBM Plex Mono.</li>
          <li><span class="font-bold">Theme:</span> Materialize GitHub.</li>
          <li><span class="font-bold">IDE:</span> PhpStorm EA</li>
          <li><span class="font-bold">Text Editor:</span> Sublime; for editing single files.</li>
          <li><span class="font-bold">Terminal:</span> Mac Terminal with Ohmyz.sh</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: `Free Online Resources for UX/UI Design. - Siraj Kimuli`,
      meta: [
        { hid: 'description', name: 'description', content: `Free online Resources for UI/UX Designers` },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `Free Design Resources, Background patterns, IDE Settings, Broswer Plugins, Icon Frameworks, product design, Keyframes, CSS Animation, SVG, cssgradient`
        }
      ]
    }
  },
  name: 'DesignFreeOnlineResources'
}
</script>
