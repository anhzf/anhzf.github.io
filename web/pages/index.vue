<template>
  <main id="main" class="relative flex flex-col items-center">
    <big-hero />

    <div class="font-medium text-blue-gray-400 flex flex-col items-center gap-1 animate-bounce animate-duration-2000">
      <span>featured projects</span>
      <div class="i-eva:arrow-downward-outline w-5 h-5" />
    </div>

    <section id="projects" class="p-8 flex flex-col items-center gap-8">
      <h2 class="hidden">Pinned Projects</h2>

      <content-doc path="/projects" v-slot="{ doc: { body: projects } }" :head="false">
        <template v-if="projects">
          <card-project v-for="project in projects" :key="project?.title" v-bind="project" />
        </template>
      </content-doc>

      <a title="See more on GitHub" href="https://github.com/anhzf" target="_blank"
        class="group font-medium text-blue-gray-400 flex items-center gap-1">
        <span>See More</span>
        <div class="i-eva:arrow-forward-outline block transform group-hover:translate-x-1.5 transition-transform" />
      </a>
    </section>
  </main>
</template>