import LocomotiveScroll from 'locomotive-scroll';

export default defineNuxtPlugin(async ({ hook, _route }) => {
  const suspenseFinished = new Promise<void>((resolve) => {
    const cleanUpHook = hook('app:suspense:resolve', () => {
      resolve();
      cleanUpHook();
    });
  });

  let scrollFx: LocomotiveScroll;

  hook('page:loading:end', () => {
    suspenseFinished.then(() => {
      scrollFx ??= initializeScroll();

      scrollFx.update();
      scrollFx.scrollTo(_route.hash || 0);
    });
  });

  function initializeScroll() {
    return new LocomotiveScroll({
      el: window.document.getElementById('__nuxt')!,
      smooth: true,
      tablet: { smooth: true } as any,
      smartphone: { smooth: true } as any,
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