<template>
  <div class="becomescout">
        <v-container fluid class="section-1" style="max-width: unset; margin:0; padding-bottom:100px" >
            <v-row id="mainrow" >
            <v-col class="asd" lg="6" >
                <Title color="#303960" ttlText="Hvis du vil være spejder i Vesterhavsgruppen, kan du"/>
                <p>
                    -Kontakte en af vores gruppeledere, Helén eller Steffen på telefon: 21 67 73 57 / 40 29 26 71eller på mail: kontakt@vesterhavsgruppen.dk <br><br>
                    -Besøge os på Bakkevej 14 når den afdeling, der passer til din alder,<br> holder møde.
                </p>
            </v-col>
            <v-col lg="6" id="right-column">
                <FormButton btnText="Indmeldelse I Vesterhavsgruppen" />

            </v-col>
            </v-row>
        </v-container>

          <v-container fluid class="section-1" style="max-width: unset; margin:0;" id="dark">
            <v-row sm="12">
            <v-col lg="6" sm="12" id="about">
                <Title color="#eee" ttlText="Spejderen får den første mødedag udleveret 'Velkommen til DDS' pjecen samt et indmeldelseskort."/>
                <Paragraph color="#eee" prgText="Når nye spejdere starter i gruppen får de en lille prøvetid på optil 3 uger, hvorefter spejderen skal indmeldes i gruppen, indmeldelses-blanketten skal afleveres til spejderlederen.
Ved indmeldelse får den nye spejder udleveret en T-shirt med gruppens logo, rabatkort til spejder sport, tørklæde i gruppens farver og en arbejdsstofbog. Når de får deres 1. uniform udleveres divisionsmærke, Vesterhavsgruppen mærke.Arbejdsstof-bogen som er en praktisk bog om udstyr, uniformer, knob og besnørringer, grundregler og værdier, pakkeliste til diverse tur-typer m.m."/>
            </v-col>
            <v-col lg="6" id="about">
                <div class="main-img">
                <v-img :src="require('@/assets/il_home.svg')"></v-img>
                </div>
            </v-col>
            </v-row>
        </v-container>

              <v-container fluid class="section-3" style="max-width: unset; margin:0;" id="nogle">
                <v-row lg="12" sm="12">
                <v-col lg="12" sm="12" id="about2">
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

export default {
  name: 'BecomeScout',
  components: {
    // HelloWorld
    Title,
    FormButton,
    Paragraph,


  }

}
</script>

<style lang="scss">
#right-column{
    padding-left: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
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
#about2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#nogle{
  height: 60vh;
  color: #303960;
  background-color: #eee;
  
}
#betaling-title{
  margin-bottom: 4vh;
  letter-spacing: 0.2vw;
  font-size: 3vw;
  text-align: center;
}
.goals{
  color: #303960;
  font-size: 1.5vw;
  margin-top: 2vh;
}
</style>