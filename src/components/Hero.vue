<template>
    <div class="hero">
        <svg class="wave" viewBox="0 0 1440 417" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M48 381.785C29.5975 389.969 0 400.118 0 400.118V417H1440V53.5026C1440 53.5026 1312.68 7.40478 1258.5 30.4537C1229.68 42.7171 1250.94 70.957 1278.13 107.045C1302.03 138.784 1330.51 176.594 1333.5 214.944C1342.85 334.782 1261.51 290.175 1162.22 235.718C1091.31 196.831 1011.24 152.92 948.5 160.28C881.598 168.128 830.094 203.597 780.415 237.808C718.276 280.6 658.992 321.426 576 303.773C535.221 295.099 505.135 285.015 478.094 275.951C428.968 259.484 389.89 246.385 315 251.23C238.16 256.2 203.91 281.57 160.816 313.491C132.162 334.716 99.5966 358.838 48 381.785Z" fill="white"/>
            <path d="M1214.39 27.8486C1210.35 35.3134 1204.37 28.9665 1196.74 23.8756C1189.12 18.7846 1180.72 17.1876 1184.75 9.72277C1188.79 2.25796 1196.3 5.17435 1203.92 10.2653C1217.69 15.826 1217.2 22.6437 1214.39 27.8486Z" fill="white"/>
        </svg>
        <img class="astronaut" src="@/assets/astronaut.svg" alt="">
        <img class="stars" src="@/assets/stars.svg" alt="">
        <img class="stars2" src="@/assets/stars2.svg" alt="">
        <img class="green" src="@/assets/green.svg" alt="">
        <img class="red" src="@/assets/red.svg" alt="">
        <img class="planet" src="@/assets/planet.svg" alt="">
       <div class="hero-body">
            <p class="heading has-text-white block">{{ heading }}</p>
            <p class="has-text-white desc">I'm a passionate UX / UI Desginer and a Frontend Web Developer from Mexico.</p>
            <nuxt-link :to="'casestudies'">
                <button class="button mywork is-uppercase">
                    my work
                    <svg class="w-6 h-6 arrow" fill="none" stroke="#6935DA" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
    data () {
        return {
            heading: "Are you looking for a Web Designer / Developer?",
            projects: [],
            hero: true
        }
    }
    }
</script>

<style scoped>
/* helpers */
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
/* background */
.wave{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 96;
}
.stars{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 95;
}
.stars2{
  display: none;
}
.astronaut{
    position: absolute;
    z-index: 97;
    bottom: 8%;
    left: 55%; 
    width: 320px;
}
.green{
    position: absolute;
    width: 100px;
    left: 90%;
    top: 25%;
    z-index: 95;
}
.red{
    position: absolute;
    width: 80px;
    left: 48%;
    bottom: 35%;
    z-index: 95;
}
.planet{
    position: absolute;
    width: 150px;
    left: 65%;
    top: 20%;
    z-index: 95;
}
/* desktop */
.hero{
    position: relative;
    height: 100vh;
    padding-right: 96px;
    padding-left: 96px;
    background: linear-gradient(76.4deg, #6935DA 7.03%, #1CAFCF 100%);
}
.hero-body{
    z-index: 98;
    padding: 48px 0 48px 0;
    max-width: 50%;
}
.columns{
  margin-top: 48px;
}
.heading{
  font-size: 48px;
  font-family: 'Oswald', sans-serif;
  line-height: 60px;
  color: #000000;
  font-weight: bold;
  margin: 52px 0 32px 0 !important;
  animation: dropIn 0.5s ease-in;
}
.desc{
  font-size: 24px;
  margin-bottom: 24px !important;
}
.mywork{
  font-size: 20px;
  padding: 24px 32px;
  border-radius: 10px;
  background: white;
  color: #6935DA;
  font-weight: bold;
  border: none;
  margin-top: 24px;
  animation: dropIn 0.5s ease-in;
}
.mywork:hover{
    color: #6935DA;
    transform: scale(1.03);
}
.arrow{
    margin-left: 8px;
    margin-right: 0;
    width: 26px;
}
/* mobile */
@media screen and (max-width: 769px) {
  /* background */
  .stars{
    display: none;
  }
  .stars2{
    display: flex;
    position: absolute;
    z-index: 95;
    width: 100%;
  }
  .astronaut{
      position: absolute;
      z-index: 97;
      bottom: 3%;
      left: 25%; 
      width: 190px;
  }
  .green{
      position: absolute;
      width: 70px;
      left: 85%;
      top: 65%;
      z-index: 95;
  }
  .red{
      position: absolute;
      width: 60px;
      left: 2%;
      bottom: 40%;
      z-index: 95;
  }
  .planet{
      position: absolute;
      width: 150px;
      left: 50%;
      top: 8%;
      z-index: 95;
  }
  .hero{
    height: 100vh;
    padding-right: 24px;
    padding-left: 24px;
  }
  .hero-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vh;
    padding: 96px 0 0;
  }
  .columns{
    display:flex;
    flex-direction: column-reverse;
    margin-top: 0;
  }
  .heading{
    font-size: 32px;
    font-family: 'Oswald', sans-serif;
    line-height: 42px;
    text-align: center;
  }
  .desc{
    font-size: 18px;
    text-align: center;
    margin-bottom: 24px;
  }
  .button{
    font-size: 18px;
    padding: 18px 20px;
    border-radius: 10px;
    margin-bottom: 0;
    animation: dropIn 0.5s ease-in;
  }
  .section{
    padding-right: 24px;
    padding-left: 24px;
  }
}
/* keyframes */
@keyframes dropIn {
    from{
      opacity: 0;
      transform: translateY(-25px);
    }
    50%{
      opacity: 0.4;
    }
    to{
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>