<template >
    <div class="containerProject">
        <div :class="{'infos':true,'left':side=='left','right':side=='right'}" >
            <h2 class="title">{{project[this.$store.state.lang].title}}</h2>
            <p class="date">{{project[this.$store.state.lang].date}}</p>
            <p class="description">{{project[this.$store.state.lang].description}}</p>
            <button>{{this.$store.state.txt[this.$store.state.lang]["discoverBtn"]}}</button>
            <div :class="{'gradient-background':true,'left':side=='left','right':side=='right'}"></div>
        </div>
        <div class="secondCard">
            <div class="labels">
                <p v-for="l in project[this.$store.state.lang].labels" :key="l">{{l}}</p>
            </div>
            <img class="photo" :src="require(`@/assets/img/${project.photo}`)" :alt="project[this.$store.state.lang].title">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Project',
    props: ['project', 'side'],
}
</script>
<style lang="scss" scoped>
    .containerProject{
        position: relative;
        width: 100%;
        height: 500px;
    }
    $infosCardWidth: 500px;
    $infosCardHeight: 200px;
    .infos{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        position:absolute;
        top:25%;
        width: $infosCardWidth;
        height: $infosCardHeight;
        color:$white;
        transition: background-color 1.5s ease-in-out;
        border-radius: 20px;
        z-index: 20;
        &:hover{
            .gradient-background{
                background-image: url('~@/assets/img/gradient.jpg');
                animation: gradient-animation 12s ease alternate-reverse infinite;
            }
            background-color: $dark;
        }
        $decalage:-200px;
        &.left{
            left: $decalage;
            
        }
        &.right{
            right: $decalage;
        }
        *{
            margin: 0;
        }
        .title, .date, .description, button{
            margin-left: 1.5rem;
        }
        .title{
            font-size: 2em;
            font-weight: bold;
            margin-top:1.5rem;
        }
        .date{
            font-size: 1.2em;
            margin-bottom: 10px;
        }
        .description{
            font-size: 1em;
            margin-bottom: 10px;
        }
        button{
            outline:none;
            border:none;
            width: 110px;
            background-color: $better-blue;
            color: $white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            transition: all .5s ease;
            &:hover{
                background-color: $white;
                color:$better-blue;
                width: 120px;
            }
        }
    }
    .secondCard{
        height: content;
       
        backdrop-filter: blur(50px);
        border-radius: 20px;
        .labels{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            background-color: hsla(0,0%,100%,.15);
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            padding: 0.2rem 1rem;
            p{
                background-color: $dark;
                color: $white;
                padding: .5rem;
                margin:5px;
                border-radius: 15px;
                font-size: .8rem;
            }
        }
        .photo{
            margin:0;
            padding:0;
            height: 60vh;
            max-height: 400px;
            opacity: 0.5;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
        }
    }

    .gradient-background {
        position:absolute;
        top:0;
        width: $infosCardWidth;
        height: $infosCardHeight;

        border-radius: 20px;

        transition: background-image 1.5s ease-in-out;
        background-image: url('~@/assets/img/blurry.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;

        background-color: hsla(0,0%,100%,.15);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        z-index: -1;
    }
    @keyframes gradient-animation {
    0%,33%{opacity: .8;}
    66%{opacity: 0.7;}
    }
</style>