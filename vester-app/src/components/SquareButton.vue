<template>
    <router-link :to="route" style="text-decoration: none;">
        <v-btn id="square-button"
        dark
        depressed
        tile
        >
            <h4>{{ btnText }}</h4>
        </v-btn>
    </router-link>
</template>

<script>
export default {
    props: ['btnText', 'route']
}
</script>

<style lang="scss">
    $buttonColor: #788DE5;
    // $buttonSize: 24px;
    // $buttonShadow: 0px;

    #square-button {
        // body
        display: flex;
        justify-content: center; 
        align-items: center;
        width: max-content;
        height: 48px;
        // padding: 16px;
        margin: 0 0 32px 0;
        // style
        text-align: center;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 0;
        background-color: $buttonColor;
        h4 {
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            font-weight: 400;
        }
        // box-shadow: 0px 8px 32px rgba($color: #000000, $alpha: 0.4);
    }
</style>

