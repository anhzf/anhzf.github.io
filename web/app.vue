<script lang="ts" setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import type LocomotiveScroll from 'locomotive-scroll';

const nuxtApp = useNuxtApp();

let scroll: LocomotiveScroll;

const onNuxtPageMounted = () => {
  initializeScroll();
};

nuxtApp.hook('page:finish', () => {
  scroll?.update();
});

async function initializeScroll() {
  console.log('initializing scroll fx...');
  const { default: LocomotiveScroll } = await import('locomotive-scroll');

  scroll ??= import.meta.hot?.data.scroll ?? new LocomotiveScroll({
    el: window.document.getElementById('__nuxt')!,
    smooth: true,
  });

  if (import.meta.hot) {
    import.meta.hot.data.scroll = scroll;
  }
}

if (import.meta.hot) {
  import.meta.hot.on('vite:afterUpdate', ({ type, updates }) => {
    console.table(updates);
    if (type === 'update'
      && updates.some((update) => update.acceptedPath === '/app.vue'
        // if there are updates to pages
        || /^\/(pages)|(components)\/.+\.vue$/.test(update.acceptedPath))) {
      (scroll ?? import.meta.hot?.data.scroll).update();
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
