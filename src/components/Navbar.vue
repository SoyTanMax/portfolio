<template>
    <nav class="navbar">
        <div class="navbar-start">
            <Logo class="logo"/>
        </div>
        <div class="navbar-end">
            <ul class="navbar-item">
                <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                <router-link class="link" :to="{ name: 'Portfolio' }">Portfolio</router-link>
                <router-link class="link" :to="{ name: 'About' }">About me</router-link>
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
</style>