<template>
  <div class="filter-bar">
    <MenuBar menuTitle="filter by" btn1="release date" btn2="rating" />
  </div>
</template>

<script lang="ts">
import MenuBar from '@/stories/MenuBar.vue';

export default {
  components: {
    MenuBar
  }
}
</script>

<style>
.filter-bar {
  display: flex;
  justify-content: flex-end;
  background-color: #555555;
}
</style>