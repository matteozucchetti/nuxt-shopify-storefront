<script setup>
const configState = useState("config");

const prevNextClasses =
  "inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600 disabled:pointer-events-none disabled:opacity-50";
</script>

<template>
  <nav
    aria-label="Pagination"
    class="mx-auto my-6 flex max-w-7xl justify-between text-sm font-medium text-gray-700"
  >
    <div class="min-w-0 flex-1">
      <button
        :class="prevNextClasses"
        :disabled="configState.currentPage === 1"
        @click="configState.currentPage--"
      >
        Previous
      </button>
    </div>
    <div class="hidden space-x-2 sm:flex">
      <button
        v-for="page in configState.totalPages"
        :key="page"
        :class="
          configState.currentPage === page
            ? 'inline-flex h-10 items-center rounded-md border border-indigo-600 bg-white px-4 ring-1 ring-indigo-600 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600'
            : 'inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600'
        "
        @click="configState.currentPage = page"
      >
        {{ page }}
      </button>
    </div>
    <div class="flex min-w-0 flex-1 justify-end">
      <button
        :class="prevNextClasses"
        :disabled="configState.currentPage === configState.totalPages"
        @click="configState.currentPage++"
      >
        Next
      </button>
    </div>
  </nav>
</template>
