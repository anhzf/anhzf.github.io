<template>
  <main class="w-full max-w-prose prose text-xl mx-auto my-8 bg-white px-8 py-4 shadow">
    <content-doc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>

      <img :src="doc.image" :alt="`Cover ${doc.title}`" class="aspect-16/9 w-full object-cover">

      <section>
        <span class="text-slate-300">Table of Contents</span>
        <ul>
          <li v-for="link of doc.body.toc.links" :key="link.id"
            :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }">
            <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
          </li>
        </ul>
      </section>

      <content-renderer :value="doc" class="text-base [&>pre]:bg-slate-900" />
    </content-doc>
  </main>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '%s — anhzf blogs',
})
</script>