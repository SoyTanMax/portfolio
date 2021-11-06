<template>
  <div class="app">
    <router-view/>
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  setup() {
    
  }
}
</script>


<style>
* { 
  margin: 0 !important; 
}
.app{
  background: linear-gradient(76.4deg, #6935DA 7.03%, #1CAFCF 100%);
}
</style>
