<template>
  <a :href="url" class="group/cardLink relative w-full flex flex-row-reverse justify-center items-center"
    target="_blank">
    <div
      class="flex-shrink flex-grow relative mb-1 p-4 bg-purple-50 group-hover/cardLink:bg-purple-100 group-active/cardLink:bg-purple-200 rounded-r-xl shadow transition-colors duration-400">
      <span class="font-semibold text-indigo-400">{{ label }}</span>

      <div class="absolute -bottom-2.5 right-6 flex items-center gap-x-1">
        <div class="p-0.5 bg-slate-800 flex justify-center items-center rounded">
          <div class="i-eva:external-link-outline text-slate-200" width=".75rem" height=".75rem" />
        </div>
      </div>
    </div>

    <div
      class="flex-shrink-0 relative overflow-hidden w-28 h-28 bg-zinc-100 rounded-2xl shadow-lg group-hover/cardLink:shadow-xl group-active/cardLink:shadow-sm group-hover/cardLink:scale-110 group-active/cardLink:scale-90 transition-transform,box-shadow">
      <NuxtImg :src="thumbnailSrc" :alt="label" :width="200" class="object-cover w-full h-full" />
    </div>
  </a>
</template>

<script lang="ts" setup>
interface Props {
  label: string;
  url: string;
  thumbnailSrc?: string;
}

withDefaults(defineProps<Props>(), {
  thumbnailSrc: 'https://via.placeholder.com/100/f3f4f6?text=No%20image',
});
</script>
