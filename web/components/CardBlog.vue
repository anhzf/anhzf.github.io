<script lang="ts" setup>
interface Props {
  path: string;
  title: string;
  coverSrc?: string;
  description?: string;
}

defineProps<Props>();
</script>

<template>
  <article>
    <nuxt-link :to="path"
      class="flex flex-col px-4 py-3 hover:bg-blue-300/20 rounded-2xl active:rounded-3xl hover:ring-2 ring-blue-500 backdrop-blur-lg transition-background-color,border-radius">
      <img :src="coverSrc" :alt="`Gambar cover ${title}`" :width="300" format="webp"
        class="mb-2 aspect-16/9 bg-slate-300 rounded-xl border object-cover" />
      <h2 class="text-xl text-slate-900 font-semibold">{{ title }}</h2>
      <p class="text-sm text-slate-500">{{ description }}</p>
    </nuxt-link>
  </article>
</template>