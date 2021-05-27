<template>
  <div id="app">
    <v-container class="hidden-sm-and-down" id="nav" style="max-width: unset;">
      <div>
        Logo
      </div>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/who">Gallery</router-link>
        <router-link to="/what">Contact</router-link>
        <router-link to="/contact" style="margin-left:32px; padding: 8px;background-color:#ddd;">For Members</router-link>
      </div>
      <!-- <div>
        <router-link to="/contact">For Members</router-link>
      </div> -->
    </v-container>
    <router-view/>
  </div>
</template>

<style lang="scss">

//fonts

//sansita
@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300;400;500;600;700;800;900&display=swap');
//merriweather
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
//lato
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

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
  padding: 0 16vw 0 16vw;
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
</style>