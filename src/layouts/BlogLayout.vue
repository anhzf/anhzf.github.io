<template>
  <MegaMenu />
  <main class="w-full">
    <article class="w-prose mx-auto my-8 flex flex-col gap-y-4 px-2">
      <h1 class="font-bold text-4xl text-blue-gray-900">
        {{ $attrs.frontmatter.title }}
      </h1>

      <hr class="h-0.5 bg-blue-200">

      <slot />
    </article>
  </main>
</template>

<script lang="ts">
import MegaMenu from 'components/MegaMenu.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutBlog',
  components: { MegaMenu },
});
</script>
