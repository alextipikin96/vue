<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFilter from './components/AppFilter.vue';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';
import BaseLayout from './components/BaseLayout.vue';
</script>

<template>
  <BaseLayout>
    <template v-slot:header>
      <AppHeader />
    </template>
    <template v-slot:main>
      <AppFilter />
      <AppBody />
    </template>
    <template v-slot:footer>
      <AppFooter />
    </template>
  </BaseLayout>
</template>
