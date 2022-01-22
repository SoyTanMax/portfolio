<template>
  <Hero />
  <Projects id="portfolio"/>
</template>

<script>

import Hero from '@/components/Home/Hero.vue'
import Projects from '@/components/Home/Projects.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Projects
  }
}
</script>

<style scoped>



</style>