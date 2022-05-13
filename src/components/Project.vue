<template >
    <div>
        <div class="gradient-background">
            {{side}}
            <h2 class="title">{{project[this.$store.state.lang].title}}</h2>
            <p class="date">{{project[this.$store.state.lang].date}}</p>
            <p class="description">{{project[this.$store.state.lang].description}}</p>
            <button>{{this.$store.state.txt[this.$store.state.lang]["discoverBtn"]}}</button>
        </div>
        <img src="@/assets/img/" :alt="project[this.$store.state.lang].title">
    </div>
</template>
<script>
export default {
    name: 'Project',
    props: ['project', 'side'],
}
</script>
<style lang="scss" scoped>
    .gradient-background {
        width: 300px;
        height: 300px;

        border-radius: 20px;

        transition: background-image 1.5s ease-in-out;
        background-image: url('~@/assets/img/blurry.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;

        background-color: hsla(0,0%,100%,.15);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        &:hover{
            background-image: url('~@/assets/img/gradient.jpg');
            animation: gradient-animation 20s ease alternate-reverse infinite;
        }
        
    }

    @keyframes gradient-animation {
    0% {
        opacity: 0;
    }
    2%{
        opacity: 0.5;
    }
    10%,45%,100% {
        opacity: 0.8;
    }
    30%, 60%, 80% {
        opacity: 0.2;
    }
    }
</style>