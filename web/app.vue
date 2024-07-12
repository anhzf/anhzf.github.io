<script lang="ts" setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <teleport to="body">
      <amp-auto-ads type="adsense" :data-ad-client="$config.googleAdClient" />
    </teleport>

    <VueQueryDevtools />
  </div>
</template>
