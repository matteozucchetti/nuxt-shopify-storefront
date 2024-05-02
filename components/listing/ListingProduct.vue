<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
defineEmits(["open"]);
</script>

<template>
  <div class="group relative cursor-pointer" @click="$emit('open', product.id)">
    <div class="aspect-w-16 aspect-h-10 overflow-hidden rounded-lg bg-gray-100">
      <img
        :src="product.image.src"
        :alt="product.image.title"
        class="object-cover object-center h-full lg:group-hover:scale-105 transform-gpu transition-transform duration-300 ease-in-out"
      />
      <div
        class="flex items-end p-4 opacity-0 lg:group-hover:opacity-100"
        aria-hidden="true"
      >
        <div
          class="hidden lg:block w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter"
        >
          View Product
        </div>
      </div>
    </div>
    <div
      class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"
    >
      <h3>
        <span aria-hidden="true" class="absolute inset-0"></span>
        {{ product.title }}
      </h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">{{ product.vendor }}</p>
    <p class="mt-1 text-xs text-gray-500">
      {{ product.tags }}
    </p>
  </div>
</template>
