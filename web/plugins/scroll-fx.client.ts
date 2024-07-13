import LocomotiveScroll from 'locomotive-scroll';

export default defineNuxtPlugin(async ({ hook, _route }) => {
  const scrollFx = await initializeScroll();
  if (import.meta.dev === true) {
    (globalThis as any).scrollFx = scrollFx;
  }

  hook('page:loading:end', () => {
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