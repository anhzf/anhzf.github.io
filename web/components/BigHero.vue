<template>
  <header data-scroll-section class="w-full h-[85vh] p-4 flex flex-col justify-center items-center gap-3">
    <div class="flex flex-col items-center gap-3">
      <h1 data-scroll data-scroll-speed="2" data-scroll-delay="0.01"
        class="font-black text-6xl text-center text-slate-900">
        <NuxtLink :to="{ name: 'index' }">
          anhzf.dev
        </NuxtLink>
      </h1>
      <div data-scroll data-scroll-speed="3" data-scroll-delay="0.015"
        class="flex items-center flex-no-wrap bg-light-blue-400/50 font-medium text-xl text-center text-white overflow-hidden px-2">
        Develop your ideas into a business-valuable app
      </div>
    </div>
  </header>
</template>
