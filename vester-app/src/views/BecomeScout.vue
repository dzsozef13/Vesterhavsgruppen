<template>
  <div class="becomescout">
        <v-container fluid class="section-1" style="max-width: unset; margin:0;" >
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

  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import FormButton from '@/components/FormButton.vue'

export default {
  name: 'BecomeScout',
  components: {
    // HelloWorld
    Title,
    FormButton


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

</style>