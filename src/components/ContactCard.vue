<template>
    <div class="contactCard">
        <div class="infos">
            <h2>{{this.$store.state.txt[this.$store.state.lang].title}}</h2>
            <p>{{this.$store.state.txt[this.$store.state.lang].description}}</p>
            <div class="flex-row">
                <a :href="'../../cv/CV_Hugo_Rey_'+this.$store.state.lang+'.pdf'" target="_blank">CV</a>
                <a @click="scrollToContact()" class="contact-btn">Contact me</a>
            </div>
        </div>
        <img src="@/assets/svg/dev.svg" alt="">
    </div>
</template>
<script>
export default {
    name:"ContactCard",
    mounted(){
        
    },
    methods: {
        scrollToContact(){
            this.$store.dispatch('scrollToId','contact')
        }
    }
}
</script>
<style lang="scss" scoped>

.contactCard {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position:relative;
    width: 80vw;
    max-width: 700px;
    height: 600px;
    img{
        width: auto;
        max-width: 700px;
        transform: translateX(150px);
        @include width-under(1000px){
            display: none;
        }
    }
    .infos{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        position: absolute;
        top: 100px;
        left: -100px;
        width:500px ;
        @include width-under(1000px){
            width:95% ;
            left: -16px;
            top: 200px;
        }
        padding:1.5rem;
        border-radius: 20px;
        background-color: hsla(0,0%,100%,.25);
        backdrop-filter: blur(5px);
        z-index: 10;

        h2,p{
            margin: 0;
            color:$dark;
            text-align: start;
            
        }
        p{
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }
        h2{
            font-size: 2rem;
            margin-bottom: .4rem;
            font-family: 'BioRhyme', sans-serif;
        }
        div{
            gap: 1rem;
        }

        a{
            outline:none;
            border:none;
            text-decoration: none;
            width: 70px;
            background-color: $better-blue;
            color: $white;
            padding: 0.5rem;
            border-radius: 20px;
            transition: all .5s ease;
            text-align: center;
            font-size: 1.4rem;
            cursor: pointer;
            &:hover{
                background-color: $white;
                color:$better-blue;
                width: 100px;
            }
            &.contact-btn{
                width: 150px;

                &:hover{
                    width: 180px;
                }
            }
            
        }
    }
}
    
</style>