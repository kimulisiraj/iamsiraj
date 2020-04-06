<template>
  <section>
    <!--introduction banner-->
    <div class="bg-red font-serif -mb-24">
      <div class="container flex items-center banner">
        <div class="w-full lg:w-3/5 mx-auto">
          <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-none">
            The “Back Button” - A Mistake that google regrets
          </h1>
          <p class="text-white font-medium mt-8 text-xlg">
            It's one of the mostly useful component of computer applications and web browsers (Chrome, Safari and
            Others) to keep history of the recently visited pages and it enables us to navigate back.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <img src="~/assets/images/mobile-phone.jpg" alt="" class="h-72 w-full object-cover">
    </div>

    <!--post content-->
    <div id="content" class="container mt-8 overflow-x-hidden">
      <div class="w-full lg:w-3/5 mx-auto content">
        <p class="font-semibold">
          The “back button” is one of the components with least UX (user experience)! <br>Continue reading and I will explain why and how this back is a total mess.
        </p>
        <p>
          As most of the “back buttons” it navigates you back to the recent item in the history stack, oh wait... you may not know which item or page is on top of the stack hence visiting an unintended page.
        </p>
        <h3>The Android messed up "button back"..!</h3>
        <p>
          If you're an Android user or ever owned any gadget running Android os you're familiar with "back button" always (99% of all the time) placed at the button right of the phone/gadget.
        </p>
        <ul>
          <li>
            You know how stressing it's to tap the "back button" unknown times to close a given application. The os
            doesn't communicate the number of many times required to close the application successfully
            Having a functionality to close the application was a wrong choice by google, take an example if your
            browser
            "back button" could close the browser that would be a total mess.
          </li>

          <li>
            Then it gets even worse, that after closing the application and landing on the homepage it keeps toggling
            between you screen pages.
            The button performances all the above-stated actions behaviours 90% all of the time without changing form or
            colour to communicate what the next action is.
          </li>
        </ul>
        <h3>Browser's Blind "Back Button".</h3>
        <p>
          The browser's "back button" is not as messed up as that of android os, it only performs one action "to take
          you back to the previous page".
        </p>
        <h4>
          why do I claim it's blind?
        </h4>
        <p>
          Take this example; You have three tabs open on your browser, then you leave your work station for about one hour, coming back to open one tab by then you would have forgotten what the previous page was, and blindingly you can use the back button to go back. Still, you won't know the page to land on till it opens
        </p>
        <h3>How to Solve the "Back Button" Poor User Experience.</h3>
        <p>This is a simple as it sounds; not relying on the browser's "back button" and:-</p>
        <ul>
          <li>Implementing Breadcrumbs in our applications these shows the whole journey and hierarchy of the pages</li>
          <li>Implementing a "back button" with a label specifying a page you land on.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'The "Back button" -A mistake that google regrets',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explains on how to implement a back button on web applications and website to improve user\'s experience'
        }
      ]
    }
  }
}
</script>
