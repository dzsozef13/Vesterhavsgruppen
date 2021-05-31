<template>
  <div id="calendar" >
    <CalendarComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Paragraph from '@/components/Paragraph.vue'
// import ButtonBlue from '@/components/ButtonBlue.vue'
// import ButtonWhite from '@/components/ButtonWhite.vue'
// import ImageFrame from '@/components/ImageFrame.vue'
import CalendarComponent from '@/components/CalendarComponent.vue'


export default {
  name: 'Calendar',
  components: {
    // HelloWorld
    // Paragraph,
    // ButtonBlue,
    // ButtonWhite,
    // ImageFrame
    CalendarComponent
  },
  
}

</script>

<style lang="scss" scoped>
  #calendar {
    height: 80vh;
    background-color: red;
  }
</style>
