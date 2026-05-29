<script setup>
 import { RouterLink } from 'vue-router';
</script>
<template>
    <!--Hero section-->

    <section class=" relation h-screen bg-screen bg-cover bg-center flex flex-col items-center justify-center text-white "
      style="background-image:url('../src/assets/ny.png')">
     <div class="bg-black/40 bg-opaity-50 absolute inset-0">

     </div>
     <div class="relative text-center px-4">
        <h1 class="text-5xl font-bond mb-4">welcome to  Rwanda</h1>
        <p class="text-xl mb text-green-300">the land  of a thousand of hills</p>

     </div>

      <button class="text-white bg-green-500 text-center px-6 py-3 hover:bg-green-600 transition">
        click here
       </button>
       
    </section>

    <section class="py-16 bg-white text-gray-900">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Explore the Heart of Rwanda</h2>
          <p class="text-lg text-green-700">Experience vibrant culture, breathtaking landscapes, and unforgettable journeys across the country.</p>
        </div>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="rounded-lg border border-green-200 p-8 shadow-sm">
            <h3 class="text-2xl font-semibold mb-3">City Life</h3>
            <p>Discover Kigali's markets, museums, and hilltop views with a local guide.</p>
          </div>
          <div class="rounded-lg border border-green-200 p-8 shadow-sm">
            <h3 class="text-2xl font-semibold mb-3">Nature & Adventure</h3>
            <p>Visit the green hills of the north, waterfalls in the east, and lakes in the west.</p>
          </div>
          <div class="rounded-lg border border-green-200 p-8 shadow-sm">
            <h3 class="text-2xl font-semibold mb-3">Culture & Food</h3>
            <p>Enjoy traditional cuisine, music, and community experiences across the regions.</p>
          </div>
        </div>
      </div>
    </section>

</template>



