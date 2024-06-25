<script lang="ts" setup>
const theMenu = ref(null);
// auto open menu when screen is large
const isLargeScreen = useMediaQuery('(min-width: 1280px)');
const isOpen = ref(isLargeScreen.value);

onClickOutside(theMenu, () => {
  isOpen.value = false;
});
</script>

<template>
  <div class="fixed z-50 top-0 right-0 ">
    <div class="m-6">
      <button aria-label="Open Menu"
        class="flex p-2 bg-teal-300/50 hover:bg-amber-300/50 justify-center items-center rounded-full transition-colors"
        @click="isOpen = !isOpen">
        <div class="i-eva:menu-2-outline cursor-pointer w-12 h-12 text-slate-900" />
      </button>
    </div>

    <Transition class="absolute right-0 top-0 transition-transform duration-500" enter-from-class="translate-x-full"
      enter-to-class="translate-x-0" leave-active-class="translate-x-0" leave-to-class="translate-x-full">
      <nav v-if="isOpen" ref="theMenu"
        class="overflow-auto flex flex-col w-80 max-h-screen pb-32 bg-white shadow-xl shadow-indigo-400">
        <div class="self-end p-6">
          <button class="flex p-2 hover:bg-rose-100 justify-center items-center rounded-full" @click="isOpen = !isOpen">
            <div class="i-eva:close-outline cursor-pointer w-12 h-12 text-slate-900" />
          </button>
        </div>

        <ul class="flex flex-col gap-y-2">
          <li class="flex">
            <NuxtLink :to="{ name: 'projects' }" class="menu-item">
              <div class="i-eva:bulb-outline menu-item__icon" />
              <span>Projects</span>
            </NuxtLink>
          </li>

          <li class="flex">
            <a href="https://drive.google.com/file/d/1BNocju57scUMHLoShoUltefS7NrmCsO1/view?usp=sharing" target="_blank"
              class="menu-item">
              <div class="i-eva:attach-outline menu-item__icon" />
              <span>Resume</span>
            </a>
          </li>

          <li class="flex">
            <NuxtLink :href="{ name: 'blogs' }" class="menu-item">
              <div class="i-eva:book-open-outline menu-item__icon" />
              <span>Blogs</span>
            </NuxtLink>
          </li>

          <li class="flex">
            <NuxtLink :to="{ name: 'links' }" class="menu-item">
              <div class="i-eva:link-2-outline menu-item__icon" />
              <span>Links</span>
            </NuxtLink>
          </li>

          <li class="absolute bottom-6 inset-x-1/2 flex justify-center transform -translate-x-1/2">
            <NuxtLink :to="{ name: 'index' }"
              class="group p-4 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-full border-2 border-blue-200">
              <div class="i-eva:home-outline w-8 h-8 text-slate-300 group-hover:text-blue-500" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </div>
</template>

<style lang="sass" scoped>
.menu-item
  --at-apply: flex-grow flex pl-8 pr-8 py-6 bg-white font-semibold text-3xl text-gray-900 items-center gap-x-4

  &:hover
    --at-apply: bg-amber-50

  &__icon
    --at-apply: w-8 h-8 text-slate-500

  &:hover &__icon
    --at-apply: text-light-blue-500
</style>
