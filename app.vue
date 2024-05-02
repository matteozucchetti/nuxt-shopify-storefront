<script setup>
// set up the state for the collection data
const collectionState = useState("collection", () => null);
await callOnce(async () => {
  const data = await $fetch(
    `https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json`
  );
  collectionState.value = data.collection_listings[0];
});

// set up the state for the listing config data (sort, tags, pagination etc)
const configState = useState("config");
configState.value = {
  sort: "ASC",
  tags: [],
  currentPage: 1,
  perPage: 6,
  totalPages: null,
};

const mobileFiltersOpen = ref(false);

// SEO and meta tags
useSeoMeta({
  title: "Nuxt Shopify Storefront",
  ogTitle: "Nuxt Shopify Storefront",
  description:
    "A simple Nuxt 3 SPA that connects to Shopify sample REST APIs to display products and collections.",
  ogDescription:
    "A simple Nuxt 3 SPA that connects to Shopify sample REST APIs to display products and collections.",
});

useHead({
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
});
</script>

<template>
  <div class="bg-white">
    <BaseSplashScreen />
    <HeaderMobileDialog v-model="mobileFiltersOpen" />
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex items-baseline justify-between border-b border-gray-200 py-6"
      >
        <h1
          class="text-3xl font-bold tracking-tight text-gray-900 flex items-center"
        >
          <img
            class="w-10 mr-2"
            src="/logo.svg"
            alt="Nuxt Shopify Storefront logo"
          />
          <span>Nuxt Shopify Storefront</span>
        </h1>
        <div class="flex items-center">
          <ListingSorting />
          <HeaderMobileFunnelIcon v-model="mobileFiltersOpen" />
        </div>
      </div>
      <section class="py-6">
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <CollectionsListing class="hidden lg:block" />
          <div class="lg:col-span-3">
            <ProductsListing />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
// Customize the scrollbar styles for the body element
body::-webkit-scrollbar {
  width: 0.5em;
  background-color: #f1f1f1;
}

body::-webkit-scrollbar-thumb {
  background-color: #4f46e5;
}

// Prevent layout shift when the scrollbar appears (workaround)
body {
  width: calc(100vw - (100vw - 100%));
}
</style>
