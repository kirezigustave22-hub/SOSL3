<script setup>
//import Home  from './view/home.vue'
 import Navbar from './components/Navbar.vue';
 import { RouterView } from 'vue-router';
 import Footer from './components/Footer.vue';
</script>
<template>
  <Navbar/>
  <RouterView/>
 <!--<home/>--> 
  <Footer/>
</template>

