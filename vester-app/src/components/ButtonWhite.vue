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
        width: max-content;
        height: 72px;
        margin: 0;
        // style
        text-align: center;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 0;
        background-color: #3E4871;
        //border
        border-style: solid;
        border-width: 4px;
        border-color: white;

        h4 {
            font-family: 'Lato', sans-serif;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 0;
            padding: 0 16px 0 16px;
            color: white;
        }
        box-shadow: 0 8px 0 #49BFA3;
        &:hover {
            box-shadow: 0px 4px 16px rgba($color: #3D414D, $alpha: 0.5);
            box-shadow: 0 4px 0 #49BFA3;
        }
    }
}

    

</style>

