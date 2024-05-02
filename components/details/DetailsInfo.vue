<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: [String, Number],
    required: true,
  },
});
</script>

<template>
  <div class="sm:flex sm:px-6 sm:py-5">
    <dt
      class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
    >
      {{ title }}
    </dt>
    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
      <p>
        {{ content || "-" }}
      </p>
    </dd>
  </div>
</template>
