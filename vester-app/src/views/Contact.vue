<template class="contact">
<div>

  <v-container fluid class="section-contact"  style="max-width: unset; margin:0;" >
      <v-row align="center">
        <v-col lg="12" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <Title color="#303960" ttlText="Contact"/>
          <Paragraph color="#303960" prgText="Vesterhavsgruppens ledelse"/>
        </v-col>
        <v-col class="workers" lg="12" >
          <Leaders v-for="teacher in teachers" :teacher="teacher" :key="teacher.mail"/>
        </v-col>
      </v-row>
  </v-container>
  
<v-container fluid style="max-width: unset; margin:0;" >
  <v-row >
    <v-col lg="12" id="car-col" >
      <template >
        <v-carousel
          cycle
          height="auto"
          hide-delimiter-background
          show-arrows-on-hover
          class="car"
          id="anchorA"
          >     
          <v-carousel-item>
            <Location
            name="Vesterhavsgruppens hytter" 
            description="Gruppen har en mødehytte på Bakkevej 14, på en grund vi deler med Sct. Georgsgilderne, De Grønne Pigespejdere og FDF.
            I hytten er der et stort fælles møderum, 4 patruljelokaler, et lederrum og et moderne køkken.
            Der er god plads uden om hytten, så vi kan arbejde med pionerarbejde og båltænding.
            I hytten er der depot med udstyr så hele gruppen kan tage på teltlejr på en gang." 
            map="map01.png"
            image=""/>
          </v-carousel-item>
          <v-carousel-item>
            <Location
            name="Kontingent" 
            description="Vesterhavsgruppen har også en lille hytte i Marbæk Plantage.
            Trekløverhytten ligger på Spejderøen og der er plads til at der kan overnatte 10 personer i hytten. Hytten indeholder fællesrum, 
            lederrum, soverum, køkken og toilet og er derfor ideel til patruljeture, weekendture for en lille afdeling eller base for aktiviteter i Marbæk Plantage" 
            map="map02.png"
            image=""/>
          </v-carousel-item>
        </v-carousel>
      </template>
    </v-col>
  </v-row>
</v-container>

</div>
</template>

<script>
import Title from '@/components/Title.vue'
import Paragraph from '@/components/Paragraph.vue'
import Leaders from '@/components/Leaders.vue'
import Location from '@/components/Location.vue'


export default {
  name:'Contact',
  components: {
    // HelloWorld
    Title,
    Paragraph,
    Leaders,
    Location
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
      ],
      maps: [
        {
          src: require('../assets/hytter.png')
        },
        {
          src: require('../assets/hytte2.png')
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
  padding: 5vh 5vw 5vh 10vw;
  margin: 0;
}

.section-contact {
  @include section-con();
  background-color: #eee;
  color: rgb(35, 33, 56);
}
@mixin section-con-mobile {
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  min-height: 40vh;
  padding: 0vh 5vw 0vh 5vw;
  margin: 0;
}

.section-contact-mobile {
  @include section-con-mobile();
  background-color: #eee;
  color: rgb(35, 33, 56);
}

.workers{
  display: flex;
  flex-direction: row;
}

#mainrow{
  display: flex;
  align-items: center;
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
  .dark-blank{
    background-color: #303960;
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
  #mobile-car{
    display: flex;
  
  }
  #desktop-car{
    display: none;
  }
  #car-col{
    margin: 0;

  }
  }
</style>