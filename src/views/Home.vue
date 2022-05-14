<template>
  <div class="container">
    <img class="side" src="@/assets/svg/side.svg" alt="top" :style="'width:'+(80+this.$store.state.click_count%30)+'vw'">
    <p v-if="parseInt(this.$store.state.click_count/30)>0" class="Number">{{parseInt(this.$store.state.click_count/30)}}</p>
    <Toggle></Toggle>
    <div id="home">
      <ScrollParallax :speed="0.3">
        <div class="square parallax-one" @click="activate()"></div>
      </ScrollParallax>
      <ScrollParallax :speed="0.01">
        <h1 class="name move-text parallax-two">Hugo Rey</h1>
      </ScrollParallax>
    </div>
    <div class="invisibleSpace"></div>
    <div class="data">
      <ContactCard id="cv"></ContactCard>
      <div id="projets"></div>
      <div v-for="(p,i) in this.$store.state.projects" :key="p">
        <Project :project="p" :side="i%2==0 ? 'left' : 'right'"></Project>
      </div>
    </div>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'
import ContactCard from '@/components/ContactCard.vue'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
import Toggle from '@/components/Toggle.vue';

export default {
  name: 'Home',
  components: {
    ScrollParallax,
    Project,
    ContactCard,
    Toggle
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

  .container {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, $dark,$blue, $marron,$marronlight, $white); /* Standard syntax */
    
    .invisibleSpace{
      height: 110vh;
    }
    .data,.card{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .card{
      justify-content: flex-start;
      height: 100vh;
    }
    .square {
      position: absolute;
      top: calc(50vh - 175px);
      left: calc(50vw - 175px);
      width: 350px;
      height: 350px;
      
      cursor:pointer;
      box-shadow: 10px 10px 0px 0px $dark2;
      transform: rotate(45deg);
      border-radius: 20px;
      background: linear-gradient(to bottom, $white, $dark-red);

      @include width-under(500px) {
        top: calc(50vh - 100px);
        left: calc(50vw - 100px);
        width: 200px;
        height: 200px;
      }

      &.active{
        animation: squareBtn 0.15s;
        @include width-under(500px) {
        animation: squareBtnSmall 0.15s;
        }
      }
      &.drop{
        animation: squareDropBig 2s;
        @include width-under(500px) {
          animation: squareDropSmall 2s;
        }
      }
    }

    .name {
      font-family: 'BioRhyme', sans-serif;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 1rem;
      font-size: 2.5rem;
      margin: 0;
      padding: 0;
      
      position: absolute;
      top: calc(50vh - 25px);
      left: calc(50vw - 6.5ch);
      color:$dark;
      
      animation: textDropBig 2.5s;
      @include width-under(500px) {
        animation: textDropSmall 2.5s;
      }

      @include width-under(500px) {
        font-size: 1.5rem;
        letter-spacing: .8rem;
        top: calc(50vh - 15px);
        left: calc(50vw - 6.85ch);
      }
    }
  }

  @keyframes squareDropBig {
    from {top: -500px;}
    to { top: calc(50vh - 175px);}
  }
  @keyframes squareDropSmall {
    from {top: -500px;}
    to { top: calc(50vh - 100px);}
  }

  @keyframes textDropBig {
    from {top: -500px;}
    to {top: calc(50vh - 25px);}
  }
  @keyframes textDropSmall {
    from {top: -500px;}
    to {top: calc(50vh - 15px);}
  }

  @keyframes squareBtn {
    from {
      top:calc(50vh - 175px);
      box-shadow: 10px 10px 0px 0px $dark2;
    }
    to {
      top: calc(50vh - 165px);
      box-shadow: 0px 0px 0px 0px $dark2;
    }
  }
  @keyframes squareBtnSmall {
    from {
      top:calc(50vh - 100px);
      box-shadow: 10px 10px 0px 0px $dark2;
    }
    to {
      top: calc(50vh - 95px);
      box-shadow: 0px 0px 0px 0px $dark2;
    }
  }
  .side{
    position: fixed;
    top: 0;
    left:0;
    width: 80vw;
    height: 100vh;
    opacity: 0.7;
    transition: all 0.2s ease;
  }
  .Number{
    position: fixed;
    top: 0;
    right:0;
    font-size: 40vw;
    font-family: 'BioRhyme', sans-serif;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1.3rem;
    color:$dark;
    opacity: 0.7;
    margin: 0;
   }
</style>
