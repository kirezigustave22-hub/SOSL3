<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold text-green-700 mb-4">Kigali City</h1>
    <img
      src="../Assets/city.png"
      alt="Kigali City"
      class="w-full h-64 object-cover rounded-lg mb-6"
    />

    <p class="text-lg text-gray-700 mb-4">
      Kigali is the capital city of Rwanda and one of the cleanest and safest
      cities in Africa. It is the country's economic, cultural, and business
      center.
    </p>

    <h2 class="text-2xl font-semibold mb-4">Popular Attractions</h2>
    <div class="grid gap-6 md:grid-cols-3">
      <div class="rounded-lg overflow-hidden shadow-md bg-white">
        <img src="../Assets/bk.jpg" alt="BK ARENA" class="w-full h-64 object-cover">

          <h3 class="text-xl font-semibold mb-2 p-4"> BK ARENA</h3>
          <p class="text-gray-600">A moving memorial and museum honoring victims and promoting peace and reconciliation.</p>
      </div>
      <div class="rounded-lg overflow-hidden shadow-md bg-white">
        <img src="../Assets/nyandugu.jpg" alt="Nyandugu Ecosystem" class="w-full h-64 object-cover">
        
          <h3 class="text-xl font-semibold mb-2 p-4">Nyandugu Ecosystem</h3>
          <p class="text-gray-600">A landmark venue with modern architecture and thriving business events.</p>
      </div>
      <div class="rounded-lg overflow-hidden shadow-md bg-white p-4">
        <img src="../Assets/center.jpg" alt="Kigali Convention Centre" class="w-full h-64 object-cover">
          <h3 class="text-xl font-semibold mb-2">Kigali Convention Centre</h3>
          <p class="text-gray-600">Creative gallery space featuring local art, workshops, and live performances.</p>
        
      </div>
    </div>
  </div>
</template>