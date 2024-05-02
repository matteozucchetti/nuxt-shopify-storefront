<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
const open = defineModel();
</script>

<template>
  <div
    class="h-24 bg-indigo-700 sm:h-20 lg:h-28 grid items-center justify-end pr-6"
  >
    <button
      type="button"
      class="relative rounded-md text-white hover:text-gray-200 focus:ring-2 focus:ring-indigo-500"
      @click="open = false"
    >
      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
</template>
