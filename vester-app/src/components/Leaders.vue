<template>
    <v-col>
        <h1 id="title">{{ teacher.title }}</h1>
        <p id="name">{{ teacher.name }}</p>
        <p id="info"> <strong> e-mail:</strong> {{ teacher.mail }} <br> <strong>tlf:</strong> {{ teacher.tlf }}</p>
    </v-col>
</template>

<script>
export default {
    name:'Leaders',
    props: ['teacher']

}
</script>

<style lang="scss">
#title{
    color: #637CDF;
    font-size: 2vw;
}
#name{
    font-weight: bold;
    color: #303960;
    font-size: 1.3vw;
}
#info{
    color:#303960;
    font-size: 1vw;
}
</style>