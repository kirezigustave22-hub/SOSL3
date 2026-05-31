
<template>
  

    <section class="relative h-screen bg-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      :style="{ backgroundImage:url ('../Assets/ny.png') }">
      <div class="relative text-center px-4">
        <h1 class="text-5xl font-bold mb-4">CLEANLINESS OF THE CITY</h1>
        <p class="text-xl mb-4 text-green-300">
          The country provides you a better view of its nature and climate with cleanliness and security for all.
        </p>
      </div>
      <button class="text-white bg-green-500 text-center px-6 py-3 hover:bg-green-600 transition">
        click here
      </button>
    </section>

    <section class="py-16 bg-white text-gray-900">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Explore the Greatness of KIGALI</h2>
          <p class="text-lg text-green-700">Experience vibrant culture, breathtaking landscapes, and unforgettable journeys across the country.</p>
        </div>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="rounded-lg border border-green-200 p-8 shadow-sm">
            <h3 class="text-2xl font-semibold mb-3">City Ecosystem</h3>
            <p>Discover Kigali's protection of the environment and sustainable development initiatives.</p>
            <img src="../Assets/nyandugu.jpg" alt="Kigali Market" class="w-full h-auto mt-4 rounded-lg shadow-md">
          </div>
          <div class="rounded-lg border border-green-200 p-8 shadow-sm">
            <h3 class="text-2xl font-semibold mb-3">Nature & Adventure</h3>
            <p>Visit the green hills of the north, waterfalls in the east, and lakes in the west.</p>
            <img src="../Assets/kivu.jpg" alt="Nature & Adventure" class="w-full h-auto mt-4 rounded-lg shadow-md">

          </div>
          <div class="rounded-lg border border-green-200 p-8 shadow-sm">
            <h3 class="text-2xl font-semibold mb-3">Culture</h3>
            <p>Enjoy traditional cuisine, music, and community experiences across the regions.</p>
            <img src="../Assets/rwanda.jpg" alt="Culture & Food" class="w-full h-auto mt-4 rounded-lg shadow-md">
          </div>
        </div>
      </div>
    </section>
</template>







