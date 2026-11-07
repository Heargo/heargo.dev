<template>
    <div class="lang-switch" role="group" aria-label="Language">
        <button
            v-for="lang in langs"
            :key="lang"
            type="button"
            :class="{ active: $store.state.lang === lang }"
            :aria-pressed="$store.state.lang === lang"
            @click="switchLang(lang)"
        >
            {{ lang.toUpperCase() }}
        </button>
    </div>
</template>
<script>
export default {
    name: 'ToggleLanguage',
    data() {
        return { langs: ['fr', 'en'] };
    },
    mounted(){
        this.getLangFromBrowser();
    },
    methods:{
        switchLang(lang){
            this.$store.state.lang = lang;
        },
        getLangFromBrowser(){
            let lang = navigator.language || navigator.userLanguage;
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
.lang-switch {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 100;
    display: flex;
    padding: 4px;
    gap: 2px;
    @include glass(0.25);
    border-radius: $radius-pill;

    button {
        border: none;
        background: transparent;
        color: $ink;
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0.08em;
        padding: 0.4rem 0.75rem;
        border-radius: $radius-pill;
        cursor: pointer;
        transition: background-color 0.3s $ease-out, color 0.3s $ease-out;
        @include focus-ring;

        &:hover:not(.active) {
            background: rgba(255, 255, 255, 0.45);
        }
        &.active {
            background: $ink;
            color: $cream;
        }
    }
}
</style>
