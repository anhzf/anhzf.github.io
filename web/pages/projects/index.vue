<script lang="ts" setup>
const { data, suspense } = useProjects();

await suspense();
</script>

<template>
  <pre>{{ data }}</pre>
</template>