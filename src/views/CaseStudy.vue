<template>
    <div class="container">
        <h1>{{txt.title}}</h1>
        <img :src="imgUrl(project.photo)" alt="">
        <section data-aos="fade-left">
            <p>Balblalballba</p>
        </section>
        <section data-aos="fade-right">
            <p>Balblalballba</p>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { imgUrl } from '@/utils/assets'

const store = useStore();
const route = useRoute();

//get project Infos 
var project = store.state.projects[route.params.id];
var txt = ref(project[store.state.lang]);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    overflow-x: hidden;
    background: linear-gradient(to top, $ink, $indigo, $mauve, $rose, $cream);
}

section {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: $white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
}

p{
    margin:0;
    padding: 1rem 1.5rem;
    @include glass(0.15);
}

img{
    width: 80%;
    max-width: 800px;
    height: 50vh;
    object-fit: cover;
    object-position: center;
    margin-bottom: 2rem;
    border-radius: $radius-lg;
    box-shadow: $shadow-lift;
}
</style>
