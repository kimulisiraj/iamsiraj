<template>
  <section>
    <!--introduction banner-->
    <div class="bg-blue">
      <div class="container flex items-center h-screen work banner">
        <div class="w-full lg:w-2/5 ml-0 lg:ml-24 mt-24 md:mt-32">
          <h1 class="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-none">
            Work
          </h1>
          <p class="text-white opacity-75 mt-8 text-xlg">
            Contributed to Open Source Project, designed and crafted various successful Web Applications and
            Websites. Check out my latest creation.
          </p>
          <a href="#content" class="block mt-8 md:mt-16">
            <ArrowDown />
          </a>
        </div>
      </div>
    </div>

    <!--Blog Listing-->
    <div id="content" class="container mt-24 md:mt-32 overflow-hidden">
      <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
        Web Application
      </h2>
      <div class="flex flex-wrap -mx-6 overflow-x-hidden py-8">
        <!--ztenda-->
        <div class="w-full md:w-1/3 p-6">
          <div class="flex shadow-xl bg-white block p-8">
            <div class="mt-auto">
              <h4 class="font-extrabold text-xl md:text-2xl">
                Ztenda
              </h4>
              <p class="text-gray-800">
                Bids & Tenders
              </p>
              <p class="mt-4">
                <a href="https://ztenda.com" class="text-blue" target="_blank">ztenda.com</a>
              </p>
            </div>
          </div>
        </div>

        <!--cliqpal-->
        <div class="w-full md:w-1/3 p-6">
          <div class="flex shadow-xl bg-white block p-8">
            <div class="mt-auto">
              <h4 class="font-extrabold text-xl md:text-2xl">
                Cliqpal
              </h4>
              <p class="text-gray-800">
                Pharmacy Inventory
              </p>
              <p class="mt-4">
                <a href="http://cliqpal.com" class="text-blue" target="_blank">cliqpal.com</a>
              </p>
            </div>
          </div>
        </div>

        <!--agrotracker-->
        <div class="w-full md:w-1/3 p-6 ">
          <div class="flex shadow-xl bg-white block p-8">
            <div class="mt-auto">
              <h4 class="font-extrabold text-xl md:text-2xl">
                AgroTracker
              </h4>
              <p class="text-gray-800 text-base">
                Agriculture Farm
              </p>
              <p class="mt-4">
                <a href="https://agro-tracker.com" class="text-blue" target="_blank">agro-tracker.com</a>
              </p>
            </div>
          </div>
        </div>

        <!--borrowercentral-->
        <div class="w-full md:w-1/3 p-6">
          <div class="flex shadow-xl bg-white block p-8">
            <div class="mt-auto">
              <h4 class="font-extrabold text-xl md:text-2xl">
                BorrowerCentral
              </h4>
              <p class="text-gray-800">
                Lending & Borrowing
              </p>
              <p class="mt-4">
                <a href="https://app.borrowercentral.com" class="text-blue" target="_blank">app.borrowercentral.com</a>
              </p>
            </div>
          </div>
        </div>

        <!--sanyuapp-->
        <div class="w-full md:w-1/3 p-6">
          <div class="flex shadow-xl bg-white block p-8">
            <div class="mt-auto">
              <h4 class="font-extrabold text-xl md:text-2xl">
                Sanyu app
              </h4>
              <p class="text-gray-800">
                SACCO & Investment Club
              </p>
              <p class="mt-4">
                <a href="#" class="text-gray-500" target="_blank">sanyuapp.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-4xl md:text-5xl font-extrabold leading-tight mt-24">
        Websites
      </h2>

      <div class="flex flex-wrap -mx-6 overflow-x-hidden py-8">
        <!--flt-->
        <div class="w-full md:w-1/3 p-6">
          <div class="flex shadow-xl bg-white block p-8">
            <div class="mt-auto">
              <h4 class="font-extrabold text-xl md:text-2xl">
                FutureLink Technologies
              </h4>
              <p class="text-gray-800">
                Finatech
              </p>
              <p class="mt-4">
                <a href="https://fltug.com.com" class="text-blue" target="_blank">fltug.com</a>
              </p>
            </div>
          </div>
        </div>

        <!--ellington safaris-->
        <div class="w-full md:w-1/3 p-6">
          <div class="flex shadow-xl bg-white block p-8">
            <div class="mt-auto">
              <h4 class="font-extrabold text-xl md:text-2xl">
                Ellington Safaris Ltd
              </h4>
              <p class="text-gray-800">
                Tours & Travel
              </p>
              <p class="mt-4">
                <a href="http://ellingtonsafaris.com" class="text-blue" target="_blank">ellingtonsafaris.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowDown from '@/components/svg/ArrowDown'

export default {
  head () {
    return {
      title: 'Work / Projects - Siraj Kimuil',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'I have worked with Finatech sector for 4+ year and contributed to open source projects'
        }
      ]
    }
  },

  components: {
    ArrowDown
  }
}
</script>
