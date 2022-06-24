<template>
  <button
    class="btn"
    @click="list.push(list.length + 1)"
  >
    Add Number
  </button>
  <button
    class="btn--alt"
    @click="list.pop()"
  >
    Remove Number
  </button>

  <ul v-if="list.length > 0">
    <li
      v-for="item of list"
      :key="item"
    >
      {{ item }}
    </li>
  </ul>
  <p v-else>
    List is empty.
  </p>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([1, 2, 3]);
</script>
