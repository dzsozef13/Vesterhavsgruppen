<template>
    <v-container id="paragraph">
        <h3>{{ prgText }}</h3>
    </v-container>
</template>

<script>
export default {
    props: ['prgText']
}
</script>

<style lang="scss">
    #paragraph {
        text-align: left;
        margin: 0 0 44px 0;
        padding: 0;
        max-width: 600px;
        h3 {
            font-family: 'Lato', sans-serif;
            font-size: 20px;
            font-weight: normal;
        }
    }


</style>

