<template>
  <nav
    class="text-white bg-green-800 px-8 py-4 flex items-center shadow z-50 bg-cover bg-center">
    <ul class="cursor-pointer flex gap-8 text-sm font-semibold ml-auto">
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
          <li><RouterLink to="/images" class="block px-4 py-2 hover:bg-green-700">images</RouterLink></li>
          <li><RouterLink to="/videos" class="block px-4 py-2 hover:bg-green-700">videos</RouterLink></li>
        </ul>
      </li>
       <RouterLink
        to="/login"
        class="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Login
      </RouterLink>

      <RouterLink
        to="/register"
        class="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Register
      </RouterLink>
    </ul>
  </nav>
</template>



