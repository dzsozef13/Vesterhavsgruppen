<template class="contact">
  <div>
  <v-container fluid class="section-contact"  style="max-width: unset; margin:0;" >
      <v-row >
        <v-col lg="12" >
          <Title color="#303960" ttlText="Contact"/>
          <Paragraph color="#303960" prgText="Vesterhavsgruppens ledelse"/>
        </v-col>
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
@mixin section-con {
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  min-height: 70vh;
  padding: 10vh 5vw 5vh 10vw;
  margin: 0;
}

.section-contact {
  @include section-con();
  background-color: #eee;
  color: rgb(35, 33, 56);
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
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center ;
  padding: 0 3vw 0 3vw;
  
  }
  h1{
    font-size: 2vw;
  }
  p{
    font-size: 1.3vw;
    margin-top: 3vh;
  }

  @media screen and (max-width:600px) {
    .section-contact {
    padding: 10vh 24px 10vh 24px
  }
    .workers{
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  }
</style>