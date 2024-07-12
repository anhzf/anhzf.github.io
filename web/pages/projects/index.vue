<script lang="ts" setup>
import { parse } from 'valibot';
import { ProjectSchema } from '~/schemas/project';

const { data: projects } = await useAsyncData('projects', async () => {
  const result = await queryContent('/projects')
    .only(['title', 'desc', 'thumbnail', 'technologies', 'liveUrl', 'demoUrl', 'repositoryUrl', '_path'])
    .find();
  return result.map(el => parse(ProjectSchema, {
    ...el,
    path: el._path,
  }));
}, { default: () => [] });
</script>

<template>
  <div data-scroll-section>
    <pre>{{ projects }}</pre>
  </div>
</template>