<script lang="ts" setup>
const shareUrl = computed(() => globalThis.location?.href);
const { share } = useShare();
const onShareClick = () => {
  share({
    url: shareUrl.value,
  });
};

useHead({
  titleTemplate: '%s — anhzf blogs',
});
</script>

<template>
  <main class="flex flex-col gap-4 m-2 md:m-8 lg:mx-32 lg:my-16">
    <ContentDoc v-slot="{ doc }">
      <div class="w-full max-w-prose prose prose-slate text-xl bg-white py-4 shadow">
        <!-- Breadcrumbs -->
        <div
          class="text-base flex items-center flex-wrap gap-x-2 mb-8 px-4 md:px-8 [&>a]:(text-sm text-slate-300 no-underline) [&>a:hover]:(underline)">
          <NuxtLink :to="{ name: 'index' }">
            anhzf.dev
          </NuxtLink>

          <div class="i-eva:chevron-right-outline text-gray-400"></div>

          <NuxtLink :to="{ name: 'blogs' }">
            blogs
          </NuxtLink>

          <div class="i-eva:chevron-right-outline text-gray-400"></div>

          <NuxtLink :to="doc._path" class="!text-slate-500">
            {{ doc.title }}
          </NuxtLink>
        </div>

        <!-- Header. Title, Cover -->
        <section class="flex flex-col gap-2">
          <h1 class="px-4 md:px-8">{{ doc.title }}</h1>
          <img :src="doc.image" :alt="`Cover ${doc.title}`" :width="800" format="webp"
            class="aspect-16/9 w-full object-cover bg-slate-300" />
          <div class="px-4 md:px-8">
            <hr class="divider">
          </div>
        </section>

        <!-- Table of Contents -->
        <section class="px-4 md:px-8 text-base">
          <span class="text-slate-500">Table of Contents</span>
          <ul class="m-0">
            <li v-for="link of doc.body?.toc?.links" :key="link.id"
              :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
          <hr class="divider">
        </section>

        <ContentRenderer :value="doc" class="text-base [&>pre]:bg-slate-900 px-4 md:px-8" />

        <!-- Actions -->
        <section class="flex flex-col px-4 md:px-8 py-4">
          <hr class="divider">

          <div class="flex gap-4">
            <button
              class="text-base text-white flex items-center gap-1 px-4 py-2 bg-violet-500 hover:bg-violet-400 active:bg-violet-600 shadow-md rounded-md"
              @click="onShareClick">
              <div class="i-eva:share-outline w-4 h-4"></div>
              <span class="font-medium">Share this post</span>
            </button>
          </div>
        </section>
      </div>

      <GridBlog title="Related Blogs" title-as="h2"
        :query="{ limit: 5, where: [{ _id: { $ne: doc._id }, tags: { $containsAny: doc.tags } }] }" class="px-0" />
    </ContentDoc>
  </main>
</template>

<style lang="sass" scoped>
.divider
  @apply h-2px w-full border-0 bg-blue-300
</style>