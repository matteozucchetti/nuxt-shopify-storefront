<script setup>
// dummy splash screen (aesthetic only)
import { TransitionChild, TransitionRoot } from "@headlessui/vue";

const show = ref(true);
setTimeout(() => {
  show.value = false;
}, 1000);
</script>

<template>
  <TransitionRoot as="div" :show="show">
    <TransitionChild
      as="div"
      enter="transition-opacity ease-linear duration-150"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity ease-linear duration-150"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div
        ref="splash"
        class="fixed w-screen inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out"
      >
        <div class="absolute inset-0 flex items-center justify-center bg-white">
          <img
            class="w-20 h-20 animate-bounce"
            src="/logo.svg"
            alt="Nuxt Shopify Storefront logo"
          />
        </div>
      </div>
    </TransitionChild>
  </TransitionRoot>
</template>
