<template>
  <header class="header">
    <NetflixLogo />
    <section class="search-bar">
      <h1>FIND YOUR MOVIE</h1>
      <SearchBar secondary placeholder="search" />
      <NetflixButton primary size="large" @click="$emit('click')" label="search" />
      <MenuBar menuTitle="search by" btn1="title" btn2="genre" />
    </section>
  </header>
</template>

<style>
.header {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../assets/img/netflixlist.jpeg");
  background-size: cover;
  padding: 16px 36px;
}


.bold {
  font-weight: bold;
}

h1 {
  font-size: 64px;
  color: var(--color-white);
}

</style>

<script lang="ts">
import NetflixButton from '@/stories/TheButton.vue';
import SearchBar from '@/stories/SearchBar.vue';
import NetflixLogo from './NetflixLogo.vue';
import MenuBar from '@/stories/MenuBar.vue';

export default {
  components: {
    NetflixButton,
    SearchBar,
    NetflixLogo,
    MenuBar
  }
}
</script>