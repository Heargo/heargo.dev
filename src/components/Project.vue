<template >
    <div class="gradient-background">
    </div>
</template>
<script>
export default {
    name: 'Project',
}
</script>
<style lang="scss" scoped>
    .gradient-background {
        width: 300px;
        height: 300px;
        
        opacity: 0.5;
        &:hover{
            background-image: url('~@/assets/img/gradient.jpg');
            background-position: 0 0;
            background-size: cover;
            background-repeat: no-repeat;
            animation: gradient-animation 10s ease alternate-reverse infinite;
        }
        background-color: $dark;
        transition: all 0.5s ease;
    }

    @keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
        opacity: 0.2;
    }
    50% {
        background-position: 100% 50%;
        opacity: 0.8;
    }
    100% {
        background-position: 0% 50%;
        opacity: 0.2;
    }
    }
</style>