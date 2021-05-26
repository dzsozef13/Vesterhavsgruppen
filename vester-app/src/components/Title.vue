<template>
    <v-container id="title">
        <h1>{{ ttlText }}</h1>
    </v-container>
</template>

<script>
export default {
    props: ['ttlText']
}
</script>

<style lang="scss">
    #title {
        text-align: left;
        margin: 0 0 8px 0;
        padding: 0;
        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 32px;
            font-weight: 600;
        }
    }
</style>