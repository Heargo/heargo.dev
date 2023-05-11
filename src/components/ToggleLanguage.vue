<template>
    <select class="">
        <option value="en" selected="$store.state.lang=='fr'" @click="switchLang('en')">EN</option>
        <option value="fr" selected="$store.state.lang=='en'" @click="switchLang('fr')">FR</option>
    </select>
</template>
<script>
export default {
    name: 'ToggleLanguage',
    mounted(){
        this.getLangFromBrowser();
    },
    methods:{
        switchLang(lang){
            this.$store.state.lang = lang;
        },
        getLangFromBrowser(){
            let lang = navigator.language || navigator.userLanguage;
            console.log('lang',lang)
            if(lang.includes("fr")){
                this.$store.state.lang = "fr";
            }else{
                this.$store.state.lang = "en";
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$padding:4px;
select{
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 60px;
    height: 30px;
    outline: none;
    border: none;
    background-color: hsla(0,0%,100%,.25);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: .5rem;
    padding:$padding;
    cursor: pointer;
    z-index: 100;

}
 
</style>