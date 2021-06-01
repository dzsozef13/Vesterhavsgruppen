<template>
<div id="home" >

  <v-container v-on:mousemove="parallax" fluid class="section-1 light" style="max-width: unset; margin:0;" >
    
    <v-row align="center">
      <v-col lg="6" sm="12">
        <div data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
        <Title color="#303960" ttlText="Velkommen"/>
        <Paragraph color="#303960" prgText="DDS Vesterhavsgruppen, Esbjerg er medlem af Det Danske Spejderkorps, også kaldet De Blå Spejdere i daglig tale. Du kan finde en online tilmeldingeblanket ved at trykke på knappen her"/>
        <ButtonBlue btnText="Bliv Spejder" route="/BecomeScout"/>
        </div>
      </v-col>
      <v-col lg="6" sm="12">
        <div id="main-img">
          <v-img class="layer" id="scouts" data-speed="-2" :src="require('@/assets/illustration01.png')"></v-img>
          <v-img class="layer" id="cloud1" data-speed="5" :src="require('@/assets/cloud.svg')"></v-img>
          <v-img class="layer" id="cloud2" data-speed="2" :src="require('@/assets/cloud.svg')"></v-img>
        </div>
      </v-col>
    </v-row>
    
  </v-container>

  <v-container fluid style="max-width: unset; margin:0; padding:0;">
    <v-row>
      <v-col lg="12" id="video-container" style="padding:0;">
        <video id="video" src="@/assets/intro_video.mp4" playsinline loop muted autoplay></video>
        <!-- <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_Sg_OAMB6NY" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media;"></iframe> -->
        <!-- <div id="gradient"></div> -->
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="section-2 dark" style="max-width: unset; margin:0;">
    <v-row>
      <v-col lg="8" sm="12" data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false">
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

          <v-col lg="4" md="6" sm="12" align="center" data-aos="slide-down"> 
            <v-img class="badge-svg" :src="require('../assets/badge-fire.svg')"></v-img>
            <p class="badge-text">Adventure</p>
          </v-col>
          <v-col lg="4" md="6" sm="12" align="center" data-aos="slide-down"> 
            <v-img class="badge-svg" :src="require('../assets/badge-forest.svg')"></v-img> 
            <p class="badge-text">Nature</p>
            </v-col>
          <v-col lg="4" md="12" sm="12" align="center" data-aos="slide-down" data-aos-duration="1000" data-aos-easing="ease-in-out"> 
            <v-img class="badge-svg" :src="require('../assets/badge-hands.svg')" >
            </v-img>
            <p class="badge-text">Friendship</p>
          </v-col>
          
    </v-row>
  </v-container>

  <v-container fluid class="section-2 dark" style="max-width: unset; margin:0;">
    <v-row >
      <v-col lg="8" sm="12" align="left" data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false">
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
  },
  data() {

        return{
        x:0,
        y:0,
        speed: 0,

        }
    },
    methods: {

        parallax: function(e) {
            let stuff = document.querySelectorAll('.layer')
            stuff.forEach(layer => {
                this.speed = layer.getAttribute('data-speed')
                this.x = (window.innerWidth - e.pageX * this.speed)/100
                this.y = (window.innerHeight - e.pageY * this.speed)/100

                layer.style.transform = `translateX(${this.x}px) translateY(${this.y}px)`
            })
        }
    },
    mounted() {
        document.addEventListener('mousemove', this.parallax);
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

.dark {
  background: url('../assets/Artboard1.png');
  background-size: contain ;
}

.light {
  background-color: #eee ;
}

#main-img {
  max-width: 300px;
  margin: auto;
  z-index: 1;
}

#scouts{

  z-index: 10;
  width: 100%;
  position: relative;
  left: -200px;
}
#cloud1{
  position: absolute;
  z-index: 5;
  margin: -200px 0 0 -100px;
  max-width: 400px ;

}
#cloud2{
  position: absolute;
  z-index: 4;
  margin: -350px 0 0 30px;
  max-width: 450px ;

}

#video-container {
  display: flex;
  align-content: center;

  #video {
    height: auto;
    width: 100%;
  }
}
.wood{
  height: 100vh ;
  width: 100vw ;

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

#gradient {
  display: flex;
  margin-top: -200px;
  height: 400px;
  width: 100vw;
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
  #scouts{

  z-index: 10;
  width: 100%;
  position: relative;
  left: 80px;
}

#cloud1{
  position: absolute;
  z-index: 5;
  left: 100px;
  max-width: 400px ;

}
#cloud2{
  position: absolute;
  z-index: 4;
  max-width: 450px ;

}
}
</style>
