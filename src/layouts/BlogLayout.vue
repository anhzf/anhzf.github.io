<template>
  <MainLayout>
    <main class="relative w-full flex">
      <article class="w-prose mx-auto my-8 flex flex-col gap-y-4 px-2">
        <h1 class="font-bold text-4xl text-blue-gray-900">
          {{ frontmatter.title }}
        </h1>

        <hr class="h-0.5 bg-blue-200">

        <slot />
      </article>
    </main>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from 'src/layouts/MainLayout.vue';
import 'highlight.js/styles/stackoverflow-dark.css';

interface frontmatterAttrs {
  title: string;
  meta: Record<string, string>[];
}

export default defineComponent({
  name: 'LayoutBlog',
  components: { MainLayout },
  computed: {
    frontmatter() {
      return this.$attrs.frontmatter as frontmatterAttrs;
    },
  },
});
</script>
