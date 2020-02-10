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
      <h2 class="text-4xl text-blue md:text-5xl font-extrabold leading-tight">
        Web Application
      </h2>
      <div class="flex flex-wrap -mx-6 overflow-x-hidden">
        <!--ztenda-->
        <div class="w-full md:w-1/3 p-6 flex">
          <div class="bg-white block p-8">
            <h4 class="font-extrabold text-xl md:text-2xl">
              Ztenda
            </h4>
            <p class="mt-1">
              <a href="https://ztenda.com" class="text-blue hover:underline" target="_blank">ztenda.com</a>
            </p>
            <p class="text-gray-700 mt-2">
              <span class="font-bold">Goal:</span> Help companies in Uganda which can't afford newspapers daily to be
              able to Find Tenders, Bids and
              Grants online at zero subscription fee.
            </p>
          </div>
        </div>

        <!--cliqpal-->
        <div class="w-full md:w-1/3 p-6 flex">
          <div class="bg-white block p-8">
            <h4 class="font-extrabold text-xl md:text-2xl">
              Cliqpal
            </h4>
            <p class="mt-1">
              <a href="http://cliqpal.com" class="text-blue hover:underline" target="_blank">cliqpal.com</a>
            </p>
            <p class="text-gray-700 mt-2">
              <span class="font-bold">Achievement:</span> Shipped a robust web application to help pharmacies manage
              their inventory and shift from Quickbooks & SPS which wasn't tailor made for that purpose.
            </p>
          </div>
        </div>

        <!--agrotracker-->
        <div class="w-full md:w-1/3 p-6 flex">
          <div class="bg-white block p-8">
            <h4 class="font-extrabold text-xl md:text-2xl">
              AgroTracker
            </h4>
            <p class="mt-2">
              <a
                href="https://agro-tracker.com"
                class="text-blue hover:underline"
                target="_blank"
              >agro-tracker.com</a>
            </p>
            <p class="text-gray-700 mt-2">
              <span class="font-bold">Focus:</span> This product was developed as result of sorghum & barry production
              from Western Uganda to enables the aggregator to the whole production chain.
            </p>
          </div>
        </div>

        <!--borrowercentral-->
        <div class="w-full md:w-1/3 p-6 flex">
          <div class="bg-white block p-8">
            <h4 class="font-extrabold text-xl md:text-2xl">
              BorrowerCentral
            </h4>
            <p class="mt-1">
              <a href="https://app.borrowercentral.com" class="text-blue hover:underline" target="_blank">app.borrowercentral.com</a>
            </p>
            <p class="text-gray-700 mt-2">
              <span class="font-bold">Goal:</span> This is a product by TrailAnalytics to connect borrowers and lenders online. I was the lead front-end develop from start to end.
            </p>
          </div>
        </div>

        <!--sanyuapp-->
        <div class="w-full md:w-1/3 p-6 flex">
          <div class="bg-white block p-8">
            <h4 class="font-extrabold text-xl md:text-2xl">
              Sanyu app
            </h4>
            <p class="mt-1">
              <a href="#" class="text-gray-500" target="_blank">sanyuapp.com</a>
            </p>
            <p class="text-gray-700 mt-2">
              <span class="font-bold">Goal:</span> SACCO & Investment application focused on members to track their savings & investments.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-4xl text-blue md:text-5xl font-extrabold leading-tight mt-24">
        Websites
      </h2>

      <div class="flex flex-wrap -mx-6 overflow-x-hidden">
        <!--flt-->
        <div class="w-full md:w-1/3 p-6">
          <div class="flex bg-white block p-8">
            <div class="mt-auto">
              <h4 class="font-extrabold text-xl md:text-2xl">
                FutureLink Technologies
              </h4>
              <p class="text-gray-600">
                Finatech
              </p>
              <p class="mt-4">
                <a href="https://fltug.com" class="text-blue hover:underline" target="_blank">fltug.com</a>
              </p>
            </div>
          </div>
        </div>

        <!--ellington safaris-->
        <div class="w-full md:w-1/3 p-6">
          <div class="flex bg-white block p-8">
            <div class="mt-auto">
              <h4 class="font-extrabold text-xl md:text-2xl">
                Ellington Safaris Ltd
              </h4>
              <p class="text-gray-600">
                Tours & Travel
              </p>
              <p class="mt-4">
                <a href="http://ellingtonsafaris.com" class="text-blue hover:underline" target="_blank">ellingtonsafaris.com</a>
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
