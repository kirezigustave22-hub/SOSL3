<script setup>
//import Home  from './view/home.vue'
 import Navbar from './components/Navbar.vue';
 import { useRoute } from 'vue-router';
 import Footer from './components/Footer.vue';
import { computed } from 'vue'; 


const route = useRoute();
const hidelayout = computed(() => route.name === 'Dashboard')
 
</script>
<template>
  <Navbar v-if="!hidelayout" />
  <router-view />
  <!--<home/>--> 
  <Footer v-if="!hidelayout" />
</template>

