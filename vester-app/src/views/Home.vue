<template>
<v-app id="home" >

  <v-container fluid class="section-1" style="max-width: unset; margin:0;" >
    <v-row id="mainrow" >
      <v-col class="asd" >
        <Title ttlText="Welkommen"/>
        <Paragraph prgText="My challenge was to help Rubea, a local enamelist to create a channel to sell her products and to boost her SoMe reach."/>
        <ButtonBlue btnText="Bliv Spejder" route="/about"/>
      </v-col>
      <v-col>
        <div>img</div>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid style="max-width: unset; margin:0; padding:0;" id="video">
    <v-row lg="12"  style="margin:0;" >
      <v-col lg="12"  style="padding:0;">
        <v-img :src="require('../assets/Thumb.jpg')" id="video"></v-img>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="section-1" style="max-width: unset; margin:0;" id="dark">
    <v-row sm="12">
      <v-col sm="12" id="about">
        <Title ttlText="About"/>
        <Paragraph prgText="My challenge was to help Rubea, a local enamelist to create a channel to sell her products and to boost her SoMe reach."/>
        <ButtonWhite btnText="Bliv Spejder" route="/about"/>
      </v-col>
      <v-col id="about">
        <div>img</div>
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
      <v-col id="about">
        <div>img</div>
      </v-col>
      <v-col id="about">
        <Title ttlText="About"/>
        <Paragraph prgText="My challenge was to help Rubea, a local enamelist to create a channel to sell her products and to boost her SoMe reach."/>
        <SquareButton btnText="Bliv Spejder" route="/about"/>
      </v-col>
    </v-row>
  </v-container>

</v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Title from '@/components/Title.vue'
import Paragraph from '@/components/Paragraph.vue'
import ButtonBlue from '@/components/ButtonBlue.vue'
import ButtonWhite from '@/components/ButtonWhite.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Title,
    Paragraph,
    ButtonBlue,
    ButtonWhite
  }
}
</script>

<style lang="scss" scoped>

@mixin section {
  display: flex;
  align-items: left;
  justify-content: center;
  min-height: 70vh;
  padding: 24px 16vw 24px 16vw;
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

#about{
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
}
#dark{
  background-color: rgb(35, 33, 56) ;
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
  letter-spacing: 0;
}


</style>
