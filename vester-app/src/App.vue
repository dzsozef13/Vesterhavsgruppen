<template>
<v-app>

  <div id="app">
    <v-container id="nav" style="max-width: unset;">
      <div>
        <v-img width="200px" id="logo" :src="require('./assets/logo.svg')"></v-img>
      </div>
      <div class="hidden-sm-and-down" >
        <router-link id="link" to="/">Home</router-link>
        <router-link id="link" to="/who">Gallery</router-link>
        <router-link id="link" to="/what">Contact</router-link>
        <!-- <router-link id="link" to="/" style=" padding: 8px;background-color:#ddd;">For Members</router-link> -->
      </div>
      <ButtonBlueSmall class="hidden-sm-and-down" btnText="For Members" route="/"/>
      <ButtonBlueSmall class="hidden-md-and-up" btnText="icon" route="/"/>
      <!-- <div>
        <router-link to="/contact">For Members</router-link>
      </div> -->
    </v-container>
    <router-view/>
  </div>

</v-app>
</template>

<script>

import ButtonBlueSmall from '@/components/ButtonBlueSmall.vue'

export default {
  name: 'App',
  components: {
    ButtonBlueSmall
  }
}

</script>


<style lang="scss">

//fonts

//sansita
@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300;400;500;600;700;800;900&display=swap');
//merriweather
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
//lato
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');


// #app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
// }

#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: unset;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  padding: 0 7vw 0 7vw;
  background-color: #eee;

  a {
    font-weight: 400;
    color: #2c3e50;
    text-decoration: none;
    padding: 0 8px 0 8px;

    &.router-link-exact-active {
      color: #788DE5;
    }
  }
}

@media screen and (max-width:600px) {
  #logo{
    width: 80%;
  }
}
</style>