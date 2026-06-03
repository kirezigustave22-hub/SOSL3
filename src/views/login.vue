<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-3xl font-bold text-center text-blue-600 mb-6">
        Login
      </h2>

      <form @submit.prevent="login">
        <!-- Email -->
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label class="block text-gray-700 mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Remember Me -->
        <div class="flex items-center justify-between mb-4">
          <label class="flex items-center">
            <input type="checkbox" class="mr-2" />
            <span class="text-gray-600">Remember Me</span>
          </label>

          <a href="#" class="text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <!-- Register Link -->
        <p class="text-center mt-4 text-gray-600">
          Don't have an account?
          <RouterLink to="/register" class="text-blue-600 hover:underline">
            Register
          </RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

const login = () => {
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  // Navigate to dashboard after login
  router.push('/dashboard');
};
</script>