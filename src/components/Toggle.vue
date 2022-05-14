<template>
    <div class="toggle noselect" @click="switchLang()">
       <img :src="require(`@/assets/svg/${this.$store.state.lang}.svg`)" alt="flag"  :class="{'en':this.$store.state.lang=='en','fr':this.$store.state.lang=='fr'}" >
    </div>
</template>
<script>
export default {
    name: 'Toggle',
    methods:{
        switchLang(){
            this.$store.state.lang = this.$store.state.lang=="en" ? "fr" : "en";
            
        }
    }
}
</script>
<style lang="scss" scoped>
$padding:4px;
.toggle{
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 60px;
    height: 30px;
    background-color: hsla(0,0%,100%,.25);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding:$padding;
    cursor: pointer;
    z-index: 1;
    img{
        position: absolute;
        top:$padding;
        &.en{
            left:$padding;
        }
        &.fr{
            left:30px+$padding;
            transform: rotate(360deg);
        }
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
        transition: all .2s ease-in-out;
    }
}
 
</style>