<template class="contact">
  <div>
  <v-container fluid class="section-1"  style="max-width: unset; margin:0;" >
      <v-row id="mainrow" >
        <v-col class="asd" lg="12">
          <Title color="#303960" ttlText="Contact"/>
          <Paragraph color="#303960" prgText="Vesterhavsgruppens ledelse"/>
        </v-col>
        <v-col class="workers" lg="12">
          <Leaders v-for="teacher in teachers" :teacher="teacher" :key="teacher.mail"/>
        </v-col>
      </v-row>
  </v-container>
    <v-container fluid style="max-width: unset; margin:0; padding:0;" id="map">
    <v-row lg="12"  style="margin:0;" >
      <v-col lg="8"  style="padding:0;">
        <div id="map">
        <v-img id="esbjerg" :src="require('../assets/Esbjerg_map.png')" >
        </v-img>
        </div>
      </v-col>
      <v-col lg="4"  style="padding:0;" id="dark-column">
        <div id="one">
          <v-img :src="require('../assets/bakkevej.jpg')"></v-img>
        </div>
        <div id="two">
          mow
        </div>
        
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Paragraph from '@/components/Paragraph.vue'
import Leaders from '@/components/Leaders.vue'


export default {
  name:'Contact',
  components: {
    // HelloWorld
    Title,
    Paragraph,
    Leaders
  },
  data() {
    return {
      teachers: [
        {
          title:'Formand',
          name:'Ricka Stenger',
          mail: 'formand@vesterhavsgruppen.dk',
          tlf: '60 27 86 92'
        },
        {
          title:'Kasser',
          name:'Helén Buch Dubery',
          mail: 'kasserer@vesterhavsgruppen.dk',
          tlf: '21 67 73 57'
        },
        {
          title:'Gruppeleder',
          name:'Steffen Sørensen',
          mail: 'gruppeleder@vesterhavsgruppen.dk',
          tlf: '40 29 26 71'
        },
      ]
    }


  }
}
</script>

<style lang="scss" scoped>
@mixin section {
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  min-height: 70vh;
  padding: 10vh 5vw 5vh 10vw;
  margin: 0;
}

.section-1 {
  @include section();
  background-color: #eee;
  color: rgb(35, 33, 56);
}

.asd {
  display: flex;
  flex-direction: column;
  justify-items: center;
}

#mainrow{
  display: flex;
  align-items: center;
  flex: 0 0 auto;

}
.workers{
  display: flex;
  flex-direction: row;
}
#map{
  height: 100vh;
}
#esbjerg{
  height: 100%;
}
#dark-column{
  background-color: #303960;
  display: flex;
  flex-direction: column;
}
#one{

  width: 100%;
  height: 40vh;
}
#two{

  width: 100%;
  height: 60vh;
}
</style>