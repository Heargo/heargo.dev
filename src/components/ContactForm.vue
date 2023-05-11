<template>
    <form action="https://api.web3forms.com/submit" method="POST" class="flex-col">
        <h2>Contact me</h2>
        <input type="hidden" name="access_key" :value="contact_key">

        <input type="text" name="name" placeholder="Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <textarea name="message" placeholder="Message" required></textarea>
        <input type="hidden" name="redirect" value="https://web3forms.com/success">

        <button type="submit">Send message</button>
    </form>
</template>
<script>

export default {
    name:"ContactForm",
    data() {
        return {
            contact_key: process.env.VUE_APP_CONTACT_KEY
        }
    },
    mounted(){
        console.log(this.contact_key)
        console.log(process.env.VUE_APP_CONTACT_KEY)
    }

}

</script>
<style lang="scss" scoped>
    form{
        border-radius: 20px;
        background-color: hsla(0,0%,100%,.25);
        backdrop-filter: blur(5px);
        padding: 1rem;
        width: calc(80% - 2rem);
        margin-top: 100px;
        margin-bottom: 50px;
        max-width: calc(600px - 2rem);
        gap: 1rem;
        h2{
            font-size: 2rem;
            margin-bottom: .4rem;
            color:$dark;
        }

        input,textarea{
            width: 90%;
            max-width: 400px;
            padding: .5rem;
            border-radius: 10px;
            border: none;
            background-color: hsla(0,0%,100%,.25);
            backdrop-filter: blur(5px);
            color:$dark;
            font-size: 1.2rem;
            outline: none;
            resize: none;
        }
        textarea{
            height: fit-content;
            min-height: 150px;
        }

        button{
            outline:none;
            border:none;
            text-decoration: none;
            width: 90%;
            max-width: 250px;
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
                width: 90%;
                max-width: 300px;
            }
        }
    }
</style>