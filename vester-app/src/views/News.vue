<template>
<div id="news" >

  <v-container fluid class="section-1" style="max-width: unset; margin:0;" >
    <v-row id="mainrow" >
      <v-col class="asd" >
        <Title color="#303960" ttlText="Aktuell"/>
        <Paragraph color="#303960" prgText="Du kan finde en online tilmeldingeblanket ved at trykke på knappen her Covid virus situation"/>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="section-1" style="max-width: unset; margin:0;" id="dark">
    <v-row id="row-news" sm="12">
      <v-col lg="6" id="left">
        img
      </v-col>
      <v-col lg="6" id="right">
        img
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


export default {
  name: 'News',
  components: {
    // HelloWorld
    Title,
    Paragraph,
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
  max-width: 300px;
  display: flex;
  align-content: flex-end;
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
#left{
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
}
#right{
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
#row-news{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 60px;
  padding-right: 70px;
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
