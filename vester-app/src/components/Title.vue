<template>
    <v-container id="title">
        <h1 :style="{ 'color': color }">{{ ttlText }}</h1>
    </v-container>
</template>

<script>
export default {
    props: ['ttlText','color']
}

</script>

<style lang="scss">
    #title {
        text-align: left;
        margin: 0 0 24px 0;
        max-width: 600px;
        padding: 0;
        h1 {
            // font-family: 'Sansita Swashed', cursive;
            // font-family: 'Lato', sans-serif;
            font-family: 'Merriweather', serif;
            font-size: 40px;
            font-weight: bold;
        }
    }

    @media screen and (max-width:600px) {
        #title {
            h1 {
                font-size: 32px;
            }
        }
    }

</style>