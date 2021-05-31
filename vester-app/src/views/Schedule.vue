<template>
<div class="schedule">
        <v-container fluid class="section-1" style="max-width: unset; margin:0;" >
            <v-row id="mainrow" >
            <v-col class="asd" >
                <Title color="#303960" ttlText="Schedule"/>
                <div id="button-schedule">
                                    <v-container id="component" >
                                        <v-btn id="square-button" 
                                        dark
                                        depressed
                                        tile
                                        @click="$vuetify.goTo('#scouts')"
                                        >
                                            <h4> Spejder </h4>
                                        </v-btn>
                                    </v-container>
                                    <v-container id="component" >
                                        <v-btn id="square-button" 
                                        dark
                                        depressed
                                        tile
                                        @click="$vuetify.goTo('#leder')"
                                        >
                                            <h4> Leder </h4>
                                        </v-btn>
                                    </v-container>
                                    

            </div>
            </v-col>
                  <v-col>
                    <div class="main-img">
                    <v-img :src="require('@/assets/il_home.svg')"></v-img>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="section-1 dark" style="max-width: unset; margin:0;" id="dark-schedule">

                <v-row style="margin:0;" id="row-up">
                    <v-col lg="4" id="head" style="margin:0;">
                        <Title color="#eee" ttlText="Spejder" id="scouts"/>
                    </v-col>
                </v-row>
                <v-row id="row-news" sm="12" style="margin:0;">
                <v-col lg="4" id="left">
                    img
                </v-col>
                <v-col lg="4" id="right">
                    img
                </v-col>
                </v-row>

        </v-container>

        <v-container fluid class="section-1 dark" style="max-width: unset; margin:0;" id="dark-schedule">

                <v-row style="margin:0;" id="row-up">
                    <v-col lg="4" id="head" style="margin:0;">
                        <Title color="#eee" ttlText="Spejder" id="scouts"/>
                    </v-col>
                </v-row>
                <v-row id="row-news" sm="12" style="margin:0;">
                <v-col lg="4" id="left">
                    img
                </v-col>
                <v-col lg="4" id="right">
                    img
                </v-col>
                </v-row>

        </v-container>
</div>
</template>

<script>
import Title from '@/components/Title.vue'
export default {
    name: 'Schedule',
    components: {
        // HelloWorld
        Title,
    },

}
</script>

<style lang="scss">
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

    #button-schedule{
    width: 700px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
        
    }
    #dark-schedule{
    background-color: #303960 ;
    color: #eee;
    height: 120vh;
    display: flex;
    flex-direction: column;
    }
    #left{
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    }
    #right{
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    }
    #head{

        display: flex;
        align-items: flex-end;
        height: 30vh;
        
    }
    #row-news{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    
    }
    #row-up{
        display: flex;
        align-items: center;

    }
    #scouts{
        margin-left: 15vw;
    }
    .dark {
        background: url('../assets/Artboard1.png');
        background-size: contain ;
        }
       

</style>