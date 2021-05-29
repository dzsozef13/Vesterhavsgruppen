<template class="contact">
  <div>
  <v-container fluid class="section-1"  style="max-width: unset; margin:0;" >
      <v-row id="mainrow" >
        <v-col class="asd" lg="12">
          <Title color="#303960" ttlText="Contact"/>
          <Paragraph color="#303960" prgText="Vesterhavsgruppens ledelse"/>
        </v-col>
      </v-row>
      <v-row id="mainrow" >
        <v-col class="workers" lg="12">
          <Leaders v-for="teacher in teachers" :teacher="teacher" :key="teacher.mail"/>
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
  padding: 5vh 2vw 2vh 2vw;
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
  height: max-content;
}

#mainrow{
  display: flex;
  align-items: center;
}
.workers{
  display: flex;
  flex-direction: row;
}
</style>