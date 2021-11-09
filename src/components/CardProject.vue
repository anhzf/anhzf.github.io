<template>
  <article class="m-2 w-full max-w-xs bg-white rounded-2xl shadow shadow-blue-700 transition-shadow hover:(shadow-xl shadow-blue-700)">
    <div class="overflow-hidden h-44 rounded-t-[inherit]">
      <img
        :src="thumbnailSrc"
        :alt="title"
        class="object-cover w-full h-full"
      >
    </div>
    <div class="px-5 py-4">
      <h5
        class="font-bold text-indigo-400 line-clamp-1"
        :title="title"
      >
        {{ title }}
      </h5>

      <div class="pt-1 flex justify-between">
        <a
          :href="url"
          class="flex items-center flex-nowrap gap-x-1 text-blue-gray-300 transition-colors hover:text-blue-500"
        >
          <span>Visit site </span>
          <eva-icon
            name="external-link-outline"
            height="1rem"
            class="block"
          />
        </a>

        <div
          v-if="techStack.length"
          class="px-1 py-0.5 border-[0.2px] border-blue-gray-100 rounded-full flex items-center gap-1"
        >
          <img
            v-for="(stack, i) in techStack"
            :key="i"
            :src="stack"
            :alt="stack"
            class="w-3.5 h-3.5 p-[0.04rem] object-scale-down"
          >
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CardProject',
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: '#',
    },
    thumbnailSrc: {
      type: String,
      default: 'https://via.placeholder.com/300',
    },
    techStack: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
});
</script>
