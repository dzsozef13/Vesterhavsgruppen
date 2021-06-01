<template>
<div id="news" >

  <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" >
    <v-row id="mainrow" >
      <v-col lg="8" sm="12">
        <Title color="#303960" ttlText="Aktuel"/>
        <Paragraph color="#303960" prgText="Du kan finde en online tilmeldingeblanket ved at trykke på knappen her Covid virus situation"/>
        <ButtonBlue btnText="Kalendar" route="/calendar"/>
      </v-col>
      <v-col lg="4" sm="12">
        <div id="main-img">
          <v-img :src="require('@/assets/illustration02.png')"></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="section-2 dark" style="max-width: unset; margin:0;">
    <v-row id="row-news">
      <v-col lg="6" sm="12">
        <v-container class="sticky-note">
          <h1>Velkommen til 2021</h1>
          <h4>2020 har været et mærkeligt år, hvor vi har måttet ændre planer for rigtig mange af vores aktiviteter.  På nær et par måneder i foråret har vi kunnet holde vores ugentlige spejdermøder, men det er ikke blevet til ret mange ture og lejre.</h4>
          <h4>Vi håber at 2021 bliver bedre, i hvert fald når vi kommer over vintren, hvor vi stadig må regne med at leve med rimelig skrappe restriktioner.</h4>
          <h4>Da vi stadig er påvirket af Coronavirus vil vi gerne vide, hvor mange der deltager i møderne, så hvis du gerne vil prøve at være spejder, vil vi gerne have besked inden du kommer. Du kan enten skrive en mail til adressen overfor eller ringe til vores gruppeleder på tlf. 40 29 26 71.</h4>
          <v-img  class="tape" contain :src="require(`@/assets/tape.svg`)"/>
        </v-container>
      </v-col>
      <v-col lg="6" sm="12">
        <v-container class="sticky-note">
          <h1>Mødetid for Vesterhavsgruppens afdelinger:</h1>
          <h4>(vi mødes på Bakkevej 14, 6700 Esbjerg)</h4>

          <h2>Mikro (0. - 1. klasse):</h2>
          <h4>Tirsdag kl. 16:30 - 18:00</h4>

          <h2>Mini (2. - 3. klasse):</h2>
          <h4>Tirsdag kl. 16:30 - 18:00</h4>

          <h2>Junior (4. - 6. klasse):</h2>
          <h4>Tirsdag kl. 19:00 - 20:30</h4>

          <h2>Trop (7. - 9. klasse):</h2>
          <h4>Onsdag kl. 19:30 - 21:00</h4>

          <h2>Klan (efter 9. klasse):</h2>
          <h4>Torsdag kl. 19:00 - 21:00</h4>

          <v-img  class="tape" contain :src="require(`@/assets/tape.svg`)"/>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Title from '@/components/Title.vue'
import Paragraph from '@/components/Paragraph.vue'
import ButtonBlue from '@/components/ButtonBlue.vue'



export default {
  name: 'News',
  components: {
    // HelloWorld
    Title,
    Paragraph,
    ButtonBlue
  }
}
</script>

<style lang="scss" scoped>

@mixin section {
  display: flex;
  align-items: left;
  justify-content: center;
  min-height: 70vh;
  min-width: unset;
  margin: 0;
}

.section-1 {
  @include section();
  padding: 70px 10vw 100px 10vw
}

.section-2 {
  @include section();
  padding: 200px 10vw 200px 10vw;
}

.asd {
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: max-content;
}

#main-img {
  max-width: 250px;
  margin: auto;
}

.light {
  background-color: #eee;
}

.dark {
  background-color: #303960;
  background: url('../assets/Artboard1.png');
  background-size: contain ;
}

#mainrow{
  display: flex;
  align-items: center;
}

#about{
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
}

#row-news{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.sticky-note {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  height: auto;
  max-width: 440px;
  min-width: 250px;
  padding: 24px;
  margin-bottom: 50px;
  background-color: white;

  h1 {
    font-family: 'Merriweather', serif;
    font-size: 24px;
    font-weight: bold;
    margin: 16px 0 16px 0;
    color: #303960;
  }

  h2 {
    font-family: 'Merriweather', serif;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 0 0;
    color: #303960;
  }

  h4 {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 16px;
    color: #303960;
  }

  .tape {
    position: absolute;
    z-index: 999;
    margin: -50px 0 0 120px;
    width: 100px;
  }
}

@media screen and (max-width:600px) {
  #badges{
    flex-direction: column;
    padding: 8vh 0 5vh 0;
  }
  .badge-svg{
  width: 60vw;
  }
}

</style>
