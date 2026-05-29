<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
<nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow">
    <RouterLink to="/" class="inline-flex items-center gap-3">
      <img src="../Assets/rw.png" alt="logo" class="h-10">
      <span class="text-xl font-bold">TEMBERA U Rwanda</span>
    </RouterLink>
    <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">
        <li><RouterLink to="/" class="hover:text-yellow-300">home</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-yellow-300">about</RouterLink></li>
        <li><RouterLink to="/service" class="hover:text-yellow-300">service</RouterLink></li>
        <li><RouterLink to="/contact" class="hover:text-yellow-300">contact</RouterLink></li>
        <li class="relative group">
            <span class="hover:text-yellow-300 cursor-pointer inline-flex items-center gap-1">gallery<span>v</span></span>
            <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <li><a href="#" class="block px-4 py-2 hover:bg-green-700">images</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-green-700">videos</a></li>
            </ul>
        </li>
        <li class="relative group">
            <span class="hover:text-yellow-300 cursor-pointer inline-flex items-center gap-1">destination<span>v</span></span>
            <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <li><RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-700">kigali</RouterLink></li>
              <li><RouterLink to="/southern" class="block px-4 py-2 hover:bg-green-700">southern</RouterLink></li>
              <li><RouterLink to="/western" class="block px-4 py-2 hover:bg-green-700">western</RouterLink></li>
              <li><RouterLink to="/northern" class="block px-4 py-2 hover:bg-green-700">northern</RouterLink></li>
              <li><RouterLink to="/eastern" class="block px-4 py-2 hover:bg-green-700">eastern</RouterLink></li>
            </ul>
         </li>
    </ul>
</nav>
</template>

