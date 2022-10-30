<script lang="ts" setup>
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
  </div>
</template>
