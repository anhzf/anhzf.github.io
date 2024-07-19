<script lang="ts" setup>
const IMAGE_DURATION = 5000;
const { counter, pause } = useInterval(IMAGE_DURATION, { controls: true });

const gifs = [
  {
    src: 'https://media1.tenor.com/m/VFFJ8Ei3C2IAAAAd/rickroll-rick.gif',
    alt: 'Rick Rolled'
  },
  {
    src: 'https://media1.tenor.com/m/w0dZ4Eltk7IAAAAC/vuknok.gif',
    alt: 'Cat meme lol'
  },
  {
    src: 'https://media1.tenor.com/m/VjIzPb6ivXYAAAAC/please-cat.gif',
    alt: 'Cat meme apologize'
  },
  {
    src: 'https://media1.tenor.com/m/TKHlDdyNs9IAAAAd/kiss-kitty.gif',
    alt: 'Cat meme love you'
  },
];

whenever(() => counter.value === (gifs.length - 1), () => {
  pause();
}, { once: true });
</script>

<template>
  <main>
    <h1>About</h1>
    <TransitionGroup enter-from-class="opacity-0" enter-to-class="opacity-100" leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <template v-for="({ src, alt }, i) in gifs" :key="i">
        <img v-if="counter === i" :src="src" :alt="alt" class="transition duration-500" />
      </template>
    </TransitionGroup>
  </main>
</template>