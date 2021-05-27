<template>
<v-app id="home">

  <v-container class="section-1" style="max-width: unset; margin:0;">
    <v-row>
      <v-col class="asd">
        <Title ttlText="Welkommen"/>
        <Paragraph prgText="My challenge was to help Rubea, a local enamelist to create a channel to sell her products and to boost her SoMe reach."/>
        <SquareButton btnText="Bliv Spejder" route="/about"/>
      </v-col>
      <v-col>
        <div>img</div>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="section-1" style="max-width: unset; margin:0;">
    <Title ttlText="About"/>
    <Paragraph prgText="My challenge was to help Rubea, a local enamelist to create a channel to sell her products and to boost her SoMe reach."/>
    <SquareButton btnText="Bliv Spejder" route="/about"/>
  </v-container>

</v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Title from '@/components/Title.vue'
import Paragraph from '@/components/Paragraph.vue'
import SquareButton from '@/components/SquareButton.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Title,
    Paragraph,
    SquareButton
  }
}
</script>

<style lang="scss" scoped>

@mixin section {
  display: flex;
  align-items: left;
  justify-content: center;
  min-height: 100vh;
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

</style>
