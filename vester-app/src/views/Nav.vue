<template>
  <v-app id="burger-nav">
    
      <v-container id="burger-links">
        <router-link v-for="(index, i) in routes"
            :key="i"
            :to="index.path">{{ index.text }}</router-link>
      </v-container>

  </v-app>
</template>

<script>

export default {
  name: 'Nav',
  data() {
    return {
      routes: [
        {
          text: 'Home',
          path: '/',
        },
        {
          text: 'Gallery',
          path: '/gallery',
        },
        {
          text: 'Contact',
          path: '/contact',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #burger-nav {
    position: fixed;
    overflow-y: hidden;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: #637CDF;
    
    #burger-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 30vh;

      a {
      font-family: 'Merriweather';
      font-weight: bold;
      font-size: 48px;
      color: #EEE;
      text-decoration: none;
      padding: 8px 0 8px 0;
      // text-shadow: 0 0 32px rgba($color: #3D414D, $alpha: 0.5);

      &:hover {
        color: #FFF;
        // text-shadow: 0 0 16px rgba($color: #3D414D, $alpha: 0.5);
      }
    }
    }

    
  }
</style>