<template>
<div id="location">
    <v-container>
        <v-row justify="center">
            <v-col lg="8"  sm="12" id="location-map">
                <v-img height="500" :src="require(`@/assets/${map}`)"/>
            </v-col>
            <v-col lg="4"  sm="12" id="location-description">
                <Title :ttlText="name" color="#303960"/>
                <Paragraph :prgText="description" color="#303960"/>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>

import Title from '@/components/Title.vue'
import Paragraph from '@/components/Paragraph.vue'

export default {
    name: 'Location',
    props: ['name', 'description', 'map', 'image'],
    components: {
    // HelloWorld
    Title,
    Paragraph
  },
}
</script>

<style lang="scss" scoped> 
    
#location {
    #location-map {
        background-color: white;
    }
    #location-description {
        background-color: white;
    }
}

@media screen and (max-width:600px) {

}

</style>