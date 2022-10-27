<template>
  <main>
    <section class="container p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <h1 class="text-3xl font-bold md:col-span-2 lg:col-span-4">Blogs</h1>

      <ContentList path="/blogs" v-slot="{ list }">
        <article v-for="el in list" :key="el._path">
          <nuxt-link :to="el._path"
            class="flex flex-col px-4 py-3 hover:bg-blue-300/20 rounded-2xl active:rounded-3xl hover:ring-2 ring-blue-500 backdrop-blur-lg transition-background-color,border-radius">
            <img :src="el.image" :alt="`Gambar cover ${el.title}`"
              class="mb-2 aspect-16/9 bg-slate-300 rounded-xl border object-cover">
            <h2 class="text-xl text-slate-900 font-semibold">{{ el.title }}</h2>
            <p class="text-sm text-slate-500">{{ el.description }}</p>
          </nuxt-link>
        </article>
      </ContentList>
    </section>
  </main>
</template>