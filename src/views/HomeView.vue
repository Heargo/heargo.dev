<template>
  <div class="container">
    <!-- background svg -->
    <img
      class="side"
      src="@/assets/svg/side.svg"
      alt="top"
      :style="'width:' + (80 + (this.$store.state.click_count % 10)) + 'vw'"
    />

    <!-- easter egg -->
    <p v-if="parseInt(this.$store.state.score) <= 9" class="txt noselect">
      {{
        this.$store.state.txt[this.$store.state.lang].score[
          this.$store.state.score - 1
        ]
      }}
    </p>
    <p v-else class="txt noselect">
      {{
        this.$store.state.txt[this.$store.state.lang].score[
          this.$store.state.txt[this.$store.state.lang].score.length - 1
        ]
      }}
    </p>
    <div v-if="parseInt(this.$store.state.score) > 0" class="Number">
      <p class="num noselect">{{ parseInt(this.$store.state.score) }}</p>
    </div>

    <!-- Language Toggle -->
    <Toggle></Toggle>

    <!-- ExternalsLinks -->
    <ExternalsLinks></ExternalsLinks>

    <!-- Big button -->
    <div id="home">
      <ScrollParallax :speed="0.3">
        <div class="square parallax-one" @click="activate()"></div>
      </ScrollParallax>
      <ScrollParallax :speed="0.01">
        <h1 class="name move-text parallax-two noselect">Hugo Rey</h1>
      </ScrollParallax>
    </div>
    <div class="invisibleSpace"></div>
    <!-- Content -->
    <div class="data">
      <!-- Cv card -->
      <ContactCard id="cv"></ContactCard>
      <!-- Projects -->
      <div id="projets"></div>
      <div
        v-for="(p, i) in this.$store.state.projects"
        :key="p"
        :data-aos="'fade-' + (i % 2 == 0 ? 'left' : 'right')"
        class="projectHolder"
      >
        <Project :project="p" :side="i % 2 == 0 ? 'left' : 'right'"></Project>
      </div>
      <!-- Contact form -->
      <ContactForm id="contact"></ContactForm>
      <a class="scroll-up" @click="this.$store.dispatch('scrollToId', 'home')"
        >scroll up</a
      >
    </div>
  </div>
</template>

<script>
import Project from "@/components/ProjectPreview.vue";
import ContactCard from "@/components/ContactCard.vue";
import ContactForm from "@/components/ContactForm.vue";
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
import Toggle from "@/components/ToggleLanguage.vue";
import ExternalsLinks from "@/components/ExternalsLinks.vue";
import AOS from "aos";
export default {
  name: "HomeView",
  components: {
    ScrollParallax,
    Project,
    ContactCard,
    Toggle,
    ExternalsLinks,
    ContactForm,
  },
  mounted() {
    //get square
    var square = document.querySelector(".square");
    this.animate(square, "drop", 2000);
    AOS.refresh();
  },
  methods: {
    animate(element, animation, time) {
      //add class
      element.classList.add(animation);
      //wait for animation to finish
      setTimeout(function () {
        //remove class
        element.classList.remove(animation);
      }, time);
    },
    activate() {
      //get square
      var square = document.getElementsByClassName("square")[0];
      square.classList.remove("active");
      this.animate(square, "active", 150);
      this.$store.state.click_count++;
      if (this.$store.state.click_count % 10 == 0) {
        this.$store.state.score++;
      }
    },
    drop() {
      //get square
      var square = document.getElementsByClassName("square")[0];
      this.animate(square, "drop", 2000);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    $dark,
    $blue,
    $marron,
    $marronlight,
    $white
  ); /* Standard syntax */

  .invisibleSpace {
    height: 110vh;
  }
  .data,
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .card {
    justify-content: flex-start;
    height: 100vh;
  }
  .data {
    overflow: hidden;
    @include width-under(700px) {
      padding-bottom: 2rem;
    }
  }
  .square {
    position: absolute;
    top: calc(50vh - 175px);
    left: calc(50vw - 175px);
    width: 350px;
    height: 350px;

    cursor: pointer;
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

    &.active {
      animation: squareBtn 0.15s;
      @include width-under(500px) {
        animation: squareBtnSmall 0.15s;
      }
    }
    &.drop {
      animation: squareDropBig 2s;
      @include width-under(500px) {
        animation: squareDropSmall 2s;
      }
    }
  }

  .name {
    font-family: "BioRhyme", sans-serif;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1rem;
    font-size: 2.5rem;
    margin: 0;
    padding: 0;

    position: absolute;
    top: calc(50vh - 25px);
    left: calc(50vw - 180px);
    color: $dark;

    animation: textDropBig 2.5s;
    @include width-under(500px) {
      animation: textDropSmall 2.5s;
    }

    @include width-under(500px) {
      font-size: 1.5rem;
      letter-spacing: 0.8rem;
      top: calc(50vh - 15px);
      left: calc(50vw - 120px);
    }
  }
}

@keyframes squareDropBig {
  from {
    top: -500px;
  }
  to {
    top: calc(50vh - 175px);
  }
}
@keyframes squareDropSmall {
  from {
    top: -500px;
  }
  to {
    top: calc(50vh - 100px);
  }
}

@keyframes textDropBig {
  from {
    top: -500px;
  }
  to {
    top: calc(50vh - 25px);
  }
}
@keyframes textDropSmall {
  from {
    top: -500px;
  }
  to {
    top: calc(50vh - 15px);
  }
}

@keyframes squareBtn {
  from {
    top: calc(50vh - 175px);
    box-shadow: 10px 10px 0px 0px $dark2;
  }
  to {
    top: calc(50vh - 165px);
    box-shadow: 0px 0px 0px 0px $dark2;
  }
}
@keyframes squareBtnSmall {
  from {
    top: calc(50vh - 100px);
    box-shadow: 10px 10px 0px 0px $dark2;
  }
  to {
    top: calc(50vh - 95px);
    box-shadow: 0px 0px 0px 0px $dark2;
  }
}
.side {
  position: fixed;
  top: 0;
  left: 0;
  width: 80vw;
  height: 100vh;
  opacity: 0.7;
  transition: all 0.2s ease;
}
.Number {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
  .num {
    font-size: 40vw;
    line-height: 40vw;
    font-family: "BioRhyme", sans-serif;
    text-transform: uppercase;
    text-align: center;
    color: $dark;
    opacity: 0.7;
    margin: 0;
  }
}
.txt {
  top: 1rem;
  right: 1rem;
  text-transform: uppercase;
  position: absolute;
  font-size: clamp(0.7rem, 1vw, 2rem);
  letter-spacing: 0.4rem;
  color: $dark;
  opacity: 0.7;
  margin: 0;
}

.projectHolder {
  height: 100vh;
  max-height: 500px;
  @include width-under(1000px) {
    height: fit-content;
  }
}

.scroll-up {
  z-index: 100;
  color: $dark;
  text-decoration: underline;
  margin-bottom: 1rem;
  cursor: pointer;
  @include width-under(700px) {
    margin-bottom: 50px;
  }
}
</style>
