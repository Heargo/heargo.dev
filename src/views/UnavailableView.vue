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
  background-color: $white;
}
section {
  width: 90%;
  max-width: 700px;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $dark;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
}

img {
  width: 80%;
  max-width: 500px;
  max-height: 50vh;
}

p {
  margin: 0;
  padding: 1rem;
  background-color: hsla(0, 0%, 100%, 0.15);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  background-color: $marronlight;
  text-align: start;
  letter-spacing: 0.05rem;
}

.exit {
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: $dark;
  color: $white;
  transition: all 0.5s ease;
  border: $white solid 2px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: $white;
    color: $dark;
    border: $dark solid 2px;
  }
}
</style>
