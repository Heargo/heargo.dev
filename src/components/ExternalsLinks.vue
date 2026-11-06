<template>
    <nav class="linksList" aria-label="Social links">
        <a :href="l.url" v-for="l in links" :key="l.name" target="_blank" rel="noopener" :aria-label="l.name">
            <img :src="svgUrl(l.icon)" :alt="l.name">
        </a>
        <div class="verticalBar" aria-hidden="true"></div>
    </nav>
</template>
<script>
import { svgUrl } from "@/utils/assets";

export default {
    name:"ExternalsLinks",
    methods: { svgUrl },
    data(){
        return {
            links:[
                {
                    url:"https://github.com/Heargo",
                    icon:"github.svg",
                    name:"Github"
                },
                {
                    url:"https://www.linkedin.com/in/hugo-rey-46696b251/",
                    icon:"linkedin.svg",
                    name:"Linkedin"
                },
                {
                    url:"https://codepen.io/Heargo",
                    icon:"codepen.svg",
                    name:"Codepen"
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.linksList {
    position: fixed;
    bottom: 0;
    left: 1rem;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    a {
        display: grid;
        place-items: center;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        transition: transform 0.3s $ease-out, background-color 0.3s $ease-out;
        @include focus-ring;

        img {
            width: 26px;
            height: 26px;
            margin: 0;
            opacity: 0.85;
            transition: opacity 0.3s;
        }
        &:hover {
            transform: translateY(-3px);
            background: rgba(255, 255, 255, 0.18);
            img {
                opacity: 1;
            }
        }
    }

    .verticalBar {
        width: 2px;
        height: 100px;
        border-radius: 2px;
        background: linear-gradient(to top, transparent, rgba($cream, 0.8));
    }

    // Phones: a floating glass pill at the bottom instead of the side rail.
    @include width-under(700px) {
        left: 50%;
        bottom: 0.75rem;
        transform: translateX(-50%);
        flex-direction: row;
        gap: 0.25rem;
        padding: 0.25rem 0.5rem;
        @include glass(0.18);
        border-radius: $radius-pill;
        background: rgba($ink, 0.55);
        border-color: rgba(255, 255, 255, 0.18);

        a {
            width: 42px;
            height: 42px;
            img {
                width: 22px;
                height: 22px;
                opacity: 1;
            }
        }
        .verticalBar {
            display: none;
        }
    }
}
</style>
