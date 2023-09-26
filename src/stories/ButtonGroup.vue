<template>
  <div class="storybook-button-group">
    <NetflixButton primary :label="firstBtnText" />
    <NetflixButton :label="secondBtnText" />
  </div>
</template>

<script lang="ts">
import NetflixButton from './TheButton.vue'
import './button-group.css';

export default {
  components: {
    NetflixButton,
  },
  props: {
    firstBtnText: {
      type: String,
      default: 'button1'
    },
    secondBtnText: {
      type: String,
      default: 'button2'
    }
  }
}
</script>
