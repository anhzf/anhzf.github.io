import LocomotiveScroll from 'locomotive-scroll';

export default defineNuxtPlugin(async ({ vueApp, hook, _route }) => {
  const scrollFx = await initializeScroll();

  vueApp.$nuxt.$router.afterEach((to) => {
    scrollFx.update();
    scrollFx.scrollTo(to.hash || 0);
  });

  hook('page:finish', () => {
    scrollFx.update();
    scrollFx.scrollTo(_route.hash || 0);
  });

  async function initializeScroll() {
    return new LocomotiveScroll({
      el: window.document.getElementById('__nuxt')!,
      smooth: true,
    });
  }

  if (import.meta.hot) {
    import.meta.hot.on('vite:afterUpdate', ({ type }) => {
      if (type === 'update') {
        scrollFx.update();
      }
    });
  }

});