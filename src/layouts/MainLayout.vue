<template>
  <nav>
    <MegaMenu />
  </nav>

  <slot>
    <router-view />
  </slot>

  <ClientOnly>
    <Blob />
  </ClientOnly>

  <Footer />

  <CursorFollower v-if="!isMobile" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MegaMenu from 'components/MegaMenu.vue';
import Footer from 'components/Footer.vue';
import CursorFollower from 'components/CursorFollower';
import Blob from 'components/Blob.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    CursorFollower, MegaMenu, Blob, Footer,
  },
  setup() {
    const isMobile = import.meta.env.SSR
      ? false
      : /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    return {
      isMobile,
    };
  },
});
</script>
