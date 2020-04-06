<template>
  <section>
    <div class="bg-red font-serif -mb-24">
      <div class="container flex items-center banner">
        <div class="w-full lg:w-3/5 mx-auto">
          <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-none">
            Why you need a design-system
          </h1>
          <p class="text-white font-medium mt-8 text-xlg">
            A design System is a reference guide to keep everyone aligned with the company's or organisation's brand and
            language while creating digital products like websites and applications.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <img
        src="~/assets/images/design-system.jpg"
        alt="pattern library"
        class="h-72 w-full object-cover"
      >
    </div>

    <div id="content" class="container mt-8 overflow-x-hidden">
      <div class="w-full lg:w-3/5 mx-auto content">
        <h3>What are design systems made of ?</h3>
        <ul>
          <li>
            <span class="font-bold">Components, </span>like buttons, banners, forms inputs, these are pieces assembled
            to create a digital product.
          </li>
          <li>
            <span class="font-bold">Guidance, </span>These are directions and information on how to assemble the
            components correctly.
          </li>
          <li>
            <span class="font-bold">Reference Site, </span> This is where the components and guidance are stored.
          </li>
        </ul>

        <h3>What a design system is not;</h3>
        <ul>
          <li>A component library.</li>
          <li>An XD or Sketch file.</li>
          <li>A pattern library.</li>
        </ul>
        <p>A design system; It's a combination of all the above and more.</p>

        <h3>Examples of a design system.</h3>
        <ul>
          <li>
            <a href="https://developer.apple.com/design/resources/" target="_blank">Apple Human Interface
              Guidelines</a>
          </li>
          <li><a href="https://polaris.shopify.com" target="_blank">Shopify Polaris</a></li>
          <li><a href="https://material.io/design" target="_blank">Google Material Design</a></li>
          <li><a href="https://lightningdesignsystem.com" target="_blank">Lightning Design System</a></li>
          <li><a href="https://baseweb.design" target="_blank">Uber Base web</a></li>
        </ul>

        <h3>Benefit of having a design system.</h3>
        <p>
          It saves & money; it avoids reputation and gives you consistency since all components are already defined and
          developed;
        </p>
        <p>
          It helps the team to collaborate; a design system as shared reference and developers and designers will
          always speak the same language when referring components.
        </p>

        <h3>Benefit of having a design system.</h3>
        <p>
          I would take all the hustle and explain how you can build a timeless design system, but as the saying goes
          "don't reinvent the wheel" where is the resource (<a href="https://designsystemchecklist.com">designsystemchecklist</a>) that will guide you through the whole process.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyYouNeedADesignSystem',
  head () {
    return {
      title: 'Why you need a design system. - Siraj Kimuli',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Design system will help you organize save time & money through better collaboration and consistence'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Design Language, Design system, product design, website design, digital products, pattern library'
        }
      ]
    }
  }
}
</script>
