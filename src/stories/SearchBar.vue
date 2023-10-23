<template>
  <input v-model="searchText" type="text" :class="classes" :placeholder="placeholder" />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useSearch } from '../components/composables';
import './search-bar.css';

const searchText = ref(props.search)

// const { searchText } = useSearch();

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