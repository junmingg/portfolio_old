<template>
  <Navigation/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #BB86FC;
}

#nav a.router-link-exact-active {
  color: #3700B3;
}
</style>
