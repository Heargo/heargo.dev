<template >
    <div class="containerProject" :id="'containerProject-'+project[this.$store.state.lang].title">
        <div :class="{'infos':true,'left':side=='left','right':side=='right'}" >
            <h2 class="title">{{project[this.$store.state.lang].title}}</h2>
            <p class="date">{{project[this.$store.state.lang].date}}</p>
            <p class="description">{{project[this.$store.state.lang].description}}</p>
            <button>{{this.$store.state.txt[this.$store.state.lang]["discoverBtn"]}}</button>
            <div :class="{'gradient-background':true,'left':side=='left','right':side=='right'}"></div>
        </div>
        <div class="secondCard" :id="'secondCard-'+project[this.$store.state.lang].title">
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
    mounted(){
        var container = document.getElementById('containerProject-'+this.project[this.$store.state.lang].title),
        inner = document.getElementById('secondCard-'+this.project[this.$store.state.lang].title);

        //----------------------------------------------------

        var counter = 0;
        var refreshRate = 10;
        var isTimeToUpdate = function() {
            return counter++ % refreshRate === 0;
        };

        //----------------------------------------------------

        var onMouseEnterHandler = function(event) {
            update(event);
        };

        var onMouseLeaveHandler = function() {
            inner.style = "";
        };

        var onMouseMoveHandler = function(event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };

        //----------------------------------------------------

        var update = function(event) {
            
            var rect = event.target.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            updateTransformStyle(
            (y/ inner.offsetHeight /2 ).toFixed(2),
            (x / inner.offsetWidth /2 ).toFixed(2)
            );
           

        };

        var updateTransformStyle = function(x, y) {
            
            if(x < 0.15){
                x = Math.abs(x) + 0.25;
            }else{
                x=-x
            }
            if(y < 0.25){
                y = -y-0.15;
            }
            console.log(x,y)
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner.style.mozTranform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;

        };

        //--------------------------------------------------------

        container.onmousemove = onMouseMoveHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmouseenter = onMouseEnterHandler;
    }
}
</script>
<style lang="scss" scoped>
    .containerProject{
        position: relative;
        width: 100%;
        height:100%;
        max-height: 500px;
        perspective: 30px;
        margin:2rem 0;
    }
    $infosCardWidth: 500px;
    $infosCardHeight: 200px;
    
    .infos{
        @include width-under(1000px){
            position: initial;
        }
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        position:absolute;
        top:25%;
        width:80vw;
        max-width: $infosCardWidth;
        min-height: $infosCardHeight;
        color:$white;
        padding-bottom: 0.5rem;
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
        @include width-under(1000px){
            background-color: hsla(0,0%,100%,.15);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
        }
        @include width-over(1000px){
            $decalage:-50px;
            &.left{
                left: $decalage;
            }
            &.right{
                right: $decalage;
            }
        }
        @include width-over(1250px){
            $decalage:-200px;
            &.left{
                left: $decalage;
            }
            &.right{
                right: $decalage;
            }
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
            text-align: start;
        }
        .date{
            font-size: 1.2em;
            margin-bottom: 10px;
        }
        .description{
            font-size: 1em;
            margin-bottom: 10px;
            text-align: start;
            padding: .5rem;
            padding-left: 0;
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
        width: auto;
       
        backdrop-filter: blur(50px);
        border-radius: 20px;
        transition: transform 0.5s;
        -webkit-transition: transform 0.5s;
        // will-change: transform;

        @include width-under(1000px){
            display: none;
        }

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
            // height: 60vh;
            max-height: 400px;
            max-width: 80vw;
            opacity: 0.5;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            // will-change: transform;
        }
    }

    .gradient-background {
        @include width-under(1000px){
            display: none;
        }
        position:absolute;
        top:0;
        width:100%;
        max-width: $infosCardWidth;
        min-height: $infosCardHeight;

        border-radius: 20px;
        opacity: 0.9;
        transition: background-image 1.5s ease-in-out;
        background-image: url('~@/assets/img/blurry.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
        padding-bottom: .5rem;

        background-color: hsla(0,0%,100%,.15);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        z-index: -1;
    }
    @keyframes gradient-animation {
    0%{opacity: 0.8;}
    33%{opacity: 0.6;}
    66%{opacity: 0.7;}
    80%{opacity: 0.3;}
    }
</style>