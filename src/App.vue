<template>
<div>
  <!-- <Nav/> -->
  <router-view/>
</div>
</template>


<script setup>
import AOS from 'aos';

AOS.init();
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
