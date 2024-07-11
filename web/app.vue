<script lang="ts" setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import type LocomotiveScroll from 'locomotive-scroll';

declare global {
  var scrollFx: LocomotiveScroll;
}

const route = useRoute();
const nuxtApp = useNuxtApp();

const onNuxtPageMounted = () => {
  initializeScroll();
};

nuxtApp.hook('page:finish', () => {
  globalThis.scrollFx?.update();
  globalThis.scrollFx?.scrollTo(route.hash || 0);
});

async function initializeScroll() {
  const { default: LocomotiveScroll } = await import('locomotive-scroll');

  globalThis.scrollFx ??= new LocomotiveScroll({
    el: window.document.getElementById('__nuxt')!,
    smooth: true,
  });
}

if (import.meta.hot) {
  import.meta.hot.on('vite:afterUpdate', ({ type, updates }) => {
    console.table(updates);
    if (type === 'update'
      && updates.some((update) => update.acceptedPath === '/app.vue'
        // if there are updates to pages
        || /^\/(pages)|(components)\/.+\.vue$/.test(update.acceptedPath))) {
      globalThis.scrollFx.update();
    }
  });
}
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage @vue:mounted="onNuxtPageMounted" />
    </NuxtLayout>

    <teleport to="body">
      <amp-auto-ads type="adsense" :data-ad-client="$config.googleAdClient" />
    </teleport>

    <VueQueryDevtools />
  </div>
</template>
