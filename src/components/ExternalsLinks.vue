<template>
    <div class="linksList">
        <a :href="l.url" v-for="l in links" :key="l" target="_blank">
            <img :src="require(`@/assets/svg/${l.icon}`)" :alt="l.name">
        </a>
        <div class="verticalBar"></div>
    </div>
</template>
<script>
export default {
    name:"ExternalsLinks",
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
    .linksList{
        position: fixed;
        bottom: 0;
        left: 1rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        
        a{
            margin-bottom:1rem;
            img{
                margin:0;
                width:40px;
                height:40px;
                filter:brightness(0.8);
            }
            &:hover{
                img{
                    filter:brightness(1);
                }
            }
        }
        .verticalBar{
            width: 2px;
            height: 100px;
            background: $white;
            border-radius: 2px;
            filter:brightness(0.8);
        }
        @include width-under(700px){
            flex-direction:row-reverse;
            justify-content:space-around;
            align-items:center;
            margin-bottom: .5rem;
            .verticalBar{
                width: calc(100vw - 150px);
                height: 2px;
            }
            a{
                margin-bottom:0;
                margin-left: 1rem;
            }
        }
    }
</style>