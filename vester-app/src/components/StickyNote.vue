<template>
    <v-container id="frame">
        <div id="img-asd">
            <v-img style="opacity: 0.9;" contain :src="require(`@/assets/${filename}`)"/>
        </div>
        <h1>{{ ttlText }}</h1>
        <v-img  id="tape" contain :src="require(`@/assets/tape.svg`)"/>
    </v-container>
</template>

<script>
export default {
    props: ['ttlText', 'filename']
}
</script>

<style lang="scss">
    #frame {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: flex-start;
        height: auto;
        width: min-content;
        background-color: white;

        #img-asd {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: flex-start;
            padding: 2px;
            width: 350px;
        }

        h1 {
            font-family: 'Sansita Swashed', cursive;
            font-size: 32px;
            font-weight: bold;
            color: #637CDF;
        }

        #tape {
            position: absolute;
            z-index: 999;
            margin: -25px 0 0 100px;
            width: 100px;
        }

        #leaf01 {
            position: absolute;
            z-index: 999;
            margin: -50px 0 0 -80px;
            width: 150px;
        }

        #leaf02 {
            position: absolute;
            z-index: 999;
            margin: 270px 0 0 290px;
            width: 150px;
        }

    }

</style>