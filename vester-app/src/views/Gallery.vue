<template>
  <div class="about">

        <v-container fluid class="section-1" style="max-width: unset; margin:0;" >
            <v-row id="mainrow" >
            <v-col class="asd" >
                <Title ttlText="Gallery"/>
                <SquareButton btnText="Bliv Spejder" route="/about"/>
            </v-col>
            <v-col>
                <div>img</div>
            </v-col>
            </v-row>
        </v-container>

        <v-container fluid class="section-1" style="max-width: unset; margin:0;" >
            <v-row >
            <v-col lg="12" id="car-col" >
                <template>
                    <v-carousel
                        cycle
                        height="600"
                        hide-delimiter-background
                        show-arrows-on-hover
                        id="car"
                    >
                    <template v-slot:prev="{ on, attrs }">
                    <v-btn
                        color="success"
                        v-bind="attrs"
                        v-on="on"
                    >Previous slide</v-btn>
                    </template>
                    <template v-slot:next="{ on, attrs }">
                    <v-btn
                        color="info"
                        v-bind="attrs"
                        v-on="on"
                    >Next slide</v-btn>
                    </template>
                    <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    >
                    <v-sheet
                        :color="colors[i]"
                        height="100%"
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        <div class="display-3">
                            {{ slide }} Slide
                        </div>
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                </template>
            </v-col>
            </v-row>
        </v-container>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import SquareButton from '@/components/SquareButton.vue'

export default {
  name: 'Gallery',
  components: {
    // HelloWorld
    Title,
    SquareButton
  },
  data () {
    return {
            colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
            ],
            slides: [
            'First',
            'Second',
            'Third',
            'Fourth',
            'Fifth',
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@mixin section {
  display: flex;
  align-items: left;
  justify-content: center;
  min-height: 70vh;
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

#mainrow{
  display: flex;
  align-items: center;
  padding: 24px 16vw 24px 16vw;

}
#car-col{
    padding:0;
}

</style>