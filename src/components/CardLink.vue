<template>
  <a
    :href="url"
    class="relative w-full flex flex-row-reverse justify-center items-center"
    target="_blank"
  >
    <div class="flex-shrink flex-grow relative mb-1 p-4 bg-purple-50 rounded-r-xl shadow">
      <span class="font-semibold text-indigo-400">{{ label }}</span>

      <div class="absolute -bottom-2.5 right-6 flex items-center gap-x-1">
        <!-- <div class="px-0.5 bg-blue-gray-800 flex justify-center items-center rounded">
          <small class="text-xs text-blue-gray-200">
            BLOG
          </small>
        </div> -->

        <div class="p-0.5 bg-blue-gray-800 flex justify-center items-center rounded">
          <eva-icon
            name="external-link"
            class="text-blue-gray-200"
            width=".75rem"
            height=".75rem"
          />
        </div>
      </div>
    </div>

    <div class="flex-shrink-0 relative overflow-hidden w-28 h-28 bg-gray-100 rounded-2xl shadow-lg">
      <img
        :src="thumbnailSrc"
        :alt="label"
        class="object-cover w-full h-full"
      >
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardLink',
  props: {
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    thumbnailSrc: {
      type: String,
      default: 'https://via.placeholder.com/100/f3f4f6?text=No%20image',
    },
  },
});
</script>
