<template>
<div class="groups">
    <v-container fluid class="section-1" style="max-width: unset; margin:0;" >
        <v-row id="mainrow" >
        <v-col class="asd" >
            <Title color="#303960" ttlText="Afdelinger i Vesterhavsgruppen"/>
            <ButtonBlue btnText="Bliv Spejder" route="/about"/>
        </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import Title from '@/components/Title.vue'
import ButtonBlue from '@/components/ButtonBlue.vue'

export default {
    name:'groups',
    components: {
    // HelloWorld
        Title,
        ButtonBlue

    }


}
</script>

<style>

</style>