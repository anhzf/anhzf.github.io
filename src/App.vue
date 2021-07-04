<template>
  <router-view />

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

export default defineComponent({
  name: 'App',
  setup() {
    useHead({
      script: [
        {
          async: true,
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          'data-ad-client': import.meta.env.VITE_GOOGLE_DATA_AD_CLIENT,
        },
        {
          async: true,
          src: 'https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js',
          'custom-element': 'amp-auto-ads',
        },
      ],
    });
  },
});
</script>

<style lang="sass">
body
  @apply overflow-x-hidden bg-blue-50

*::selection
  @apply bg-light-blue-400/40
</style>
