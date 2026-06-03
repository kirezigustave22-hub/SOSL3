<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeMenu = ref('overview')

function handleLogout() {
  console.log('User logged out')
  router.push('/login') 
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">

    <!-- Navbar -->
    <nav class="bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 class="text-2xl font-bold">Dashboard</h1>

      <div class="flex items-center gap-4">
        <span>Welcome, Gustav</span>
        <button @click="handleLogout" class="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </nav>

    <div class="flex">

      <!-- Sidebar -->
      <aside class="w-64 bg-green-800 text-white min-h-screen p-5">
        <h2 class="text-xl font-bold mb-6">Menu</h2>

        <ul class="space-y-4">
          <li>
            <a href="#" class="block hover:text-yellow-300">
              Dashboard
            </a>
          </li>

          <li>
            <a href="#" class="block hover:text-yellow-300">
              Users
            </a>
          </li>

          <li>
            <a href="#" class="block hover:text-yellow-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#" class="block hover:text-yellow-300">
              Reports
            </a>
          </li>

          <li>
            <a href="#" class="block hover:text-yellow-300">
              Settings
            </a>
          </li>
        </ul>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-8">

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-gray-500">Total Users</h3>
            <p class="text-3xl font-bold text-green-700">1,250</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-gray-500">Projects</h3>
            <p class="text-3xl font-bold text-blue-700">85</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-gray-500">Revenue</h3>
            <p class="text-3xl font-bold text-purple-700">$12,500</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-gray-500">Messages</h3>
            <p class="text-3xl font-bold text-red-700">320</p>
          </div>

        </div>

        <!-- Recent Activity -->
        <div class="bg-white rounded-lg shadow mt-8 p-6">
          <h2 class="text-xl font-bold mb-4">Recent Activities</h2>

          <table class="w-full">
            <thead>
              <tr class="border-b">
                <th class="text-left py-3">User</th>
                <th class="text-left py-3">Action</th>
                <th class="text-left py-3">Date</th>
              </tr>
            </thead>

            <tbody>
              <tr class="border-b">
                <td class="py-3">John Doe</td>
                <td>Created a Project</td>
                <td>02/06/2026</td>
              </tr>

              <tr class="border-b">
                <td class="py-3">Alice Smith</td>
                <td>Updated Profile</td>
                <td>01/06/2026</td>
              </tr>

              <tr>
                <td class="py-3">David Lee</td>
                <td>Submitted Report</td>
                <td>31/05/2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Profile Section -->
        <div class="bg-white rounded-lg shadow mt-8 p-6">
          <h2 class="text-xl font-bold mb-4">Profile</h2>

          <div class="flex items-center gap-6">
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              class="w-28 h-28 rounded-full object-cover"
            />

            <div>
              <h3 class="text-2xl font-bold">KIREZI Gustav</h3>
              <p class="text-gray-600">Software Developer</p>
              <p class="text-gray-500 mt-2">
                Passionate about Vue.js, Tailwind CSS, Laravel, and modern web development.
              </p>
            </div>
          </div>
        </div>

      </main>

    </div>
  </div>
</template>