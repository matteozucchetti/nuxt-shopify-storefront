<script setup>
const configState = useState("config");
defineProps({
  tags: { type: Array, required: true },
});
</script>

<template>
  <div class="flex flex-wrap my-6 gap-2">
    <BaseBadge
      v-for="tag in tags"
      :key="tag"
      :text="tag"
      :selected="configState.tags.includes(tag)"
      @click="
        configState.tags.includes(tag)
          ? (configState.tags = configState.tags.filter((t) => t !== tag))
          : configState.tags.push(tag)
      "
    />
  </div>
</template>
