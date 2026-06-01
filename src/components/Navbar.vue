<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center shadow z-50">
    <RouterLink to="/" class="inline-flex items-center gap-3">
      <img src="../Assets/center.jpg" alt="muhazi" class="h-10 w-10 object-cover rounded-full" />
      <span class="font-bold text-xl">TEMBERA U Rwanda</span>
    </RouterLink>

    <ul class=" cursor-pointer hover:yellow-300 flex gap-8 text-sm font-semibold ml-auto">
      <li><RouterLink to="/" class="block px-4 py-2 hover:bg-green-700">home</RouterLink></li>
      <li><RouterLink to="/about" class="block px-4 py-2 hover:bg-green-700">about</RouterLink></li>
      <li><RouterLink to="/contact" class="block px-4 py-2 hover:bg-green-700">Contact</RouterLink></li>
      <li><RouterLink to="/service" class="block px-4 py-2 hover:bg-green-700">Service</RouterLink></li>

      <li class="relative group">
        <span class="hover:text-yellow-300 cursor-pointer inline-flex items-center gap-1">Destination<span>v</span></span>
        <ul class="absolute left-0 mt-2 w-44 bg-green-800 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <li><RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-700">Kigali</RouterLink></li>
          <li><RouterLink to="/northern" class="block px-4 py-2 hover:bg-green-700">Northern</RouterLink></li>
          <li><RouterLink to="/eastern" class="block px-4 py-2 hover:bg-green-700">Eastern</RouterLink></li>
          <li><RouterLink to="/southern" class="block px-4 py-2 hover:bg-green-700">Southern</RouterLink></li>
          <li><RouterLink to="/western" class="block px-4 py-2 hover:bg-green-700">Western</RouterLink></li>
        </ul>
      </li>
      
      <li class="relative group">
        <span class="hover:text-yellow-300 cursor-pointer inline-flex items-center gap-1">GALLERY<span>v</span></span>
        <ul class="absolute left-0 mt-2 w-44 bg-green-800 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <li><RouterLink to="/images " class="block px-4 py-2 hover:bg-green-700">images</RouterLink></li>
          <li><RouterLink to="/videos" class="block px-4 py-2 hover:bg-green-700">videos</RouterLink></li>
         
        </ul> 
          
        
      </li>

    </ul>

  </nav>
</template>


