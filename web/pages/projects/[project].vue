<script lang="ts" setup>
const route = useRoute();
const { data: doc } = await useAsyncData('project', () => queryContent(route.path).findOne());
if (!doc.value) throw createError({ statusCode: 404 });

const desc = doc.value.desc || doc.value.description
  || 'No description provided';
</script>

<template>
  <article data-scroll-section class="max-w-screen-xl mx-auto flex flex-col gap-8 px-2 py-8">
    <h1 class="text-3xl lg:text-5xl font-semibold">{{ doc!.title }}</h1>

    <p class="text-lg font-serif font-normal text-slate max-w-prose text-balance">
      {{ desc }}
    </p>

    <img :src="doc!.image ?? doc!.thumbnail" :alt="doc!.title" :width="800"
      class="w-full h-50vh object-cover rounded" />

    <ContentRenderer :value="doc!" class="prose lg:text-lg">
      <template #empty>
        <i class="">
          No details content provided.
        </i>
      </template>
    </ContentRenderer>
  </article>
</template>