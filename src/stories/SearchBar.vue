<template>
  <input type="text" :class="classes" :placeholder="placeholder" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import './search-bar.css';
const props = defineProps<{
  placeholder: string,
  primary?: boolean
}>()

const classes = computed(() => ({
  'storybook-input': true,
  'storybook-input--primary': props.primary,
  'storybook-input--secondary': !props.primary,
}))
</script>