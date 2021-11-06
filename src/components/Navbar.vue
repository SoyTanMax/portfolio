<template>
    <nav class="navbar">
        <div class="navbar-start">
            <Logo class="logo"/>
        </div>
        <div class="navbar-burger" v-if="showNav == false" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span class="has-text-white"></span>
            <span class="has-text-white"></span>
            <span class="has-text-white"></span>
        </div>
        <div class="navbar-burger" v-else @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span :style="{color: 'hsl(259, 69%, 53%)'}"></span>
            <span :style="{color: 'hsl(259, 69%, 53%)'}"></span>
            <span :style="{color: 'hsl(259, 69%, 53%)'}"></span>
        </div>
        <div class="navbar-end" :class="{ 'is-active': showNav }">
            <ul class="navbar-item">
                <router-link class="link" :to="{ name: 'Home' }">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="is-hidden-desktop">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                </router-link>
                <router-link class="link" :to="{ name: 'Portfolio' }">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="is-hidden-desktop">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Portfolio
                </router-link>
                <router-link class="link" :to="{ name: 'About' }">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="is-hidden-desktop">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    About me
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
  name: 'Navbar',
  components: {
      Logo
  },
  data () {
    return {
      showNav: false
    }
  },
  methods: {
      changeState(){
          this.showNav = !showNav
          this.$emit('changeState', this.showNav)
      }
  }
}
</script>

<style scoped>
    .navbar{
        width: 100%;
        padding: 18px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Nunito', sans-serif;
        padding-right: 96px;
        padding-left: 96px;
    }
    .logo{
        height: 28px;
    }
    a{
        color: rgba(255, 255, 255, 0.692);
        padding-left: 9px;
        padding-right: 9px;
        font-size: 18px;
        transition: 400ms;
    }
    a:hover{
        font-size: 19px;
        color: white;
    }
    .router-link-exact-active{
        font-size: 19px;
        color: white;
    }

@media screen and (max-width: 769px) {
    .navbar{
        padding-right: 12px;
        padding-left: 24px;
    }
    .navbar-burger{
        position: relative;
        z-index: 99;
    }
    .navbar-end{
        display: none;
        transition: 300ms;
    }
    .navbar-end.is-active{
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        background: white;
        height: 100vh;
        width: 80%;
        border-radius: 18px 0 0 18px;
        padding: 18px;
        z-index: 98;
    }
    .navbar-end ul{
        display: flex;
        flex-direction: column;
        padding-top: 54px;
    }
    a {
        display: flex;
        align-items: center;
        color: rgba(105, 53, 218, 0.692);
        font-weight: bold;
        padding: 12px 0;
    }
    a svg{
        height: 26px;
        padding-right: 8px;
    }
    .router-link-exact-active{
        font-size: 19px;
        color: hsl(259, 69%, 53%);
    }
}
</style>