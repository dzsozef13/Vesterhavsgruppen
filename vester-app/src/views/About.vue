<template>
  <div class="about">
      <v-container fluid class="section-1" style="max-width: unset; margin:0;" id="dark">
        <v-row sm="12">
          <v-col lg="6" sm="12" id="about1">
            <Title color="#303960" ttlText="About Us"/>
            <Paragraph color="#303960" prgText="Vi bruger ikke kun kort og kompas til at finde vej. Det er nemmere med GPS. Det andet har vi nemlig lært. "/>
            <Paragraph color="#303960" prgText="Vi følger ikke altid gamle damer over vejen, vi vil hellere gå lange ture, lave bål, riste skumfiduser, bygge med rafter, synge, danse, lege, få skøre ideer og afprøve dem, hygge i soveposen, grine, fnise, spejderdrille."/>
            <Paragraph color="#303960" prgText=" Der er også noget man ikke må: nemlig at mobbe, være lede, ikke hjælpe hinanden. Og vi tør og vil stille krav til vores spejdere."/>
          </v-col>
          <v-col lg="6" id="about1">
            <div>img</div>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid class="section-1" style="max-width: unset; margin:0;" id="dark">
        <v-row lg="12" sm="12">
          <v-col lg="12" sm="12" id="about2">
            
            <h1>Nogle af vores mål er</h1>
            <p class="goals">Vi vil være fremadrettede og beslutsomme</p>
            <p class="goals">Vi tør udvikle børn og unge til at tage del i og ansvar for sig selv og samfundet</p>
            <p class="goals">Vi tør at vise overskud og risikovilje</p>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>

import Title from '@/components/Title.vue'
import Paragraph from '@/components/Paragraph.vue'

export default {
  name:'About',
  components: {
    // HelloWorld
    Title,
    Paragraph,

  }
  
}
</script>

<style lang="scss">
@mixin section {
  display: flex;
  align-items: left;
  justify-content: center;
  min-height: 70vh;
  padding: 0 5vw 0 10vw;
  margin: 0;
}

.section-1 {
  @include section();
  background-color: #eee;
  color: #303960;
}

#mainrow{
  display: flex;
  align-items: center;
}

#about1{
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
}
#about2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#dark{
  color: #303960;
  height: 90vh;
}
.goals{
  color: #303960;
  font-size: 1.5vw;
}

</style>