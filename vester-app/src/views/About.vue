<template>
  <div class="about">
      <v-container fluid class="section-2" style="max-width: unset;">
        <v-row align="center" >
          <v-col lg="6" sm="12" >
            <Title color="#303960" ttlText="About Us"/>
            <Paragraph color="#303960" prgText="Vi bruger ikke kun kort og kompas til at finde vej. Det er nemmere med GPS. Det andet har vi nemlig lært. Vi følger ikke altid gamle damer over vejen, vi vil hellere gå lange ture, lave bål, riste skumfiduser, bygge med rafter, synge, danse, lege, få skøre ideer og afprøve dem, hygge i soveposen, grine, fnise, spejderdrille."/>
            <Paragraph color="#303960" prgText="Vi følger ikke altid gamle damer over vejen, vi vil hellere gå lange ture, lave bål, riste skumfiduser, bygge med rafter, synge, danse, lege, få skøre ideer og afprøve dem, hygge i soveposen, grine, fnise, spejderdrille. Der er også noget man ikke må: nemlig at mobbe, være lede, ikke hjælpe hinanden. Og vi tør og vil stille krav til vores spejdere."/>
          </v-col>
          <v-col lg="6" sm="12" align="center" >
            <div class="main-img">
              <ImageFrame ttlText='"Friendship' filename="abousus.png"/>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="section-2" style="max-width: unset; padding-bottom: 25vh">
        <v-row >
          <v-col lg="12" sm="12" >
            <h1 id="goals-title">Nogle af vores mål er</h1>
            <p class="goal">Vi vil være <span id="blue"> fremadrettede </span> og beslutsomme</p>
            <p class="goal">Vi tør <span id="blue"> udvikle </span> børn og unge til at tage del i og ansvar for sig selv og samfundet</p>
            <p class="goal">Vi tør at vise <span id="blue"> overskud </span> og risikovilje</p>
          </v-col>
        </v-row>
      </v-container>

        <v-container fluid class="section-2 dark" style="max-width: unset; margin:0; background-color:#303960;" >
          <v-row align="center">
            <v-col lg="4" md="6" sm="12" align="center">
              <div class="main-img" >
              <ImageFrame ttlText='"Experience' filename="Tydal.jpg"/>
            </div>
            </v-col>
            
            <v-col lg="2" md="12" cols="12" style="height:50px;"></v-col>

            <v-col lg="6" md="4" sm="12" >
              <Title color="#F6F6F6" ttlText="Vi gør"/>
              <p style="color:#eee;">Udvikling, træning og uddannelse, som spejderne kan bruge i deres daglige spejderarbejde. Og senere i deres arbejdsliv.</p>
            </v-col>
          </v-row>
        </v-container>

        <v-container fluid class="section-2" style="max-width: unset;">
            <v-row sm="12">
              <v-col lg="12" sm="12">
                <Title color="#303960" ttlText="Vi handler og udvikler spejderne via fokusområderne "/>
              </v-col>
              <v-col lg="12" sm="12" >
                <p id="list">
                  - Spejdere mod mobning. 
                  <br>- Spejdere for opmærksomhed på natur og miljø
                  <br>- Spejdere for en sund krop og god mad.
                  <br>- Spejdere for en øget integration i samfundet.
                </p>
              </v-col>
            </v-row>
        </v-container>

        <v-container fluid class="section-2 dark" id="flex-exepction" style="max-width: unset; background-color:#303960;">
          <v-row >
            <v-col lg="10" sm="12">
              <Title color="#eee" ttlText="Kontingent"/>
              <Paragraph color="#eee" prgText="For tiden udgør indmeldelsesgebyret 200 kr. som bl.a. dækker en T-skirt, et tørklæde og en arbejdsstofbog. Kontinget er på 850 kr. årligt, som opkræves i 2 halvårlige rater. "/>
            </v-col>
            <v-col lg="10" sm="12" >
              <Title color="#eee" ttlText="Uniformsvejledning"/>
              <Paragraph color="#eee" prgText="Grundlæggende består uniformen af selve uniformen, som findes i anorak- eller skjortefacon samt tørklæde i gruppens farver. Når det er varmt kan man anvende en mørkeblå T-shirt i stedet for spejderuniformen."/>
              <p style="color:#eee;">Mikrospejdere behøver ikke at anskaffe en spejderuniform.
              Øvrige uniformsgenstande og udstyr kan købes i Spejdersport. På tegningen kan ses, hvor de forskellige mærker skal sidde på uniformen.</p>
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col lg="5" sm="12" align="center">
              <div class="main-img" id="desktop-padding">
              <ImageFrame ttlText='"Uniforms' filename="Tydal.jpg"/>
            </div>
            </v-col>
          </v-row>

        </v-container>
  </div>
</template>

<script>

import Title from '@/components/Title.vue'
import Paragraph from '@/components/Paragraph.vue'
import ImageFrame from '@/components/ImageFrame.vue'

export default {
  name:'About',
  components: {
    // HelloWorld
    Title,
    Paragraph,
    ImageFrame

  },
  mounted () {
    window.scrollTo(0, 0)
  }
  
}
</script>

<style lang="scss">
@mixin section-about {
  display: flex;
  align-items: left;
  justify-content: center;
  height: auto;
  padding: 10vh 5vw 10vh 10vw;
}

.section-2 {
  @include section-about();
  background-color: #eee;
  color: #303960;
}

.main-img {
  display: flex;
  align-content: flex-end;
  max-width: 400px;
}
.dark {
  background: url('../assets/Artboard1.png');
  background-size: contain ;
}

#goals-title{
  margin-bottom: 4vh;
  letter-spacing: 0.2vw;
  font-size: 45px;
  text-align: center;
}
.goal{
  color: #303960;
  font-size: 25px;
  margin-top: 2vh;
  text-align: center;
}

#blue{
  color: #637CDF;
}



#list{
  font-size: 24px;
  line-height: 3;
  color: #303960;
}
#desktop-padding{
  margin-right: 150px;
}


@media screen and (max-width:600px) {

  #list{
    font-size: 16px;
  }
  #desktop-padding{
  margin-right: 0px;
}

  .section-2{
    padding: 10vh 5vw 10vh 5vw;
  }
  #goals-title{

    font-size: 25px;
  }
  .goal{

    font-size: 16px;

  }

  #flex{
    display: block;
  }
  #flex-exepction{
    display: block;
  }


}

</style>