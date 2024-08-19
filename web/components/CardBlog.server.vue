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
    <NuxtLink :to="path"
      class="flex flex-col px-4 py-3 hover:bg-blue-300/20 rounded-2xl active:rounded-3xl hover:ring-2 ring-blue-500 backdrop-blur-lg transition-background-color,border-radius">
      <NuxtImg :src="coverSrc" :alt="`Gambar cover ${title}`" :width="300" format="webp"
        sizes="100vw sm:50vw lg:35vw 2xl:25vw"
        class="mb-2 aspect-16/9 w-full bg-slate-300 rounded-xl border object-cover" />
      <h2 class="text-xl text-slate-900 font-semibold">{{ title }}</h2>
      <p class="text-sm text-slate-500">{{ description }}</p>
    </NuxtLink>
  </article>
</template>