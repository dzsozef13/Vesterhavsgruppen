<template>
  <div class="gallery">

        <v-container fluid class="section-gallery" style="max-width: unset; margin:0;" >
            <v-row align="center">
            <v-col lg="5" sm="12" class="gal-container" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <Title color="#303960" ttlText="Gallery"/>
                <div id="button-gallery">
                                    <v-container id="component" >
                                        <v-btn id="square-button" 
                                        dark
                                        depressed
                                        tile
                                        @click="$vuetify.goTo('#anchorA')"
                                        >
                                            <h4> Korpslejr 2009 </h4>
                                        </v-btn>
                                    </v-container>
                                    <v-container id="component" >
                                        <v-btn id="square-button" 
                                        dark
                                        depressed
                                        tile
                                        @click="$vuetify.goTo('#anchorB')"
                                        >
                                            <h4> Gruppetur 2010 </h4>
                                        </v-btn>
                                    </v-container>
                                    <v-container id="component" >
                                        <v-btn id="square-button" 
                                        dark
                                        depressed
                                        tile
                                        @click="$vuetify.goTo('#anchorC')"
                                        >
                                            <h4> Tropssommerlejr 2011 </h4>
                                        </v-btn>
                                    </v-container>
                                    <v-container id="component" >
                                        <v-btn id="square-button" 
                                        dark
                                        depressed
                                        tile
                                        @click="$vuetify.goTo('#anchorD')"
                                        >
                                            <h4> Juniorsommerlejr 2011 </h4>
                                        </v-btn>
                                    </v-container>
            </div>
            </v-col>
            <v-col lg="7" id="mobile-pad">
                <div id="main-img">
                <v-img class="layer" id="aparat" data-speed="5" :src="require('@/assets/illustration02.png')"></v-img>
                <v-img class="layer" id="leafy1" data-speed="-2" :src="require('@/assets/leaf01-revert.svg')"></v-img>
                <v-img class="layer" id="leafy2" data-speed="2" :src="require('@/assets/leaf01.svg')"></v-img>
                </div>
            </v-col>
            </v-row>

        </v-container>

        <v-container fluid class="section-gallery" id="carousels" style="max-width: unset; margin:0;" >
            <v-row >
            <v-col lg="12" id="car-col" >
                <template >
                    <v-carousel
                        cycle
                        height="800"
                        hide-delimiter-background
                        show-arrows-on-hover
                        class="car"
                        id="anchorA"
                    >
                    
                    <v-carousel-item
                    v-for="(korpslejr, i) in korpslejrs"
                    :key="i"
                    :src="korpslejr.src"
                    height="100%"
                    >
                    <v-sheet
                        :src="korpslejr.src"
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                </template>
            </v-col>
            </v-row>

             <v-row >
            <v-col lg="12" id="car-col" >
                <template>
                    <v-carousel
                        cycle
                        height="800"
                        hide-delimiter-background
                        show-arrows-on-hover
                        class="car"
                        id="anchorB"
                    >

                    <v-carousel-item
                    v-for="(gruppetur, i) in gruppeturs"
                    :key="i"
                    :src="gruppetur.src"
                    height="100%"
                    >
                    <v-sheet
                        :src="gruppetur.src"
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                </template>
            </v-col>
            </v-row>

            <v-row >
            <v-col lg="12" id="car-col" >
                <template>
                    <v-carousel
                        cycle
                        height="800"
                        hide-delimiter-background
                        show-arrows-on-hover
                        class="car"
                        id="anchorC"
                    >
                    <v-carousel-item
                    v-for="(junior, i) in juniors"
                    :key="i"
                    :src="junior.src"
                    height="100%"
                    >
                    <v-sheet
                        :src="junior.src"
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                </template>
            </v-col>
            </v-row>

            <v-row >
            <v-col lg="12" id="car-col" >
                <template>
                    <v-carousel
                        cycle
                        height="800"
                        hide-delimiter-background
                        show-arrows-on-hover
                        class="car"
                        id="anchorD"
                    >
                    <v-carousel-item
                    v-for="(trop, i) in trops"
                    :key="i"
                    :src="trop.src"
                    height="100%"
                    >
                    <v-sheet
                        :src="trop.src"
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                </template>
            </v-col>
            </v-row>
        </v-container>

        <v-container fluid class="section-gallery" id="external" style="max-width: unset; margin:0;">
            <v-row align="center">
                <v-col lg="12" sm="12" align="center"  data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <h1>External websites with pictures from our scouts meetings!</h1>
                </v-col>
            </v-row>
            <v-row style="margin:0; padding:0" >
                <v-col lg="12" id="external-links" style="margin:0; padding:0" >
                    <div class="hover">
                    <a href="http://vesterhavsgruppen.neffets.dk/" target="_blank" > 
                    <div class="img1" id="first"  >
                        <figure>
                        <v-img style="width:100%; height:100%;" class="hov" :src="require('../assets/m1373670481.jpg')"><p id="tag">Sommerlejr for Junior og trop til Kulsø 2013</p></v-img>
                        </figure>
                    </div>
                    </a>
                    <a href="http://kulso2014.neffets.dk/" target="_blank"> 
                    <div class="img1" id="first" >
                        <figure>
                        <v-img style="width:100%; height:100%;" class="hov"  :src="require('../assets/m1404506314.jpg')"><p id="tag">Sommerlejr for minier på Kulsø 2014</p></v-img>
                        </figure>
                    </div>
                    </a>
                    <a href="http://houensodde.neffets.dk/" target="_blank"> 
                    <div class="img1" id="first">
                        <figure>
                        <v-img style="width:100%; height:100%;" class="hov"  :src="require('../assets/juniortor.jpg')"><p id="tag">Juniorsommerlejr på Houens Odde 2015</p></v-img>
                        </figure>
                    </div>
                    </a>
                    <a href="http://tydal.neffets.dk/" target="_blank"> 
                    <div class="img1" id="first">
                        <figure>
                        <v-img style="width:100%; height:100%;" class="hov"  :src="require('../assets/PR-uden-skilte-lille-768x511.jpg')"><p id="tag">Gruppesommerlejr til Tydal 2016</p></v-img>
                        </figure>
                    </div>
                    </a>
                    <a href="https://www.facebook.com/Vesterhavsgruppens-juniorer-p%C3%A5-sommerlejr-2019-455957885192715/?modal=admin_todo_tour" target="_blank"> 
                    <div class="img1" id="first">
                        <figure>
                        <v-img style="width:100%; height:100%; " class="hov"  :src="require('../assets/65768165_459424314846072_275482741418491904_n.jpg')"><p id="tag">Juniorsommerlejr på Forlev 2019</p></v-img>
                        </figure>
                    </div>
                    </a></div>


                </v-col>
            </v-row>
        </v-container>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'Gallery',
  components: {
    // HelloWorld
    Title,
  },
  data () {
    return {


        x:0,
        y:0,
        speed: 0,
            korpslejrs: [
                {
                    src: require('../assets/2009/DSC03998.jpg')
                },
                {
                    src: require('../assets/2009/DSC04031.jpg')
                },
                {
                    src: require('../assets/2009/DSC04037.jpg')
                },
                {
                    src: require('../assets/2009/DSC04038.jpg')
                },
                {
                    src: require('../assets/2009/DSC04062.jpg')
                },
                {
                    src: require('../assets/2009/DSC04140.jpg')
                },
                {
                    src: require('../assets/2009/DSC04197.jpg')
                },
                {
                    src: require('../assets/2009/DSC04264.jpg')
                },
                {
                    src: require('../assets/2009/DSC04384.jpg')
                },
                {
                    src: require('../assets/2009/DSC04482.jpg')
                },
                {
                    src: require('../assets/2009/IMG_0468.jpg')
                },
                {
                    src: require('../assets/2009/IMG_0536.jpg')
                },
                {
                    src: require('../assets/2009/IMG_0576.jpg')
                },
                {
                    src: require('../assets/2009/IMG_0609.jpg')
                },
                {
                    src: require('../assets/2009/IMG_0631.jpg')
                },
                {
                    src: require('../assets/2009/IMG_0669.jpg')
                },
                {
                    src: require('../assets/2009/P1010083.jpg')
                },
                {
                    src: require('../assets/2009/P1030625.jpg')
                },
                {
                    src: require('../assets/2009/P1030633.jpg')
                },

            ],
            gruppeturs: [
                {
                    src: require('../assets/2010/IMAG0013.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0015.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0018.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0020.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0021.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0022.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0025.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0027.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0030.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0034.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0036.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0040.jpg')
                },
                {
                    src: require('../assets/2010/IMAG0044.jpg')
                },

            ],
            juniors: [

                {
                    src: require('../assets/2011/DSCF3490.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3504.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3535.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3537.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3555.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3556.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3562.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3565.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3593.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3602.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3605.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3618.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3653.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3691.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3702.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3721.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3728.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3733.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3759.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3776.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3804.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3923.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3950.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3956.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3963.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3968.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3971.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3977.jpg')
                },
                {
                    src: require('../assets/2011/DSCF3993.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4012.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4019.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4027.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4028.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4043.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4044.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4054.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4079.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4087.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4098.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4108.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4121.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4124.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4156.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4167.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4170.jpg')
                },
                {
                    src: require('../assets/2011/DSCF4173.jpg')
                },
                {
                    src: require('../assets/2011/IMGP1025.jpg')
                },

            ],
             trops: [
                {
                    src: require('../assets/2011T/DSC03932.jpg')
                },
                {
                    src: require('../assets/2011T/DSC03937.jpg')
                },
                {
                    src: require('../assets/2011T/DSC03944.jpg')
                },
                {
                    src: require('../assets/2011T/DSC03946.jpg')
                },
                {
                    src: require('../assets/2011T/DSC04299.jpg')
                },
                {
                    src: require('../assets/2011T/DSC04301.jpg')
                },
                {
                    src: require('../assets/2011T/DSC04318.jpg')
                },
                {
                    src: require('../assets/2011T/DSC04328-2.jpg')
                },
                {
                    src: require('../assets/2011T/DSC04329.jpg')
                },
                {
                    src: require('../assets/2011T/DSC04331.jpg')
                },
                {
                    src: require('../assets/2011T/DSC04333.jpg')
                },
                {
                    src: require('../assets/2011T/DSC04335.jpg')
                },
                {
                    src: require('../assets/2011T/DSC04338-2.jpg')
                },
                {
                    src: require('../assets/2011T/DSC04340.jpg')
                },

            ],
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
@mixin section-gal {
  display: flex;
  align-items: left;
  justify-content: center;
  min-height: 70vh;
  margin: 0;
}

.section-gallery {
  @include section-gal();
  background-color: #eee;
  color: rgb(35, 33, 56);
  
}

.button-design {
    // body
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        width: max-content;
        height: 40px;
        margin: 0;
        // style
        text-align: center;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 0;
        background: white;
        //border
        border-style: solid;
        border-width: 4px;
        border-color: #303960;
        border-radius: 0;

        h4 {
            font-family: 'Lato', sans-serif;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 0;
            padding: 0 8px 0 8px;
            color: #303960;
        }
        box-shadow: 0 4px 0 #637CDF;
        &:hover {
            box-shadow: 0px 4px 16px rgba($color: #3D414D, $alpha: 0.5);
            box-shadow: 0 2px 0 #637CDF;
        }
}

.gal-container{
    padding: 70px 10vw 0 10vw;

}
#carousels{
    display: flex;
    flex-direction: column;
}


#car-col{
    padding:0;
    margin-bottom: 10vh;
}
.img1{
    width: 19vw;
    height: 19vw;
    margin-left: 1vw;
}
#external{
    display: flex;
    flex-direction: column;
}
#external-links{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    

}
#first{
    margin-left: 0;
}

#tag{
    z-index: 1111;
    color:white;
    font-family: 'Lato', sans-serif;
    font-size: 1.2vw;
    text-align: center;
    font-weight: 500;
    margin: 3vh;
    display: flex;
    justify-content: center;
    text-shadow: 2px 2px 2px black;


}
a{
    text-decoration: none;

}
figure{
    width: 19vw;
    height: 19vw;

}
.hover{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
}
.hover figure {
	background: #49BFA3;

}
.hover figure .hov {
	opacity: 1;
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover figure:hover .hov {
	opacity: .5;
    -webkit-filter: contrast(150%);
	filter: contrast(150%);
}
#button-gallery{

    width: 700px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
}
#main-img {
    max-width: 250px;
    margin: auto;
    z-index: 1;
}
#aparat{

  z-index: 10;
  width: 100%;
  position: relative;
  left: 40px;
}
#leafy1{
  position: absolute;
  z-index: 4;
  margin: -350px 0 0 120px;
  max-width: 700px ;
}
#leafy2{
  position: absolute;
  z-index: 4;
  margin: -350px 0 0 -120px;
  max-width: 300px ;

}
@media screen and (max-width:600px) {
    .gal-container{
        padding: 10vh 24px 10vh 24px

    }
    #button-gallery{

        width: auto;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
    }
    #external-links{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    }
    .img1{
    width: 70vw;
    height:70vw;
    margin-left:0;
    }
    figure{
        width: 70vw;
        height: 70vw;
        margin: 2vh 0 0 0

    }
    .hover{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 100px 0 100px 0;
    }
    #tag{
    z-index: 1111;
    color:white;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    margin: 3vh;
    display: flex;
    justify-content: center;
    text-shadow: 2px 2px 2px black;


}
    #mobile-pad{
        padding-bottom: 100px ;
    }
    #leafy1{

    right: 5px;
    top:900px;
    margin: 0;
    max-width: 700px ;
    z-index: 3;
    }

    #leafy2{

    left: 50px;
    top:900px;
    margin: 0;
    max-width: 700px ;
    z-index: 2;

    }

}
</style>