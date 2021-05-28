<template>
  <v-app>
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
    <v-container style="max-width: unset; margin:0;" id="footer">
      <v-row id="inner-footer">
        <v-col lg="5" class="column-footer" id="first-column">
              <h1>Follow us!</h1>
              <div id="fb">
              <v-icon style="font-size: 3em; color: Tomato;">fab fa-facebook</v-icon>
              <p id="pad">FACEBOOK</p>
              </div>

            
        </v-col>
        <v-col lg="7" class="column-footer">
          <div id="sponsor">
            <v-img id="sponsor-logo" :src="require('../src/assets/ok-logo.jpg')"></v-img>
            <h1 id="pad">Our sponsors</h1>
          </div>
          <p>Hver gang nogen bestiller et OK-kort gennem os og hver gang man tanker benzin eller diesel på et kort, der er tilknyttet vores aftale.
            Hvis du er interesseret i at støtte os på denne måde, kan du skrive til inge.thisgaard@mail.dk eller tale med en leder til vores spejdermøder.</p>

        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

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
}
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
  h1{
    font-size: 1.5rem;
  }
  p{
    font-size: 0.8rem;
  }
  .column-footer{
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    padding-bottom: 0;
  }
  #inner-footer{
    display: flex;
    flex-direction: column;
        margin: 0;
    padding-bottom: 0;
  }
  #footer{
    display: flex;
    justify-content: center;

  }
    #fb{
    padding: 3vh 0 0 0;
  }
  #sponsor-logo{
    width: 10vh;
    height: 4vh;
  }

}

</style>