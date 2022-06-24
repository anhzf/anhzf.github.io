<template>
  <div class="flex flex-col gap-4">
    <div>
      <label
        for="first_name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Username
      </label>
      <input
        id="first_name"
        v-model="username"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required
      >
    </div>

    <div class="flex">
      <button
        class="btn flex-grow"
        @click="getRepos"
      >
        Submit
      </button>
      <button
        class="btn--alt"
        @click="data = []"
      >
        <carbon:close />
      </button>
    </div>

    <ul class="max-h-56 overflow-y-auto">
      <li
        v-for="el in data"
        :key="el"
      >
        {{ el }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import fetchRepos from '../utils/fetchGithubRepos';

const { get, data } = fetchRepos();
const username = ref('');
const getRepos = () => get(username.value);
</script>
