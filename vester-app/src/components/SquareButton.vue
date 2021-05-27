<template>
    <router-link :to="route" style="text-decoration: none;">
        <v-container id="component">
            <v-btn id="square-button"
            dark
            depressed
            tile
            >
                <h4>{{ btnText }}</h4>
            </v-btn>
            <span id="shadow"></span>
        </v-container>
    </router-link>
</template>

<script>
export default {
    props: ['btnText', 'route']
}
</script>

<style lang="scss" scoped>

#component {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    width: max-content;
    margin: 0 0 64px 0;
    padding: 0;

    #square-button {
        // body
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        width: 200px;
        height: 72px;
        margin: 0;
        // style
        text-align: center;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 0;
        background-color: white;
        //border
        border-style: solid;
        border-width: 4px;
        border-color: #303960;

        h4 {
            font-family: 'Lato', sans-serif;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 2px;
            color: #303960;
        }
    }
    #shadow {
        width: 200px;
        height: 8px;
        background-color: #637CDF;
    }
}

    

</style>

