<template>
  <div id="app">
    <v-container class="hidden-sm-and-down" id="nav" style="max-width: unset;">
      <div>
        <v-img id="logo" :src="require('./assets/logo.svg')"></v-img>
      </div>
      <div>
        <router-link id="link" to="/">Home</router-link>
        <router-link id="link" to="/who">Gallery</router-link>
        <router-link id="link" to="/what">Contact</router-link>
        <router-link id="link" to="/contact" style=" padding: 8px;background-color:#ddd;">For Members</router-link>
      </div>
      <!-- <div>
        <router-link to="/contact">For Members</router-link>
      </div> -->
    </v-container>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

  #link{
    margin-left: 4vw;
  }

  a {
    font-weight: 400;
    color: #2c3e50;
    text-decoration: none;
    padding: 0 8px 0 8px;

    &.router-link-exact-active {
      color: #788DE5;
    }
  }
@media screen and (max-width:600px) {
  #logo{
    width: 80%;
    margin-left: 7vw;
  }
  #link{
    display: none;
  }
}
}
</style>