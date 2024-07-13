<template>
  <header data-scroll-section class="w-full h-[85vh] p-4 flex flex-col justify-center items-center gap-3">
    <div class="flex flex-col items-center gap-2">
      <h1 data-scroll data-scroll-speed="2" data-scroll-delay="0.01"
        class="font-black text-6xl text-center text-slate-900">
        <NuxtLink :to="{ name: 'index' }">
          anhzf.dev
        </NuxtLink>
      </h1>
      <div data-scroll data-scroll-speed="3" data-scroll-delay="0.25"
        class="font-medium text-xl text-center text-white max-w-36ch text-balance">
        <span class="bg-light-blue-400/50 px-2 py-1 leading-normal box-decoration-clone">
          Develop your ideas into a business-valuable app
        </span>
      </div>
    </div>
  </header>
</template>
