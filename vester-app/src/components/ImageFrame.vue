<template>
<div>
    <v-container  v-on:mousemove="parallax" id="frame" class="desktop">
        <div id="img-asd" >
            <v-img style="opacity: 0.9;" contain :src="require(`@/assets/${filename}`)"/>
        </div>
        <h1>{{ ttlText }}</h1>
        <v-img  id="tape" contain :src="require(`@/assets/tape.svg`)"/>
        <v-img  id="leaf01" class="layer" contain data-speed="-2" :src="require(`@/assets/leaf01.svg`)"/>
        <v-img  id="leaf02" class="layer" contain data-speed="2" :src="require(`@/assets/leaf02.svg`)"/>
        <v-img  id="puddle" class="layer" contain data-speed="5" :src="require(`@/assets/puddle.svg`)"/>
        <div id="please" ></div>
    </v-container>

        <v-container id="frame" class="mobile">
        <div id="img-asd" >
            <v-img style="opacity: 0.9;" contain :src="require(`@/assets/${filename}`)"/>
        </div>
        <h1>{{ ttlText }}</h1>
        <v-img  id="tape" contain :src="require(`@/assets/tape.svg`)"/>
        <v-img  id="leaf01"  contain  :src="require(`@/assets/leaf01.svg`)"/>
        <v-img  id="leaf02"  contain  :src="require(`@/assets/leaf02.svg`)"/>
        <v-img  id="puddle" contain  :src="require(`@/assets/puddle.svg`)"/>
        <div id="please" ></div>
    </v-container>
</div>
</template>

<script>
export default {
    props: ['ttlText', 'filename'],
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

<style lang="scss">
    #frame {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: flex-start;
        height: 430px;
        width: 380px;
        top: 50px;
        right: 50px;
        z-index: 599;


        #img-asd {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: flex-start;
            padding: 2px;
            max-width: 350px;
            z-index: 699;
        }

        h1 {
            font-family: 'Sansita Swashed', cursive;
            font-size: 32px;
            font-weight: bold;
            color: #637CDF;
            text-align: left;

            z-index: 699;

        }

        #tape {
            position: absolute;
            z-index: 799;
            margin: -25px 0 0 100px;
            width: 100px;
        }

        #leaf01 {
            position: absolute;
            z-index: 799;
            margin: -110px 0 0 -110px;
            width: 150px;
        }

        #leaf02 {
            position: absolute;
            z-index: 799;
            margin: 270px 0 0 290px;
            width: 150px;
        }
        #puddle {
            position: absolute;
            z-index: 1;
            margin: 100px 0px 0px -100px;
            width: 550px;
        }
        #please{
            background-color: white;
            height: 430px;
            width: 380px;
            margin: -15px 0px 0px -15px;
            position: absolute;
            z-index: 10;

        }

    }
    #frame.mobile {
        display: none;
    }
    .desktop{
        display: flex;
    }

@media screen and (max-width:600px) {
    #frame.mobile {
        display: block;
    }
    #frame.desktop {
        display: none;
    }

    #frame {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: flex-start;
        height: auto;
        width: min-content;
        background-color: white;
        

        #img-asd {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: flex-start;
            padding: 2px;
            max-width: 250px;
        }

        h1 {
            font-family: 'Sansita Swashed', cursive;
            font-size: 32px;
            font-weight: bold;
            color: #637CDF;
        }

        #tape {
            position: absolute;
            z-index: 799;
            margin: -325px 0 0 100px;
            width: 50px;
        }

        #leaf01 {
            position: absolute;
            z-index: 799;
            margin: -350px 0 0 -40px;
            width: 100px;
        }

        #leaf02 {
            position: absolute;
            z-index: 799;
            margin: -90px 0 0 200px;
            width: 100px;
        }
        #please{
            display: none;
        }
        #puddle {
            display: none;
        }
    }
    
}


</style>