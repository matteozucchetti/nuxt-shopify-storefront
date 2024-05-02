<script setup>
const collectionState = useState("collection");
const configState = useState("config");
const products = ref([]);
const productDetails = ref(null);

async function fetchProducts(collection_id) {
  products.value = [];
  const data = await $fetch(
    `https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/${collection_id}/products.json`
  );
  products.value = data.products;
  configState.value.tags = [];
  configState.value.currentPage = 1;
  configState.value.totalPages = Math.ceil(
    products.value.length / configState.value.perPage
  );
}

watch(
  collectionState,
  () => {
    fetchProducts(collectionState.value.collection_id);
  },
  { immediate: true }
);

const productsTags = computed(() => {
  return useProductsTags(products.value);
});

const filteredProducts = computed(() => {
  return useTagFilter(products.value, configState.value.tags);
  // other filters...
});

const sortedProducts = computed(() => {
  return useAlphabeticalSort(filteredProducts.value, configState.value.sort);
  // other sorts...
});

const paginatedProducts = computed(() => {
  return usePagination(
    sortedProducts.value,
    configState.value.currentPage,
    configState.value.perPage
  );
});

watch(sortedProducts, () => {
  configState.value.currentPage = 1;
});

watch(filteredProducts, () => {
  configState.value.totalPages = Math.ceil(
    filteredProducts.value.length / configState.value.perPage
  );
});
</script>

<template>
  <div>
    <ProductDetails ref="productDetails" />
    <h2 class="text-2xl font-bold text-gray-900">
      {{ collectionState.title }}
    </h2>
    <div v-if="products.length > 0">
      <ListingTags :tags="productsTags" />
      <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ListingProduct
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
          @open="(product_id) => productDetails.openProductDetails(product_id)"
        />
      </div>
      <ListingPagination />
    </div>
    <BaseLoader v-else />
  </div>
</template>
