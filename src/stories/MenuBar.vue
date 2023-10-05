<template>
  <div class="menu-bar">
    <h2>{{ menuTitle }}</h2>
    <ButtonGroup :firstBtnText="btn1" :secondBtnText="btn2" />
  </div>
</template>

<script lang="ts">
import ButtonGroup from './ButtonGroup.vue';

export default {
  components: {
    ButtonGroup
  },
  props: {
    menuTitle: {
      type: String
    },
    btn1: {
      type: String
    },
    btn2: {
      type: String
    }
  }
}
</script>

<style>
.menu-bar {
  padding: 16px 34px;
  display: flex;
  align-items: center;
}

.menu-bar * {
  text-transform: uppercase;
}

.menu-bar h2 {
  color: var(--color-white);
  margin-right: 12px;
}
</style>