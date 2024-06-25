<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';

const DEFAULT_QUERY: QueryBuilderParams = {
  sort: [{ 'title': 1 }],
};

defineProps({
  title: {
    type: String,
    required: false,
  },
  titleAs: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
    required: false,
    default: 'h1',
  },
  as: {
    type: String,
    default: 'section',
  },
  query: {
    type: Object as PropType<QueryBuilderParams>,
    default: () => ({}),
  },
  showNavToAll: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <component :is="as" class="container p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <component v-if="title" :is="titleAs" class="text-3xl font-bold md:col-span-2 lg:col-span-4">{{ title }}</component>

    <ContentList path="/blogs" :query="{ ...DEFAULT_QUERY, ...query }">
      <template v-slot="{ list }">
        <CardBlog v-for="el in list" :key="el._path" :path="el._path!" :title="el.title!" :cover-src="el.image"
          :description="el.description" />
      </template>

      <template #not-found>
        <p class="text-slate-500 md:col-span-2 lg:col-span-4">No blogs found.</p>
      </template>

    </ContentList>

    <NuxtLink v-if="showNavToAll" :to="{ name: 'blogs' }"
      class="group text-slate-700 hover:text-blue-500 font-medium flex gap-2 md:col-span-2 lg:col-span-4">
      <span>Lihat semua</span>
      <span class="group-hover:translate-x-1 transition-transform"> →</span>
    </NuxtLink>
  </component>
</template>