<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const open = ref(false);
const product = ref(null);

async function openProductDetails(product_id) {
  product.value = null;
  open.value = true;
  const data = await $fetch(
    `https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/${product_id}.json`
  );
  product.value = data.product;
}

defineExpose({ openProductDetails });
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[1px]"
        ></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-2xl">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                >
                  <DetailsClose v-model="open" />
                  <div v-if="product">
                    <div class="-mt-12 px-4 sm:-mt-8 sm:px-6 lg:-mt-16">
                      <div
                        class="w-[75%] sm:w-[50%] overflow-hidden rounded-lg border-4 border-white bg-gray-100"
                      >
                        <img :src="product.image.src" :alt="product.title" />
                      </div>
                      <div class="mt-6">
                        <h3 class="text-xl font-bold text-gray-900 sm:text-2xl">
                          {{ product.title }}
                        </h3>
                        <DetailsPrice :product="product" />
                        <button
                          type="submit"
                          class="mt-4 flex max-w-[50%] flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div class="px-4 py-5 sm:px-0 sm:py-0">
                      <div
                        class="pb-4 sm:px-6 sm:py-4"
                        v-html="product.body_html"
                      ></div>
                      <dl
                        class="space-y-4 sm:space-y-0 sm:divide-y sm:divide-gray-200"
                      >
                        <DetailsInfo title="Tags" :content="product.tags" />
                        <DetailsInfo title="Vendor" :content="product.vendor" />
                        <DetailsInfo
                          title="Type"
                          :content="product.product_type"
                        />
                        <DetailsInfo
                          title="Inventory quantity"
                          :content="product.variants[0].inventory_quantity"
                        />
                      </dl>
                    </div>
                  </div>
                  <BaseLoader v-else />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
