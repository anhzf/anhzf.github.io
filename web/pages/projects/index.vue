<script lang="ts" setup>
const { data, prefetch } = useProjects();

await useAsyncData(prefetch);
</script>

<template>
  <div data-scroll-section>
    <pre>{{ data }}</pre>
  </div>
</template>