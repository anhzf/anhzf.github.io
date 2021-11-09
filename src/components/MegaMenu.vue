<template>
  <div class="fixed z-50 top-0 right-0 ">
    <div class="m-6">
      <button
        class="flex p-2 bg-teal-300/50 hover:bg-amber-300/50 justify-center items-center rounded-full transition-colors"
        @click="isOpen = !isOpen"
      >
        <eva-icon
          name="menu-2-outline"
          class="cursor-pointer w-12 h-12 text-blue-gray-900"
        />
      </button>
    </div>

    <transition
      class="absolute right-0 top-0 animate__animated animate__faster"
      enter-active-class="animate__slideInRight"
      leave-active-class="animate__slideOutRight"
    >
      <nav
        v-if="isOpen"
        ref="theMenu"
        class="overflow-auto flex flex-col w-80 max-h-screen pb-32 bg-white shadow-xl shadow-indigo-400"
      >
        <div class="self-end p-6">
          <button
            class="flex p-2 hover:bg-rose-100 justify-center items-center rounded-full"
            @click="isOpen = !isOpen"
          >
            <eva-icon
              name="close-outline"
              class="cursor-pointer w-12 h-12 text-blue-gray-900"
            />
          </button>
        </div>

        <ul class="flex flex-col gap-y-2">
          <li class="flex">
            <router-link
              to="/about"
              class="menu-item"
            >
              <eva-icon
                name="person-outline"
                class="menu-item__icon"
              />
              <span>About Me</span>
            </router-link>
          </li>

          <li class="flex">
            <router-link
              :to="{name: 'Links'}"
              class="menu-item"
            >
              <eva-icon
                name="link-2-outline"
                class="menu-item__icon"
              />
              <span>Links</span>
            </router-link>
          </li>

          <li class="flex">
            <router-link
              :to="{name: 'Index', hash: '#projects'}"
              class="menu-item"
            >
              <eva-icon
                name="bulb-outline"
                class="menu-item__icon"
              />
              <span>Projects</span>
            </router-link>
          </li>

          <li class="flex">
            <a
              href="https://drive.google.com/file/d/1BNocju57scUMHLoShoUltefS7NrmCsO1/view?usp=sharing"
              target="_blank"
              class="menu-item"
            >
              <eva-icon
                name="attach-outline"
                class="menu-item__icon"
              />
              <span>Resume</span>
            </a>
          </li>

          <li class="absolute bottom-6 inset-x-1/2 flex justify-center transform -translate-x-1/2">
            <router-link
              :to="{name: 'Index'}"
              class="group w-16 h-16 p-4 bg-white hover:bg-blue-gray-100 rounded-full"
            >
              <eva-icon
                name="home-outline"
                class="w-8 h-8 text-blue-gray-300 group-hover:text-blue-500"
              />
            </router-link>
          </li>

        <!-- <router-link
          to="/"
          class="pl-10 pr-8 py-6 font-semibold text-3xl hover:bg-amber-50"
        >
          Services
        </router-link> -->
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { onClickOutside, useMediaQuery } from '@vueuse/core';

export default defineComponent({
  name: 'MegaMenu',
  setup() {
    const theMenu = ref(null);
    // auto open menu when screen is large
    const isLargeScreen = useMediaQuery('(min-width: 1280px)');
    const isOpen = ref(isLargeScreen.value);

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

<style lang="sass">
.menu-item
  @apply flex-grow flex pl-8 pr-8 py-6 bg-white font-semibold text-3xl text-cool-gray-900 items-center gap-x-4

  &:hover
    @apply bg-amber-50

  &__icon
    @apply w-8 h-8 text-blue-gray-500

  &:hover &__icon
    @apply text-light-blue-500
</style>
