<script lang="ts" setup>
const { data, suspense } = useProjects();

onServerPrefetch(async () => {
  await suspense();
});
</script>

<template>
  <div data-scroll-section>
    <pre>{{ data }}</pre>
  </div>
</template>