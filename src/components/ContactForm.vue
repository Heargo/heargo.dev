<template>
    <form action="https://api.web3forms.com/submit" method="POST" class="flex-col">
        <h2>{{this.$store.state.txt[this.$store.state.lang].contactMe}}</h2>
        <input type="hidden" name="access_key" :value="contact_key">

        <label class="visually-hidden" for="contact-name">Name</label>
        <input id="contact-name" type="text" name="name" placeholder="Name" autocomplete="name" required>
        <label class="visually-hidden" for="contact-email">Email</label>
        <input id="contact-email" type="email" name="email" placeholder="Email" autocomplete="email" required>
        <label class="visually-hidden" for="contact-message">Message</label>
        <textarea id="contact-message" name="message" placeholder="Message" required></textarea>
        <input type="hidden" name="redirect" value="https://web3forms.com/success">

        <button type="submit">{{this.$store.state.txt[this.$store.state.lang].sendMessage}}</button>
    </form>
</template>
<script>

export default {
    name:"ContactForm",
    data() {
        return {
            contact_key: import.meta.env.VUE_APP_CONTACT_KEY
        }
    },
}

</script>
<style lang="scss" scoped>
form {
    box-sizing: border-box;
    // Same width as the project illustration cards (ProjectPreview .photo / mobile card).
    // (+2px for the illustration card's 1px border on each side)
    width: calc(min(820px, 80vw) + 2px);
    @include width-under(1000px) {
        width: 100%;
        max-width: 560px;
    }
    margin-top: 100px;
    margin-bottom: 40px;
    padding: 2rem 1.5rem;
    gap: 0.9rem;
    @include glass(0.2);

    h2 {
        font-family: $font-display;
        font-size: clamp(1.6rem, 4vw, 2.1rem);
        margin: 0 0 0.5rem;
        color: $ink;
    }

    input,
    textarea {
        box-sizing: border-box;
        width: 100%;
        max-width: 440px;
        padding: 0.8rem 1rem;
        border-radius: $radius-md;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background-color: rgba(255, 255, 255, 0.4);
        color: $ink;
        font-size: 1.05rem;
        outline: none;
        resize: none;
        transition: border-color 0.25s, background-color 0.25s, box-shadow 0.25s;

        &::placeholder {
            color: rgba($ink, 0.55);
        }
        &:hover {
            background-color: rgba(255, 255, 255, 0.5);
        }
        &:focus {
            border-color: $accent;
            background-color: rgba(255, 255, 255, 0.7);
            box-shadow: 0 0 0 4px rgba($accent, 0.2);
        }
    }
    textarea {
        min-height: 150px;
    }

    button {
        @include button(solid);
        margin-top: 0.5rem;
        min-width: 160px;
        font-size: 1.05rem;
    }
}
</style>
