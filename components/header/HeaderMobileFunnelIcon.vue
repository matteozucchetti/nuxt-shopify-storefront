<script setup>
import { FunnelIcon } from "@heroicons/vue/20/solid";

const mobileFiltersOpen = defineModel();
</script>

<template>
  <button
    type="button"
    class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
    @click="mobileFiltersOpen = true"
  >
    <FunnelIcon class="h-5 w-5" aria-hidden="true" />
  </button>
</template>
