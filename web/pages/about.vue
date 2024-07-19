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

whenever(() => counter.value === gifs.length, () => {
  pause();
});
</script>

<template>
  <main>
    <h1>About</h1>
    <img :src="gifs[counter].src" :alt="gifs[counter].alt" />
  </main>
</template>