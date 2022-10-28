<template>
  <main id="main" class="pb-20 flex flex-col justify-center items-center">
    <big-hero />

    <section id="main"
      class="max-w-screen-sm px-4 sm:px-6 py-10 bg-white flex flex-col justify-center items-stretch gap-y-10 shadow-md">
      <div class="w-full px-4 pb-6 border-b border-indigo-100">
        <h2
          class="font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-light-blue-500 uppercase">
          LINKS
        </h2>
      </div>

      <content-doc path="/links" v-slot="{ doc: { body: links } }" :head="false">
        <card-link v-for="link in links" :key="link.label" v-bind="link" />
      </content-doc>
    </section>
  </main>
</template>