<template>
  <footer class="p-8 bg-purple-400 flex flex-col-reverse md:flex-row justify-between items-center">
    <router-link
      to="/"
      class="hover:underline text-sm flex items-center"
    >
      anhzf.dev
    </router-link>

    <span class="text-blue-50 text-center">Copyright © 2022 All rights reserved</span>

    <div class="text-sm">
      <slot name="right" />
    </div>
  </footer>
</template>
