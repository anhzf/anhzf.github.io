<template>
  <div class="fixed z-50 top-0 right-0 ">
    <div class="m-6">
      <button
        class="flex p-2 bg-teal-300/50 hover:bg-amber-300/50 justify-center items-center rounded-full transition-colors"
        @click="isOpen = !isOpen"
      >
        <eva-icon
          name="menu-2-outline"
          width="3rem"
          height="3rem"
          class="cursor-pointer text-blue-gray-900"
        />
      </button>
    </div>

    <transition
      class="absolute right-0 top-0 animate__animated animate__faster"
      enter-active-class="animate__slideInRight"
      leave-active-class="animate__slideOutRight"
    >
      <div
        v-if="isOpen"
        ref="theMenu"
        class="overflow-auto flex flex-col w-80 max-h-screen pb-32 bg-white gap-y-2 shadow-xl shadow-indigo-400"
      >
        <div class="self-end p-6">
          <button
            class="flex p-2 hover:bg-rose-100 justify-center items-center rounded-full"
            @click="isOpen = !isOpen"
          >
            <eva-icon
              name="close-outline"
              width="3rem"
              height="3rem"
              class="cursor-pointer text-blue-gray-900"
            />
          </button>
        </div>

        <router-link
          to="/"
          class="pl-10 pr-8 py-6 font-semibold text-3xl hover:bg-amber-50"
        >
          About
        </router-link>

        <router-link
          :to="{name: 'Links'}"
          class="pl-10 pr-8 py-6 font-semibold text-3xl hover:bg-amber-50"
        >
          Links
        </router-link>

        <router-link
          :to="{name: 'Index', hash: '#projects'}"
          class="pl-10 pr-8 py-6 font-semibold text-3xl hover:bg-amber-50"
        >
          Projects
        </router-link>

        <!-- <router-link
          to="/"
          class="pl-10 pr-8 py-6 font-semibold text-3xl hover:bg-amber-50"
        >
          Services
        </router-link> -->
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

export default defineComponent({
  name: 'MegaMenu',
  setup() {
    const theMenu = ref(null);
    const isOpen = ref(false);

    onClickOutside(theMenu, () => {
      isOpen.value = false;
    });

    return {
      isOpen,
      theMenu,
    };
  },
});
</script>
