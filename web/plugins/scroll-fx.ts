export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.$nuxt.$router.afterEach((to) => {
    globalThis.scrollFx?.update();
    globalThis.scrollFx?.scrollTo(to.hash || 0);
  });
});