<template>
  <footer class="app-footer">
    <NetflixLogo />
  </footer>
</template>

<style>
.app-footer {
  background-color: #555555;
  padding: 16px 32px;
  color: var(--color-pink);
  font-size: 32px;
  text-align: center;
}
</style>

<script lang="ts">
import NetflixLogo from './NetflixLogo.vue';
export default {
  components: {
    NetflixLogo
  }
}
</script>