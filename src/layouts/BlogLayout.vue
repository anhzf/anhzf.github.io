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

  <teleport to="body">
    <amp-auto-ads
      v-pre
      type="adsense"
      data-ad-client="ca-pub-9429563065756061"
    />
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';
import MainLayout from 'src/layouts/MainLayout.vue';

interface frontmatterAttrs {
  title: string;
  meta: Record<string, string>[];
}

export default defineComponent({
  name: 'LayoutBlog',
  components: { MainLayout },
  setup() {
    useHead({
      script: [
        {
          async: true,
          src: 'https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js',
          'custom-element': 'amp-auto-ads',
        },
      ],
    });
  },
  computed: {
    frontmatter() {
      return this.$attrs.frontmatter as frontmatterAttrs;
    },
  },
});
</script>
