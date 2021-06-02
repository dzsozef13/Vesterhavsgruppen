<template>
    <v-container class="sticky-note">
          <h1>{{ name }}</h1>
          <h2>{{ date }}</h2>
          <h4>{{ groups }}</h4>
          <v-img  class="tape" contain :src="require(`@/assets/tape.svg`)"/>
    </v-container>
</template>

<script>
export default {
    props: [
      "name",
      "date",
      "groups"
    ]
}
</script>

<style lang="scss">

.sticky-note {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  height: max-content;
  max-width: 325px;
  min-width: 300px;
  padding: 24px;
  margin: 24px auto 24px auto;
  background-color: white;

  h1 {
    font-family: 'Merriweather', serif;
    font-size: 24px;
    font-weight: bold;
    margin: 16px 0 16px 0;
    color: #303960;
  }

  h2 {
    font-family: 'Merriweather', serif;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 0 0;
    color: #49BFA3;
  }

  h4 {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 16px;
    color: #303960;
  }

  .tape {
    position: absolute;
    z-index: 999;
    margin: -35px 0 0 100px;
    width: 60px;
  }
}

</style>