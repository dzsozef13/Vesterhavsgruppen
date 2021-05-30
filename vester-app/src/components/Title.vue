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
        padding: 0;
        h1 {
            // font-family: 'Sansita Swashed', cursive;
            // font-family: 'Lato', sans-serif;
            font-family: 'Merriweather', serif;
            font-size: 40px;
            font-weight: bold;
            letter-spacing: 0.2vw;
        }
    }

</style>