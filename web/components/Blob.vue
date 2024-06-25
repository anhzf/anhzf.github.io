<script lang="ts" setup>
import anime from 'animejs';

const createCssPropPropertyDescriptor = (el: HTMLElement, propName: string) => ({
  get() {
    return getComputedStyle(el).getPropertyValue(propName);
  },
  set(v) {
    el.style.setProperty(propName, v);
  },
} as PropertyDescriptor);

onMounted(() => {
  const blobs = Array.from(document.querySelectorAll<HTMLDivElement>('.blob'), (blob) => Object.defineProperties({}, {
    scaleX: createCssPropPropertyDescriptor(blob, '--un-scale-x'),
    scaleY: createCssPropPropertyDescriptor(blob, '--un-scale-y'),
  }));
  const blobContainer = Array.from(document.querySelectorAll<HTMLDivElement>('.blob__container'), (blob) => Object.defineProperties({}, {
    rotate: createCssPropPropertyDescriptor(blob, '--un-rotate'),
  }));

  anime({
    targets: blobs,
    scaleX: [1.3, 1, 1.3],
    scaleY: [1.3, 1, 1.3],
    loop: true,
    direction: 'alternate',
    autoplay: true,
    duration: 10_000,
    delay: anime.stagger(500),
  });
  anime({
    targets: blobContainer,
    rotate: '1turn',
    loop: true,
    direction: 'alternate',
    autoplay: true,
    duration: 20_000,
    delay: anime.stagger(500),
  });
});
</script>

<template>
  <div class="fixed -z-10 top-0 left-0 w-full h-screen">
    <div class="relative top-1/2 left-1/2 transform -translate-y-10">
      <div class="blob__container absolute transform">
        <div
          class="blob w-64 h-64 bg-yellow-300/30 rounded-full filter blur-xl transform -translate-x-1/2 -translate-y-[80%]" />
      </div>
      <div class="blob__container absolute transform">
        <div
          class="blob w-64 h-64 bg-blue-300/30 rounded-full filter blur-xl transform -translate-x-[80%] -translate-y-[20%]" />
      </div>
      <div class="blob__container absolute transform">
        <div
          class="blob w-64 h-64 bg-green-300/30 rounded-full filter blur-xl transform -translate-x-[20%] -translate-y-[20%]" />
      </div>
    </div>
  </div>
</template>
