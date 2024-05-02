<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
});

const { selected } = toRefs(props);

const badgeClasses = computed(() => {
  return {
    "inline-flex items-center gap-x-0.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors": true,
    "bg-indigo-600 hover:bg-indigo-600 text-white": selected.value,
  };
});

const svgClasses = computed(() => {
  return {
    "fill-gray-500": !selected.value,
    "stroke-white group-hover:stroke-white": selected.value,
  };
});
</script>

<template>
  <span :class="badgeClasses">
    {{ text }}
    <button
      type="button"
      class="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20 text-center"
    >
      <svg
        v-if="selected"
        viewBox="0 0 14 14"
        :class="svgClasses"
        aria-hidden="true"
      >
        <path d="M4 4l6 6m0-6l-6 6" />
      </svg>
      <svg v-else :class="svgClasses" viewBox="0 0 14 14" aria-hidden="true">
        <circle cx="7" cy="7" r="2" />
      </svg>
      <span class="absolute -inset-1"></span>
    </button>
  </span>
</template>
