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
        margin: 0 0 32px 0;
        padding: 0;
        max-width: 400px;
        h3 {
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            font-weight: 400;
        }
    }
</style>

