<template>
<div id="home" >

  <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" >
    <v-row>
      <v-col lg="8" sm="12">
        <Title color="#303960" ttlText="Velkommen"/>
        <Paragraph color="#303960" prgText="DDS Vesterhavsgruppen, Esbjerg er medlem af Det Danske Spejderkorps, også kaldet De Blå Spejdere i daglig tale. Du kan finde en online tilmeldingeblanket ved at trykke på knappen her"/>
        <ButtonBlue btnText="Bliv Spejder" route="/BecomeScout"/>
      </v-col>
      <v-col lg="4" sm="12">
        <div id="main-img">
          <v-img :src="require('@/assets/il_home.svg')"></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid style="max-width: unset; margin:0; padding:0;" id="video">
    <v-row>
      <v-col lg="12" style="padding:0;">
        <v-img :src="require('../assets/Thumb.jpg')" id="video">
        <div id="gradient-container">
          <div id="gradient"></div>
        </div>
        </v-img>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="section-2 dark" style="max-width: unset; margin:0;">
    <v-row>
      <v-col lg="8" sm="12">
        <Title color="#eee" ttlText="Vesterhavsgruppen er en gammel gruppe i Esbjerg."/>
        <Paragraph color="#eee" prgText="Vi dækker hele Esbjerg by samt Skads/Andrup, Tjæreborg, Tarp/Bryndum områderne. Vi er en del af DDS - Det Danske Spejderkorps og Horns Rev Division. I DDS arbejder vi ud fra spejder ideen, der blev grundlagt af Lord "/>
        <ButtonWhite btnText="Om Gruppen" route="/about"/>
      </v-col>
      <v-col lg="4" sm="12">
        <div>
          <ImageFrame ttlText='"Community' filename="thumbnail-3.png"/>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid style="max-width: unset; margin:0;" id="badges">
    <v-row>

          <v-col lg="4" md="6" sm="12" align="center"> 
            <v-img class="badge-svg" :src="require('../assets/badge-fire.svg')"></v-img>
            <p class="badge-text">Adventure</p>
          </v-col>
          <v-col lg="4" md="6" sm="12" align="center"> 
            <v-img class="badge-svg" :src="require('../assets/badge-forest.svg')"></v-img> 
            <p class="badge-text">Nature</p>
            </v-col>
          <v-col lg="4" md="12" sm="12" align="center"> 
            <v-img class="badge-svg" :src="require('../assets/badge-hands.svg')" >
            </v-img>
            <p class="badge-text">Friendship</p>
          </v-col>
          
    </v-row>
  </v-container>

  <v-container fluid class="section-2 dark" style="max-width: unset; margin:0;">
    <v-row >
      <v-col lg="8" sm="12" align="left">
        <Title color="#eee" ttlText="Vesterhavsgruppen er en gammel gruppe i Esbjerg."/>
        <Paragraph color="#eee" prgText="Vi dækker hele Esbjerg by samt Skads/Andrup, Tjæreborg, Tarp/Bryndum områderne. Vi er en del af DDS - Det Danske Spejderkorps og Horns Rev Division. I DDS arbejder vi ud fra spejder ideen, der blev grundlagt af Lord "/>
        <ButtonWhite btnText="Afdelinger" route="/groups"/>
      </v-col>
      <v-col lg="4" sm="12">
        <div>
          <ImageFrame ttlText='"Experience' filename="mikro.jpg"/>
        </div>
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
import ButtonWhite from '@/components/ButtonWhite.vue'
import ImageFrame from '@/components/ImageFrame.vue'


export default {
  name: 'Home',
  components: {
    // HelloWorld
    Title,
    Paragraph,
    ButtonBlue,
    ButtonWhite,
    ImageFrame
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
  padding: 100px 10vw 0 10vw
}

.section-2 {
  @include section();
  padding: 200px 10vw 200px 10vw;
}

.dark {
  background-color: #303960 ;
}

.light {
  background-color: #eee ;
}

#main-img {
  max-width: 300px;
}

#video {
  min-height: 100vh;
}

#badges {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 200px 10vw 200px 10vw;
}

.badge-svg {
  width: auto;
  max-width: 300px;
}

.badge-text {
  font-family: 'Sansita Swashed', cursive;
  font-size: 40px;
  font-weight: bold;
  color: #303960;
  letter-spacing: 0;
  margin-top: 0px;
}

#gradient-container {
  display: flex;
  align-items:flex-end;
  height: 124vh;
  width: 110vw;
}

#gradient {
  height: 80vh;
  width: 110vw;
  z-index: 111;
  background: rgb(48,57,96);
  background: linear-gradient(0deg, rgba(48,57,96,1) 0%, rgba(48,57,96,0) 100%);
}

@media screen and (max-width:600px) {

  .section-1, .section-2 {
    padding-left: 24px;
    padding-right: 24px;
  }

  #main{
    display: none;
  }
  #dark{
    height: max-content;
  }
  #gradient{
    display: none;
  }
}
</style>
