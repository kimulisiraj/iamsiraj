<template>
  <section>
    <!--introduction banner-->
    <div class="bg-purple">
      <div class="container flex items-center h-screen" style="max-height: 800px">
        <div class="w-full md:w-2/3 lg:w-1/2 ml-0 lg:ml-24 mt-48">
          <h1 class="text-6xl md:text-8xl font-extrabold text-white leading-none">
            Software Engineer
          </h1>
          <p class="text-purple-light mt-8 text-xlg">
            I came to think of my job description more and more as "a translator between real world problems, and
            technical solutions", instead of "a programmer who writes code" - Brent
          </p>
          <div class="mt-8 md:mt-16">
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
              aria-labelledby="arrowDownIconTitle"
              stroke="#fff"
              stroke-width="1"
              stroke-linecap="square"
              stroke-linejoin="miter"
              fill="none"
              color="#fff"
            ><title id="arrowDownIconTitle">Arrow Down</title>
              <path d="M6 15l6 6 6-6" />
              <path d="M12 3v17" />
              <path stroke-linecap="round" d="M12 21v-1" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!--summary-->
    <div class="container px-0">
      <div class="bg-white md:my-24 flex flex-wrap">
        <div class="w-full lg:w-1/2 px-8 py-16 md:p-16 border-r-0 lg:border-r-4 border-gray-100">
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
            <a href="" class="py-2 px-4 border-2 border-blue text-blue">Look at my craft</a>
          </p>
        </div>
        <div class="w-full lg:w-1/2 px-8 py-16 md:p-16">
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
            I enjoy, <br>
            writing
          </h2>
          <p class="mt-6">
            About accessibility, <br>
            product design, user experience, <br>
            budgeting and planing.
          </p>
          <p class="mt-16">
            <a href="" class="py-2 px-4 border-2 border-blue text-blue">Go to Blog</a>
          </p>
        </div>
      </div>
    </div>

    <!--Recent Blog-->
    <div class="container my-24">
      <h2 class="text-5xl font-extrabold leading-tight">
        Recent Blog
      </h2>
      <div class="flex flex-wrap mt-6 -mx-6">
        <div class="w-full md:w-1/3 px-6 md:my-0 my-6">
          <a href="" class="shadow-xl bg-white h-80 block p-8 bg-blue">
            <h3 class="text-2xl font-semibold leading-tight text-white">The “Back Button”
              - A Mistake that
              google regrets</h3>
          </a>
        </div>
        <div class="w-full md:w-1/3 px-6 md:my-0 my-6">
          <a href="" class="shadow-xl bg-white h-80 block p-8 bg-purple">
            <h3 class="text-2xl font-semibold leading-tight text-white">Free Online Resources for
              UX/UI Design</h3>
          </a>
        </div>
        <div class="w-full md:w-1/3 px-6 md:my-0 my-6">
          <a href="" class="shadow-xl bg-white h-80 block p-8 bg-pink">
            <h3 class="text-2xl font-semibold leading-tight text-white">The “Back Button”
              - A Mistake that
              google regrets</h3>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
