<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <teleport to="body">
      <amp-auto-ads v-pre type="adsense" data-ad-client="ca-pub-9429563065756061" />
    </teleport>
  </div>
</template>
