<template>
  <nav>
    <MegaMenu />
  </nav>

  <slot />

  <footer class="p-8 bg-purple-400 text-center">
    <span class="text-blue-50">Copyright © 2021 All rights reserved</span>
  </footer>

  <CursorFollower v-if="!isMobile" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MegaMenu from 'components/MegaMenu.vue';
import CursorFollower from 'components/CursorFollower';

export default defineComponent({
  name: 'MainLayout',
  components: { CursorFollower, MegaMenu },
  setup() {
    const isMobile = /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    return {
      isMobile,
    };
  },
});
</script>
