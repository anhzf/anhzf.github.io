<template>
  <div class="pb-20 flex flex-col justify-center items-center">
    <BigHero />

    <main id="main" data-scroll-section class="flex flex-col">
      <div data-scroll data-scroll-speed="6" data-scroll-delay="0.03" data-scroll-offset="200"
        class="group max-w-screen-sm px-4 sm:px-6 py-10 bg-white flex flex-col justify-center items-stretch gap-y-10 shadow-md">
        <div class="w-full px-4 pb-6 border-b border-indigo-100">
          <h2
            class="font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-light-blue-500 uppercase">
            LINKS
          </h2>
        </div>

        <ContentDoc path="/links" v-slot="{ doc: { body: links } }" :head="false">
          <CardLink v-for="(link, i) in links" :key="link.label" v-bind="link" />
        </ContentDoc>
      </div>
    </main>
  </div>
</template>