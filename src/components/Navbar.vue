<script setup lang="ts">
import { openBlock } from 'vue';

</script>

<template>
<nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow">
    <img src="../Assets/f1.png" alt="logo" class="h-10">
    <span class="text-xl font-bold"></span>
    <ul class="flex gap-8 text-sm font-medium w-full  px-5 justify-end ">
        <li><a href="/" class=" hover:text-yellow-300"> home </a></li>
        <li><a href="/About" class=" hover:text-yellow-300">About</a></li>
        <li><a href="/service"class=" hover:text-yellow-300">service</a></li>
        <li><a href="/contact"class=" hover:text-yellow-300">contact</a></li>
       

        <li class="relative group">
            <a href="#" class="hover:text-yellow-300">Gallery<span> v </span></a>
            <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <li><a href="#" class="block px-4 py-2 hover:bg-green-700">images</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-green-700">videos</a></li>
            </ul>

        </li>
        <li class="relative group">
            <a href="#" class="hover:text-yellow-300">Destination<span> v </span></a>
         <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <li><a href="/kigali" class="block px-4 py-2 hover:bg-green-700">kigali</a></li>
          <li><a href="/southern" class="block px-4 py-2 hover:bg-green-700">southern</a></li>
          <li><a href="/western" class="block px-4 py-2 hover:bg-green-700">western</a></li>
          <li><a href="/northern" class="block px-4 py-2 hover:bg-green-700">northern</a></li>
           <li><a href="/eastern" class="block px-4 py-2 hover:bg-green-700">eastern</a></li>
          </ul>
         </li>
        <li><a href="#" class="hover:text-yellow-300">contact</a></li>
    </ul>
</nav>  
</template> 