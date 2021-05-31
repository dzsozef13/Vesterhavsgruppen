<template>
<v-app>
  <div id="app">
    <v-container class="hidden-md-and-up" style="padding:0;">
      <BurgerButton/>
    </v-container>
    <v-container id="nav" style="max-width: unset;">

      <div>
        <v-img width="240px" id="logo" :src="require('./assets/logo.svg')"></v-img>
      </div>
      <div class="hidden-sm-and-down links">
        <router-link :to= links.route01 >Home</router-link>
        <router-link :to= links.route02 >Gallery</router-link>
        <router-link :to= links.route03 >Contacts</router-link>

        <v-btn id="square-button" v-on:click="test()"
            dark
            depressed
            tile
            >
                <h4>{{ viewChanger.text }}</h4>
        </v-btn>

        <!-- <ButtonBlueSmall class="hidden-sm-and-down" style="margin-left: 32px;" btnText="For Members" route="/"/> -->
        <!-- <router-link id="link" to="/" style=" padding: 8px;background-color:#ddd;">For Members</router-link> -->
      </div>
      <v-btn id="square-button-small" v-on:click="test()" class="hidden-md-and-up"
            dark
            depressed
            tile
            >
                <h4>icon</h4>
        </v-btn>
      <!-- <div>
        <router-link to="/contact">For Members</router-link>
      </div> -->
    </v-container>
    <router-view/>

    <v-container style="max-width: unset; margin:0;" id="footer">
      <v-row id="inner-footer">
        <v-col lg="5" sm="12" class="column-footer" id="first-column">
              <h1>Follow us!</h1>
              <div id="fb">
              <v-icon style="font-size: 3em; color: Tomato;">fab fa-facebook</v-icon>
              <p id="pad">FACEBOOK</p>
              </div>

            
        </v-col>
        <v-col lg="7" sm="12" class="column-footer">
          <div id="sponsor">
            <v-img id="sponsor-logo" :src="require('../src/assets/ok-logoo.svg')"></v-img>
            <h1 id="pad">Our sponsors</h1>
          </div>
          <p>Hver gang nogen bestiller et OK-kort gennem os og hver gang man tanker benzin eller diesel på et kort, der er tilknyttet vores aftale.
            Hvis du er interesseret i at støtte os på denne måde, kan du skrive til inge.thisgaard@mail.dk eller tale med en leder til vores spejdermøder.</p>

        </v-col>
      </v-row>
    </v-container>
  </div>
</v-app>
</template>

<script>

import BurgerButton from '@/components/BurgerButton.vue'

export default {
  name: 'App',
  data() {
    return { 
      links: {
        route01: "/",
        route02: "/gallery",
        route03: "/contact",
      },
      viewChanger: {
        text: "For Members",
        index: 0,
      }
    }
  },
  components: {
    BurgerButton
  },
  methods: {
    test() {
      if (this.viewChanger.index == 0) {
        console.log("yay");
        this.$router.push("/news");
        this.links.route01 = "/news";
        this.viewChanger.text = "For Visitors";
        this.viewChanger.index = 1;
      }
      else {
        console.log("shehs");
        this.$router.push("/");
        this.links.route01 = "/";
        this.viewChanger.text = "For Members";
        this.viewChanger.index = 0;
      }
      
    }
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

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  overflow: hidden;
  cursor: require('./assets/knife-cursor.svg');
}
#footer{
    background-color: #eee;
    height: 47vh;
    color:#303960;
    padding: 0 8vw 0 8vw;
  }
  h1{
    font-family: 'Merriweather', serif;
    font-size: 3rem;
    font-weight: bold;
  }
  p{
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 1.1rem;
  }
  .column-footer{
    height: 47vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start ;
  }
  #fb{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 5vh 0 0 0;
    margin: 0;
  }
  #sponsor{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 2vw;
  }
  #pad{
    padding-left: 2vw;
  }
  #sponsor-logo{
    width: 20vh;
    height: 8vh;
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

  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  a {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 40px;
    font-weight: bold;
    letter-spacing: 0;
    text-decoration: none;
    color: #303960;
    padding: 0 3vw 0 3vw;

    &.router-link-exact-active {
      color: #788DE5;
    }
  }

  #square-button {
        // body
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        width: 150px;
        height: 40px;
        margin: 0;
        margin-left:3vw;
        // style
        text-align: center;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 0;
        background-color: white;
        //border
        border-style: solid;
        border-width: 4px;
        border-color: #303960;

        h4 {
            font-family: 'Lato', sans-serif;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 0;
            padding: 0 8px 0 8px;
            color: #303960;
        }
        box-shadow: 0 4px 0 #637CDF;
        &:hover {
            box-shadow: 0px 4px 16px rgba($color: #3D414D, $alpha: 0.5);
            box-shadow: 0 2px 0 #637CDF;
        }
    }
    #square-button-small {
        // body
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        width: 20px;
        height: 40px;
        margin: 0;
        margin-left:3vw;
        // style
        text-align: center;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 0;
        background-color: white;
        //border
        border-style: solid;
        border-width: 4px;
        border-color: #303960;

        h4 {
            font-family: 'Lato', sans-serif;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 0;
            padding: 0 8px 0 8px;
            color: #303960;
        }
        box-shadow: 0 4px 0 #637CDF;
    }
}

@media screen and (max-width:600px) {
  #logo{
    width: 80%;
  }
  #nav{
    padding-left: 4vw;
  }
  h1{
    font-size: 1.5rem;
  }
  p{
    font-size: 0.8rem;
  }
  #sponsor-logo {
    width: 10vh;
    height: 4vh;
  }
  .column-footer{
    height: max-content;
    margin: 20px;
  }
  #footer{
    height: auto;
  }
  #pad{
    font-size: 27px;
    margin: 0;
  }
}

</style>