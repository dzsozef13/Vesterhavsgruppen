<template>
  <div class="about">
      <v-container fluid class="section-1" style="max-width: unset; margin:0;" id="dark-about">
        <v-row id="flex">
          <v-col lg="6" sm="12" class="mobile">
            <Title color="#303960" ttlText="About Us"/>
            <Paragraph color="#303960" prgText="Vi bruger ikke kun kort og kompas til at finde vej. Det er nemmere med GPS. Det andet har vi nemlig lært. Vi følger ikke altid gamle damer over vejen, vi vil hellere gå lange ture, lave bål, riste skumfiduser, bygge med rafter, synge, danse, lege, få skøre ideer og afprøve dem, hygge i soveposen, grine, fnise, spejderdrille."/>
            <Paragraph color="#303960" prgText="Vi følger ikke altid gamle damer over vejen, vi vil hellere gå lange ture, lave bål, riste skumfiduser, bygge med rafter, synge, danse, lege, få skøre ideer og afprøve dem, hygge i soveposen, grine, fnise, spejderdrille. Der er også noget man ikke må: nemlig at mobbe, være lede, ikke hjælpe hinanden. Og vi tør og vil stille krav til vores spejdere."/>
          </v-col>
          <v-col lg="6" sm="12" class="mobile">
            <div class="main-img" id="f-image">
              <ImageFrame ttlText='"Friendship' filename="abousus.png"/>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="section-3" style="max-width: unset; margin:0;" id="nogle">
        <v-row >
          <v-col lg="12" sm="12" id="about2">
            <h1 id="goals-title">Nogle af vores mål er</h1>
            <p class="goal">Vi vil være <span id="blue"> fremadrettede </span> og beslutsomme</p>
            <p class="goal">Vi tør <span id="blue"> udvikle </span> børn og unge til at tage del i og ansvar for sig selv og samfundet</p>
            <p class="goal">Vi tør at vise <span id="blue"> overskud </span> og risikovilje</p>
          </v-col>
        </v-row>
      </v-container>

        <v-container fluid class="section-1" style="max-width: unset; margin:0;" id="third">
          
          <v-row >
            <v-col lg="6" sm="12">
              <div class="main-img">
              <ImageFrame ttlText='"Experience' filename="Tydal.jpg"/>
            </div>
            </v-col>
            <v-col lg="6" sm="12" id="about3" >
              <Title color="#F6F6F6" ttlText="Vi gør"/>
              <p id="white-text">Udvikling, træning og uddannelse, som spejderne kan bruge i deres daglige spejderarbejde. Og senere i deres arbejdsliv.</p>
            </v-col>
          </v-row>
        </v-container>

        <v-container fluid class="section-1" style="max-width: unset; margin:0;" id="sticker">
            <v-row sm="12">
              <v-col lg="12" sm="12" id="about4"  style="padding:0">
                <Title color="#303960" ttlText="Vi handler og udvikler spejderne via fokusområderne "/>

              </v-col>
              <v-col lg="12" sm="12" id="about-list"  style="padding:0">
                <p id="list">
                  - Spejdere mod mobning. 
                  <br>- Spejdere for opmærksomhed på natur og miljø
                  <br>- Spejdere for en sund krop og god mad.
                  <br>- Spejdere for en øget integration i samfundet.
                </p>
              </v-col>
            </v-row>
        </v-container>

        <v-container fluid class="section-1" style="max-width: unset; margin:0;" id="last">
          <v-row id="text-container">
            <v-col lg="10" sm="12" id="about4">
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

          <v-row >
            <v-col lg="5" sm="12" >
              <div style="margin-right:150px"  class="main-img" id="l-image">
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
@mixin section {
  display: flex;
  align-items: left;
  justify-content: center;
  min-height: 70vh;
  padding: 0 5vw 0 10vw;
  margin: 0;
}

.section-1 {
  @include section();
  background-color: #eee;
  color: #303960;
}
.section-3 {
  @include section();
  background-color: #eee;
  color: #303960;
}

.main-img {
  display: flex;
  align-content: flex-end;
  max-width: 400px;
}
#mainrow{
  display: flex;
  align-items: center;
}

#dark{
  color: #303960;
  height: 90vh;
}
#goals-title{
  margin-bottom: 4vh;
  letter-spacing: 0.2vw;
  font-size: 45px;
}
.goal{
  color: #303960;
  font-size: 25px;
  margin-top: 2vh;
}
#nogle{
  height: 60vh;
  color: #303960;
  background-color: #eee;
  
}
#blue{
  color: #637CDF;
}
#third{
  background-color:#303960;
  height: 90vh;
}
#about3{
  display: flex;
  flex-direction: column;
  justify-content: center;

}

#where{
  height: 100%;
  color: white;
}
#white-text{
  color: #eee;
  font-size: 24px;
  font-family: 'Lato', sans-serif;
}
#sticker{
  display: flex;
  flex-direction: column;
  height: 100vh;

}
#list{
  font-size: 24px;
  line-height: 3;
  color: #303960;
}
#about4{
  display: flex;
  flex-direction: column;
  justify-content: center;

}
#about-list{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
#last{
  background-color: #303960;
  height: 120vh;
}
#text-container{
  display:flex;
  align-items: center;
  padding-bottom: 6vh;
  padding-right: 150px;
}
#l-image{
  display: flex;
  align-items: center;
  height: 100%;
}
#f-image{
margin: 30px 0px 0px 110px;
}

@media screen and (max-width:600px) {
  #last{
    width: 100%;
    height: auto;
    flex-direction: column;
  }
  #f-image{
  margin: 0px;
  }
  #l-image{
    margin-bottom: 10vh;
    margin-left: 20px;
  }
  #text-container{
    padding: 0;

  }
  #list{
    font-size: 16px;
  }
  #sticker{
    height: auto;
  }
  .section-1{
    padding: 0;
  }


  #goals-title{
    margin-bottom: 4vh;
    letter-spacing: 0.2vw;
    font-size: 25px;
  }
  .goal{
    color: #303960;
    font-size: 16px;
    margin-top: 2vh;
    text-align: center;
  }
  #third{
    height: 100vh;
  }
  #white-text{
    font-size: 17px;
  }
  #about3{
  justify-content: flex-start;

}
.mobile{
  padding: 0;
}
#flex{
  display: block;
}
}

</style>