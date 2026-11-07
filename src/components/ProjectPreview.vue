<template>
  <article class="containerProject" ref="containerProject">
    <div :class="{ infos: true, left: side == 'left', right: side == 'right' }">
      <img
        class="photo-mobile"
        :src="imgUrl(project.photo)"
        alt=""
        loading="lazy"
      />
      <h2 class="title">{{ project[this.$store.state.lang].title }}</h2>
      <p class="date">{{ project[this.$store.state.lang].date }}</p>
      <p class="description">
        {{ project[this.$store.state.lang].description }}
      </p>
      <ul class="labels-mobile">
        <li v-for="l in project[this.$store.state.lang].labels" :key="l">{{ l }}</li>
      </ul>
      <button type="button" @click="redirect(project.link)">
        {{ this.$store.state.txt[this.$store.state.lang]["discoverBtn"] }}
      </button>
      <div
        :class="{
          'gradient-background': true,
          left: side == 'left',
          right: side == 'right',
        }"
      ></div>
    </div>
    <div class="secondCard" ref="secondCard">
      <ul class="labels">
        <li v-for="l in project[this.$store.state.lang].labels" :key="l">
          {{ l }}
        </li>
      </ul>
      <img
        class="photo"
        :src="imgUrl(project.photo)"
        :alt="project[this.$store.state.lang].title"
        loading="lazy"
      />
    </div>
  </article>
</template>
<script>
import { imgUrl } from "@/utils/assets";

export default {
  name: "ProjectPreview",
  props: ["project", "side"],
  mounted() {
    var container = this.$refs.containerProject;
    var inner = this.$refs.secondCard;

    //----------------------------------------------------

    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function () {
      return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    var onMouseEnterHandler = function (event) {
      update(event);
    };

    var onMouseLeaveHandler = function () {
      inner.style = "";
    };

    var onMouseMoveHandler = function (event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //----------------------------------------------------

    var update = function (event) {
      var rect = event.target.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      updateTransformStyle(
        (y / inner.offsetHeight / 2).toFixed(2),
        (x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function (x, y) {
      if (x < 0.15) {
        x = Math.abs(x) + 0.25;
      } else {
        x = -x;
      }
      if (y < 0.25) {
        y = -y - 0.15;
      }
      // console.log(x,y)
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
  },
  methods: {
    imgUrl,
    redirect(link) {
      if (this.project.deadLink) {
        this.$router.push({ name: "Unavailable" });
      } else {
        window.open(link, "_blank");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$infosCardWidth: 500px;
$infosCardHeight: 200px;

.containerProject {
  position: relative;
  width: 100%;
  max-height: 500px;
  perspective: 30px;
  margin: 2rem 0;
  @include width-under(1000px) {
    max-height: none;
    perspective: none;
    margin: 1rem 0;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

// Tech labels: small dark chips.
@mixin chip {
  background-color: rgba($ink, 0.82);
  color: $cream;
  padding: 0.35rem 0.75rem;
  border-radius: $radius-pill;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.infos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 25%;
  width: 80vw;
  max-width: $infosCardWidth;
  min-height: $infosCardHeight;
  box-sizing: border-box;
  padding: 1.75rem;
  color: $ink;
  border-radius: $radius-lg;
  z-index: 20;
  transition: transform 0.4s $ease-out;

  &:hover {
    transform: translateY(-4px);
    .gradient-background {
      opacity: 1;
      box-shadow: $shadow-lift, inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }
  }

  @include width-over(1000px) {
    $decalage: -50px;
    &.left {
      left: $decalage;
    }
    &.right {
      right: $decalage;
    }
  }
  @include width-over(1250px) {
    $decalage: -200px;
    &.left {
      left: $decalage;
    }
    &.right {
      right: $decalage;
    }
  }

  // Phones and tablets: one self-contained card per project, in the flow.
  @include width-under(1000px) {
    position: relative;
    top: auto;
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    padding: 0.75rem 0.75rem 1.5rem;
    @include glass(0.22);
    &:hover {
      transform: none;
    }
    .title,
    .date,
    .description,
    .labels-mobile,
    button {
      margin-left: 0.75rem;
      margin-right: 0.75rem;
    }
  }

  * {
    margin: 0;
  }
  .title {
    font-family: $font-display;
    font-size: clamp(1.5rem, 3vw, 2rem);
    line-height: 1.15;
    text-align: start;
  }
  .date {
    display: inline-block;
    margin: 0.4rem 0 0.75rem;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: $raspberry;
  }
  .description {
    font-size: 1.02rem;
    line-height: 1.55;
    margin-bottom: 1.25rem;
    text-align: start;
  }
  button {
    @include button(solid);
  }
}

.photo-mobile,
.labels-mobile {
  display: none;
}
@include width-under(1000px) {
  .photo-mobile {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: top;
    border-radius: $radius-md;
    margin-bottom: 1.25rem !important;
  }
  .labels-mobile {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.25rem !important;
    li {
      @include chip;
    }
  }
}

.secondCard {
  width: auto;
  border-radius: $radius-lg;
  overflow: hidden;
  background: rgba($ink, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: $shadow-soft;
  transition: transform 0.5s $ease-out;

  @include width-under(1000px) {
    display: none;
  }

  .labels {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem 1rem;
    background-color: rgba(255, 255, 255, 0.18);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    li {
      @include chip;
    }
  }
  // Fixed frame so every card is the same size whatever the screenshot's ratio.
  .photo {
    display: block;
    margin: 0;
    padding: 0;
    width: min(820px, 80vw);
    aspect-ratio: 2.05;
    object-fit: cover;
    object-position: top;
    opacity: 0.65;
    transition: opacity 0.4s ease;
  }
  // Full-strength screenshot when hovering it or its info card (the sibling before it).
  &:hover .photo,
  .infos:hover ~ & .photo {
    opacity: 1;
  }
}

.gradient-background {
  @include width-under(1000px) {
    display: none;
  }
  position: absolute;
  inset: 0;
  opacity: 0.92;
  transition: opacity 0.4s ease, box-shadow 0.4s ease;
  @include glass(0.3);
  z-index: -1;
}
</style>
