<template>
    <v-container id="frame">
        <div id="img">
            <v-img style="opacity: 0.9;" contain :src="require(`@/assets/${filename}`)"/>
        </div>
        <h1>{{ ttlText }}</h1>
        <v-img  id="tape" contain :src="require(`@/assets/tape.svg`)"/>
        <v-img  id="leaf01" contain :src="require(`@/assets/leaf01.svg`)"/>
        <v-img  id="leaf02" contain :src="require(`@/assets/leaf02.svg`)"/>
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
        width: auto;
        background-color: white;

        #img {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: flex-start;
            padding: 8px;
            width: 300px;
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
            margin: 220px 0 0 220px;
            width: 150px;
        }

    }
</style>