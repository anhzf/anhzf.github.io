<script lang="ts" setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
const runtimeCfg = useRuntimeConfig();
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <teleport to="body">
      <amp-auto-ads type="adsense" :data-ad-client="runtimeCfg.googleAdClient" />
    </teleport>

    <VueQueryDevtools />
  </div>
</template>
