<script setup>
const mobileFiltersOpen = defineModel();
const { data: collections } = await useFetch(
  `https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json`
);
const collectionState = useState("collection");
const setActiveCollection = (collection) => {
  mobileFiltersOpen.value = false;
  collectionState.value = collection;
};
</script>

<template>
  <form class="mt-4 border-t border-gray-200 lg:mt-0 lg:border-0">
    <ul
      role="list"
      class="px-2 py-3 font-medium lg:space-y-4 lg:border-b lg:border-gray-200 lg:pb-6 lg:text-sm"
    >
      <li
        v-for="collection in collections.collection_listings"
        :key="collection.collection_id"
      >
        <span
          class="block px-2 py-3 lg:px-1 lg:py-0 text-gray-900 hover:text-gray-500 cursor-pointer"
          :class="{
            'text-indigo-600':
              collectionState.collection_id === collection.collection_id,
          }"
          @click="setActiveCollection(collection)"
        >
          {{ collection.title }}
        </span>
      </li>
    </ul>
  </form>
</template>
