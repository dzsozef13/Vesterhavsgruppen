<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
  padding: 50px;

  a {
<<<<<<< HEAD
=======
    font-weight: 200;
>>>>>>> 5c04720a56c2344700837146ee8d46e2087e544e
    color: black;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
