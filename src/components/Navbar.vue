<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center shadow z-50">
    <RouterLink to="/" class="inline-flex items-center gap-3">
      <img src="../Assets/rw.png" alt="Rwanda Logo" class="h-10 w-10 object-cover rounded-full" />
      <span class="font-bold text-xl">TEMBERA U Rwanda</span>
    </RouterLink>

    <ul class="flex gap-8 text-sm font-semibold ml-auto">
      <li><RouterLink to="/" class="block px-4 py-2 hover:bg-green-700">Home</RouterLink></li>
      <li><RouterLink to="/about" class="block px-4 py-2 hover:bg-green-700">About</RouterLink></li>
      <li><RouterLink to="/contact" class="block px-4 py-2 hover:bg-green-700">Contact</RouterLink></li>
      <li><RouterLink to="/destination" class="block px-4 py-2 hover:bg-green-700">Destination</RouterLink></li>
      <li><RouterLink to="/service" class="block px-4 py-2 hover:bg-green-700">Service</RouterLink></li>

    
      <li class="relative group">
        <span class="hover:text-yellow-300 cursor-pointer inline-flex items-center gap-1">Gallery<span>v</span></span>
        <ul class="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <li><RouterLink to="/images" class="block px-4 py-2 hover:bg-green-700">Images</RouterLink></li>
          <li><RouterLink to="/videos" class="block px-4 py-2 hover:bg-green-700">Videos</RouterLink></li>
        </ul>
      </li>


      <li class="relative group">
        <span class="hover:text-yellow-300 cursor-pointer inline-flex items-center gap-1">Destination<span>v</span></span>
        <ul class="absolute left-0 mt-2 w-44 bg-white text-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <li><RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-700">kigali</RouterLink></li>
          <li><RouterLink to="/northern" class="block px-4 py-2 hover:bg-green-700">northern</RouterLink></li>
          <li><RouterLink to="/eastern" class="block px-4 py-2 hover:bg-green-700">eastern</RouterLink></li>
          <li><RouterLink to="/southern" class="block px-4 py-2 hover:bg-green-700">southern</RouterLink></li>
          <li><RouterLink to="/western" class="block px-4 py-2 hover:bg-green-700">western</RouterLink></li>
        </ul>
      </li>

    </ul>

  </nav>
</template>


