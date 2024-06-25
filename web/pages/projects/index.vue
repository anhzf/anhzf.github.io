<script lang="ts" setup>
const data = await queryContent('/projects').without('body').find();
</script>

<template>
  <pre>{{ data }}</pre>
</template>