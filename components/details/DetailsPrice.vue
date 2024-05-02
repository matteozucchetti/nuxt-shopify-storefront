<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const { product } = toRefs(props);

const discountedPrice = computed(() => {
  return product.value.variants[0].price;
});

const originalPrice = computed(() => {
  return product.value.variants[0].compare_at_price;
});

const discountedPriceClasses = computed(() => {
  return {
    "text-lg font-bold text-gray-900 sm:text-xl": true,
  };
});
</script>

<template>
  <span
    v-if="originalPrice"
    class="pr-2 line-through font-normal text-gray-400"
  >
    € {{ originalPrice }}
  </span>
  <span :class="discountedPriceClasses">€ {{ discountedPrice }}</span>
</template>
