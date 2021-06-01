<template>
    <router-link :to="dest" style="text-decoration: none;">
        <v-btn dark id="burger-button" class="hidden-md-and-up" v-on:click="destChange()"> {{ icon }} </v-btn>
    </router-link>
</template>

<script>
export default {
    data() {
        return { 
            dest: "/nav",
            prev: "", // previous view is stored here
            icon: "="
        }
    },
    methods: {
        destChange() {
            if (this.$router.history.current.path == "/nav") {
                this.dest = this.prev
            }
            else { 
                this.dest = "/nav",
                this.prev = this.$router.history.current.path
            }
            console.log(this.prev);
        }
    }
}
</script>

<style lang="scss">
    $buttonSize: 64px;

    #burger-button {
        // position
        position: fixed;
        bottom: 44px + $buttonSize/2;
        right: 0px;
        margin-right: 25px;
        z-index: 999;
        // body
        display: flex;
        justify-content: center;
        align-items: center;
        width: $buttonSize;
        height: $buttonSize;
        // style
        text-align: center;
        text-transform: none;
        text-decoration: none;
        font-family: "Lato";
        font-size: 24px;
        font-weight: bolder;
        letter-spacing: 0;
        background-color: white;
        color: #303960;
        //border
        border-style: solid;
        border-width: 4px;
        border-radius: 0;
        border-color: #303960;
        box-shadow: 0px 8px 32px rgba($color: #3D414D, $alpha: 0.5);
        box-shadow: 0 8px 0 #637CDF;
        &:hover {
            box-shadow: 0px 4px 16px rgba($color: #3D414D, $alpha: 0.5);
            box-shadow: 0 4px 0 #637CDF;
        }
    }
</style>

