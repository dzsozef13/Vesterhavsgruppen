<template>
  <div class="becomescout">

        <v-container fluid class="section-become" style="max-width: unset; margin:0;">
            <v-row align="center" sm="12">
            <v-col lg="6" sm="12" >
                <Title color="#303960" ttlText="Hvis du vil være spejder i Vesterhavsgruppen, kan du"/>
                <p> -Kontakte en af vores gruppeledere, Helén eller Steffen på telefon: 21 67 73 57 / 40 29 26 71 <br><br> eller på mail: kontakt@vesterhavsgruppen.dk 
                    -Besøge os på Bakkevej 14 når den afdeling, der passer til din alder, holder møde.</p>
            </v-col>
            <v-col lg="6" sm="12" align="center" id="button" style="max-width: unset; margin:0;" >
                <FormButton btnText="Indmeldelse I Vesterhavsgruppen" />
            </v-col>
            </v-row>
        </v-container>
        <v-container style="background-color:#eee;" id="mob-but">
          <v-row sm="12" >
            <v-col align="center" sm="12" id="mobile-apply" >
              <div id="form" >
              <FormButton btnText="Indmeldelse i Vesterhavsgruppen"/>
              </div>
            </v-col>
          </v-row>
        </v-container>

          <v-container fluid class="section-become dark" style="max-width: unset; margin:0;">
            <v-row  align="center" sm="12">
            <v-col lg="6" sm="12" >
                <Title color="#eee" ttlText="Spejderen får den første mødedag udleveret 'Velkommen til DDS' pjecen samt et indmeldelseskort."/>
                <Paragraph color="#eee" prgText="Når nye spejdere starter i gruppen får de en lille prøvetid på optil 3 uger, hvorefter spejderen skal indmeldes i gruppen, indmeldelses-blanketten skal afleveres til spejderlederen.
Ved indmeldelse får den nye spejder udleveret en T-shirt med gruppens logo, rabatkort til spejder sport, tørklæde i gruppens farver og en arbejdsstofbog. Når de får deres 1. uniform udleveres divisionsmærke, Vesterhavsgruppen mærke. Arbejdsstof-bogen som er en praktisk bog om udstyr, uniformer, knob og besnørringer, grundregler og værdier, pakkeliste til diverse tur-typer m.m."/>
            </v-col>
            <v-col lg="6" >
              <div>
                <ImageFrame ttlText='"Meetings' filename="bs.jpeg"/>
              </div>
            </v-col>
            </v-row>
        </v-container>

              <v-container fluid class="section-become" style="max-width: unset; margin:0;" id="nogle">
                <v-row lg="12" sm="12" align="center">
                <v-col lg="12" sm="12" align="center" id="about2">
                    <h1 id="betaling-title">Betaling - Gruppen har en valgt kasserer og kontingent o.l. betales via giro eller bank.</h1>
                    <p class="goals"> - Indmeldelsesgebyret dækker bog, T-shirt og tørklæde</p>
                    <p class="goals"> - Kontingent betales halv-årlig i januar og august </p>
                    <p class="goals"> - Betaling for ture, sker direkte til afdelingernes lederne </p>
                </v-col>
                </v-row>
            </v-container>

  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import FormButton from '@/components/FormButton.vue'
import Paragraph from '@/components/Paragraph.vue'
import ImageFrame from '@/components/ImageFrame.vue'

export default {
  name: 'BecomeScout',
  components: {
    // HelloWorld
    Title,
    FormButton,
    Paragraph,
    ImageFrame


  }

}
</script>

<style lang="scss">
@mixin sectionbe {
  display: flex;
  align-items: left;
  justify-content: center;
  min-height: 70vh;
  padding: 5vh 10vw 5vh 10vw;
  margin: 0;
}

.section-become {
  @include sectionbe();
  background-color: #eee;
  color: rgb(35, 33, 56);
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
  height: 120vh;
}
.main-img {
  max-width: 300px;
  display: flex;
  align-content: flex-end;
}

.dark {
  background: url('../assets/Artboard1.png');
  background-size: contain ;
}
#nogle{
  height: auto;
  color: #303960;
  background-color: #eee;
  
}

#betaling-title{
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
#mob-but{
  display: none;
}


 @media screen and (max-width:600px) {
    @mixin sectionbe {

    padding: 5vh 10vw 5vh 10vw;

  }
  #betaling-title{
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
  #miracle{
  padding: 0 6vw 0 6vw;

  }
  #button{
    display: none;
  }
  #mobile-apply{
    padding: 0 0 8px 0;
  }
  #mob-but{
    display: flex;
  }
 




}
</style>