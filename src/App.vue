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
    text-align: center;
}
</style>
