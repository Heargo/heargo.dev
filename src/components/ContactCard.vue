<template>
    <div class="contactCard">
        <div class="infos">
            <h2>{{this.$store.state.txt[this.$store.state.lang].title}}</h2>
            <p>{{this.$store.state.txt[this.$store.state.lang].description}}</p>
            <div class="actions">
                <a :href="'/cv/CV_Hugo_Rey_'+this.$store.state.lang+'.pdf'" target="_blank" rel="noopener" class="cv-btn">CV</a>
                <a href="#contact" @click.prevent="scrollToContact()" class="contact-btn">{{this.$store.state.txt[this.$store.state.lang].contactMe}}</a>
            </div>
        </div>
        <img src="@/assets/svg/dev.svg" alt="">
    </div>
</template>
<script>
export default {
    name:"ContactCard",
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
    position: relative;
    width: 80vw;
    max-width: 700px;
    height: 600px;

    img {
        width: auto;
        max-width: 700px;
        transform: translateX(150px);
        filter: drop-shadow(0 20px 30px rgba($ink, 0.2));
        @include width-under(1000px) {
            display: none;
        }
    }

    .infos {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 100px;
        left: -100px;
        width: 500px;
        box-sizing: border-box;
        padding: 2rem;
        z-index: 10;
        @include glass(0.24);

        @include width-under(1000px) {
            width: 100%;
            left: 0;
            top: 160px;
            padding: 1.5rem;
        }

        h2,
        p {
            margin: 0;
            color: $ink;
            text-align: start;
        }
        h2 {
            font-family: $font-display;
            font-size: clamp(1.6rem, 4vw, 2.1rem);
            line-height: 1.15;
            margin-bottom: 0.75rem;
        }
        p {
            font-size: clamp(1.05rem, 2.2vw, 1.25rem);
            line-height: 1.5;
            margin-bottom: 1.5rem;
        }
        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
        }
        .cv-btn {
            @include button(ghost);
        }
        .contact-btn {
            @include button(solid);
        }
    }
}
</style>
