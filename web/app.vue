<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <teleport to="body">
      <amp-auto-ads type="adsense" :data-ad-client="$config.googleAdClient" />
    </teleport>
  </div>
</template>
