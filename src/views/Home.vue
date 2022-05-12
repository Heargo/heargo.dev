<template>
  <div class="container">

    <ScrollParallax speed="0.3">
      <div class="square parallax-one" @click="activate()"></div>
    </ScrollParallax>
    <ScrollParallax speed="0.01">
      <h1 class="name move-text parallax-two">Hugo Rey</h1>
    </ScrollParallax>
    <div class="invisibleSpace"></div>
    <div class="invisibleSpace"></div>
    <Project></Project>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
export default {
  name: 'Home',
  components: {
    ScrollParallax,
    Project
  },
  mounted(){
    //get square 
    var square = document.querySelector('.square');
    this.animate(square,"drop",2000)
  },
  methods:{
    animate(element,animation,time){
      //add class
      element.classList.add(animation);
      //wait for animation to finish
      setTimeout(function(){
        //remove class
        element.classList.remove(animation);
      }, time);
    },
    activate(){
      //get square
      var square = document.getElementsByClassName("square")[0];
      square.classList.remove("active");
      this.animate(square,"active",150);
      this.$store.state.click_count++;
    },
    drop(){
      //get square
      var square = document.getElementsByClassName("square")[0];
      this.animate(square,"drop",2000);
    }
  }
}
</script>
<style lang="scss" scoped>
  body {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 100%;
    height: 400vh;
    background: red;
    background: linear-gradient(to top, $dark,$blue, $marron,$marronlight, $white); /* Standard syntax */
    .invisibleSpace{
      height: 100vh;
    }
    .square {
      position: absolute;
      top: 250px;
      left: calc(50vw - 200px);
      width: 350px;
      height: 350px;
      
      cursor:pointer;
      box-shadow: 10px 10px 0px 0px $dark2;
      transform: rotate(45deg);
      border-radius: 20px;
      background: linear-gradient(to bottom, $white, $dark-red);

      @include width-under(500px) {
        left: calc(50vw - 100px);
        width: 200px;
        height: 200px;
      }

      &.active{
         animation: squareBtn 0.15s;
      }
      &.drop{
        animation: squareMove 2s;
      }
    }

    .name {
      font-family: 'Sarpanch', sans-serif;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 1.3rem;
      font-size: 2.5rem;
      margin: 0;
      padding: 0;
      
      position: absolute;
      top: 402px;
      left: calc(50vw - 7.5ch);
      color:$dark;
      
      animation: textMove 2.5s;
    }
  }

  @keyframes squareMove {
    from {top: -500px;}
    to {top: 250px;}
  }

  @keyframes circleMove {
    from {top: -500px;}
    to {top: 300px;}
  }

  @keyframes textMove {
    from {top: -500px;}
    to {top: 402px;}
  }

  @keyframes squareBtn {
    from {
      top:250px;
      box-shadow: 10px 10px 0px 0px $dark2;
    }
    to {
      top: 260px;
      box-shadow: 0px 0px 0px 0px $dark2;
    }
  }
</style>
