<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-10">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-3xl font-bold text-center text-green-600 mb-6">
        Create Account
      </h2>

      <form @submit.prevent="register">
        <!-- Full Name -->
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Full Name</label>
          <input
            v-model="name"
            type="text"
            placeholder="Enter your full name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Create a password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <!-- Confirm Password -->
        <div class="mb-6">
          <label class="block text-gray-700 mb-2">Confirm Password</label>
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <!-- Register Button -->
        <button
          type="submit"
          class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Register
        </button>

        <!-- Login Link -->
        <p class="text-center mt-4 text-gray-600">
          Already have an account?
          <RouterLink
            to="/login"
            class="text-green-600 hover:underline"
          >
            Login
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
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const register = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }

  console.log({
    name: name.value,
    email: email.value,
    password: password.value,
  });

  alert("Registration successful!");
  // Navigate to login after successful registration
  router.push('/login');
};
</script>

