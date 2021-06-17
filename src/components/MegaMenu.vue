<template>
  <div class="fixed top-0 right-0 p-6">
    <button class="flex justify-center items-center">
      <eva-icon
        name="menu-2-outline"
        width="3rem"
        height="3rem"
        class="cursor-pointer text-blue-gray-900"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MegaMenu',
});
</script>
