<template>
<div id="home" >

  <v-container fluid class="section-1" style="max-width: unset; margin:0;" >
    <v-row id="mainrow" >
      <v-col class="asd" >
        <Title color="#303960" ttlText="Velkommen"/>
        <Paragraph color="#303960" prgText="DDS Vesterhavsgruppen, Esbjerg er medlem af Det Danske Spejderkorps, også kaldet De Blå Spejdere i daglig tale. Du kan finde en online tilmeldingeblanket ved at trykke på knappen her"/>
        <ButtonBlue btnText="Bliv Spejder" route="/BecomeScout"/>
      </v-col>
      <v-col>
        <div class="main-img">
          <v-img  :src="require('@/assets/il_home.svg')"></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid style="max-width: unset; margin:0; padding:0;" id="video">
    <v-row lg="12"  style="margin:0;" >
      <v-col lg="12"  style="padding:0;">
        <v-img :src="require('../assets/Thumb.jpg')" id="video">
        <div id="gradient-container">
          <div id="gradient"></div>
        </div>
        </v-img>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="section-1" style="max-width: unset; margin:0;" id="dark">
    <v-row sm="12">
      <v-col lg="6" sm="12" id="about">
        <Title color="#eee" ttlText="Vesterhavsgruppen er en gammel gruppe i Esbjerg."/>
        <Paragraph color="#eee" prgText="Vi dækker hele Esbjerg by samt Skads/Andrup, Tjæreborg, Tarp/Bryndum områderne. Vi er en del af DDS - Det Danske Spejderkorps og Horns Rev Division. I DDS arbejder vi ud fra spejder ideen, der blev grundlagt af Lord "/>
        <ButtonWhite btnText="Om Gruppen" route="/about"/>
      </v-col>
      <v-col lg="6" id="about">
        <div style="margin-left:110px" class="main-img">
          <ImageFrame ttlText='"Community' filename="thumbnail-3.jpeg"/>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid style="max-width: unset; margin:0; padding:0;" id="badges">
    <v-row lg="12" style="margin:0;" id="badges">

          <v-col lg="4" sm="12" align="center"> 
            <v-img class="badge-svg" :src="require('../assets/badge-fire.svg')"></v-img>
            <p class="badge-text">Adventure</p>
          </v-col>
          <v-col lg="4" align="center"> 
            <v-img class="badge-svg" :src="require('../assets/badge-forest.svg')"></v-img> 
            <p class="badge-text">Nature</p>
            </v-col>
          <v-col lg="4" align="center"> 
            <v-img class="badge-svg" :src="require('../assets/badge-hands.svg')" >
            </v-img>
            <p class="badge-text">Friendship</p>
          </v-col>
          
    </v-row>
  </v-container>

  <v-container fluid class="section-1" style="max-width: unset; margin:0;" id="dark">
    <v-row >
      <v-col lg="6" id="about">
        <div style="margin-right:110px" class="main-img">
          <ImageFrame ttlText='"Experience' filename="mikro.jpg"/>
        </div>
      </v-col>
      <v-col lg="6" id="about">
        <Title color="#eee" ttlText="Vesterhavsgruppen er en gammel gruppe i Esbjerg."/>
        <Paragraph color="#eee" prgText="Vi dækker hele Esbjerg by samt Skads/Andrup, Tjæreborg, Tarp/Bryndum områderne. Vi er en del af DDS - Det Danske Spejderkorps og Horns Rev Division. I DDS arbejder vi ud fra spejder ideen, der blev grundlagt af Lord "/>
        <ButtonWhite btnText="Afdelinger" route="/groups"/>
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
  height: max-content;
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

#about{
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
}
#dark{
  background-color: #303960 ;
  color: #eee;
  height: 100vh;
}
#video{
  min-height: 100vh;
}
#badges {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
.badge-svg{
  width: 25vw;
}
.badge-text{
  font-family: 'Sansita Swashed', cursive;
  font-size: 2.5vw;
  font-weight: bold;
  color: #303960;
  letter-spacing: 2px;
  margin-top: 3vh;
}
#gradient-container{
  display: flex;
  align-items:flex-end;
  height: 121vh;
  width: 100vw;
}
#gradient{
  height: 80vh;
  width: 100vw;
  z-index: 111;
  background: rgb(48,57,96);
  background: linear-gradient(0deg, rgba(48,57,96,1) 0%, rgba(48,57,96,0) 100%);
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
