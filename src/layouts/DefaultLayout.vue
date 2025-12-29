<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main class="flex-1 p-8">
      <slot /> <!-- Aquí irá HomeView, DepartmentView, etc. -->
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>