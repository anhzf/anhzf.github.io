<template>
  <MainLayout>
    <main class="w-full">
      <article class="w-prose mx-auto my-8 flex flex-col gap-y-4 px-2">
        <h1 class="font-bold text-4xl text-blue-gray-900">
          {{ $attrs.frontmatter.title }}
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

export default defineComponent({
  name: 'LayoutBlog',
  components: { MainLayout },
});
</script>
