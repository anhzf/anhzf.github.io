<script lang="ts" setup>
const route = useRoute();
const { data: doc } = await useAsyncData('project', () => queryContent(route.path).findOne());
</script>

<template>
  <article class="max-w-prose">
    <h1>{{ doc.title }}</h1>
    <ContentRenderer :value="doc" />
  </article>
</template>