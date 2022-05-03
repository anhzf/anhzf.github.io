<template>
  <div
    class="perspect-px overflow-x-hidden overflow-y-auto h-screen snap snap-y snap-proximity"
    @scroll="onScroll"
  >
    <main class="preserve-3d">
      <section class="snap-start relative flex flex-col w-full min-h-screen preserve-3d">
        <h1
          id="title"
          class="self-center relative font-black mb-[40vh] transform -translate-z-5px scale-600 animated animate-zoom-in"
        >
          <span class="block text-7xl tracking-tight">Selamat</span>
          <span class="block text-7xl tracking-tight">Idul Fitri</span>
          <span class="block text-8xl tracking-tight mt-2">1443H!</span>
        </h1>

        <div class="absolute -z-1 inset-0 transform -translate-z-px scale-200 animated animate-slide-in-up">
          <img
            src="src/img/blue-mosque-istanbul-removebg-preview.png"
            alt="mosque"
            class="w-full h-full object-cover object-bottom"
          >
          <div class="bg-gradient-to-b from-dark-900 via-dark-700/80 to-transparent h-40vh" />
        </div>

        <div class="absolute -z-1 inset-0 transform -translate-z-1.5px scale-250">
          <img
            src="src/img/ketupat__al-fitr_7635903__pngtree.png?width=600"
            alt="decoration"
            class="w-40"
          >
        </div>

        <div class="absolute -z-1 inset-0 transform -translate-z-3px scale-400">
          <img
            src="src/img/ketupat__al-fitr_7635903__pngtree.png?width=600"
            alt="decoration"
            class="absolute w-60 md:w-96 right-0"
          >
        </div>
      </section>

      <section
        id="message1"
        class="snap-start snap-always relative h-120vh -z-1"
      >
        <div
          ref="dontForgetTilawahSectionRef"
          class="absolute inset-0 flex justify-center items-center"
        >
          <blockquote
            v-if="isDontForgetTilawahSectionVisible"
            class="font-bold text-shadow-lg"
          >
            <span class="text-6xl md:text-8xl block animated animate-fade-in-up">Lebaran </span>
            <span class="text-4xl md:text-6xl block text-gray-300 animated animate-fade-in-up animate-delay-300">jangan lupa</span>
            <span class="text-4xl md:text-6xl block ml-20 animated animate-fade-in-up animate-delay-600">tetep <span class="text-yellow-500">Tilawah</span></span>
          </blockquote>
        </div>

        <div
          id="stars"
          class="absolute inset-0 preserve-3d -z-1"
        >
          <span class="star top-1/4">⭐</span>
          <span class="star left-1/2 top-4">⭐</span>
          <span class="star right-3 bottom-0">⭐</span>
          <span class="star bottom-0 left-1/10">⭐</span>
          <span class="star left-1/3 top-4/9">⭐</span>
          <span class="star right-1/4 bottom-32">⭐</span>
          <span class="star right-20 top-1/4">⭐</span>
        </div>
      </section>

      <section class="transform -translate-z-px scale-200">
        <div class="bg-gradient-to-t from-dark-900 via-dark-700/80 to-transparent h-60vh" />
        <blockquote class="bg-dark-900 w-full px-16 py-20vh text-4xl md:text-6xl text-center font-semibold">
          Semoga segala amal baik kita di bulan Ramadhan diterima oleh Allah SWT
        </blockquote>
      </section>
    </main>

    <div class="mt-50vh pt-50vh preserve-3d bg-dark-900 -z-1">
      <Footer>
        <template #right>
          Happy Ied 1443H
        </template>
      </Footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { useHead } from '@vueuse/head';
import anime from 'animejs';
import Footer from 'components/Footer.vue';

const ease = (x: number) => (x === 0 ? 0 : 2 ** (10 * x - 10));

useHead({
  title: 'Happy Ied Mubarak 1443H',
});

const dontForgetTilawahSectionRef = ref<HTMLElement | null>(null);
const isDontForgetTilawahSectionVisible = ref(false);

useIntersectionObserver(dontForgetTilawahSectionRef, ([{ isIntersecting }]) => {
  isDontForgetTilawahSectionVisible.value = isIntersecting;
});

let animateBg: anime.AnimeInstance;
let animateTitle: anime.AnimeInstance;
let animateStars: anime.AnimeInstance;

const onScroll = (e: UIEvent) => {
  const elm = e.currentTarget as HTMLElement;
  const scrollPercent = elm.scrollTop / (elm.scrollHeight - elm.clientHeight);

  animateBg.seek(ease(scrollPercent * 2) * animateBg.duration);
  animateTitle.seek((scrollPercent - 0.1) * animateTitle.duration);
  animateStars.seek(scrollPercent * animateStars.duration);
};

onMounted(() => {
  animateBg = anime({
    targets: 'body',
    backgroundColor: ['#134e4a', '#0f0f0f'],
    autoplay: false,
  });
  animateTitle = anime({
    targets: '#title span',
    opacity: [1, 0],
    autoplay: false,
  });
  animateStars = anime({
    targets: '#stars .star',
    rotate: () => anime.random(720, 1800),
    scale: () => anime.random(0.5, 3),
    autoplay: false,
    loop: true,
  });
});

onUnmounted(() => {
  anime.remove(['body', '#title span', '#stars .star']);
});
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Anybody:wght@100..900&display=swap')

*
  font-family: 'Anybody', cursive
  @apply text-white

body
  --from-bg: theme('colors.teal.900')
  --to-bg: theme('colors.dark.900')
  @apply bg-teal-900 bg-gradient-to-br from-white/15 via-dark-900/25 to-dark-900/20

.star
  @apply text-xl md:text-3xl inline-block absolute

#message1
  background-image: url('src/img/biel-morro-J_F_003jcEQ-unsplash.jpg?width=1280')
  @apply bg-cover
</style>
