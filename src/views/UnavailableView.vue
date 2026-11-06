<template>
  <div class="container flex-col">
    <!-- background svg -->
    <section class="flex-col">
      <h1 data-aos="fade-down">{{ text.title }}</h1>
      <img src="@/assets/svg/taken.svg" alt="" />
      <p data-aos="fade-left">
        {{ text.description }} <br /><br />
        {{ text.contactInfo }}
      </p>
      <router-link to="/" class="exit">{{ text.exit }}</router-link>
    </section>
  </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();

const text = store.state.txt[store.state.lang].deadLink;
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background: linear-gradient(to bottom, $cream, $rose);
}
section {
  width: 90%;
  max-width: 700px;
  min-height: 50vh;
  padding: 3rem 0;
  gap: 1.5rem;
  color: $ink;
  text-align: center;
}

h1 {
  margin: 0;
  font-family: $font-display;
  font-size: clamp(1.6rem, 5vw, 2.4rem);
}

img {
  width: 80%;
  max-width: 460px;
  max-height: 45vh;
}

p {
  margin: 0;
  padding: 1.5rem;
  font-size: 1.05rem;
  line-height: 1.6;
  text-align: start;
  @include glass(0.35);
}

.exit {
  @include button(solid);
}
</style>
