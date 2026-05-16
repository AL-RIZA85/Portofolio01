<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <div class="m-15">
    <!-- Desktop Navigation -保持不变 -->
    <div class="hidden md:flex gap-20 justify-between">
      <div>
        <router-link to="/Message">
          <h1 class="animate-fade-in-down [animation-delay:0.1s]">Upfluence</h1>
        </router-link>
      </div>
      <div>
        <ul class="flex gap-5">
          <li @click="$emit('scroll', 'about')" class="animate-fade-in-down [animation-delay:0.2s] cursor-pointer hover:text-blue-600">about</li>
          <li @click="$emit('scroll', 'career')" class="animate-fade-in-down [animation-delay:0.3s] cursor-pointer hover:text-blue-600">career</li>
          <li @click="$emit('scroll', 'achievement')" class="animate-fade-in-down [animation-delay:0.4s] cursor-pointer hover:text-blue-600">achievement</li>
          <li @click="$emit('scroll', 'project')" class="animate-fade-in-down [animation-delay:0.5s] cursor-pointer hover:text-blue-600">Project</li>
        </ul>
      </div>
      <div>
        <h1 @click="$emit('scroll','quiqckStart')" class="animate-fade-in-down [animation-delay:0.6s] cursor-pointer hover:text-blue-600">quick start</h1>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden flex justify-between items-center px-4">
      <router-link to="/Message">
        <h1 class="text-xl font-bold">Upfluence</h1>
      </router-link>
      <button 
        @click="toggleMobileMenu" 
        class="p-2 rounded-lg focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            v-if="!isMobileMenuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-900/95 backdrop-blur-md mx-4 mt-2 rounded-xl p-6 shadow-lg">
        <ul class="flex flex-col gap-4">
          <li @click="$emit('scroll', 'about'); isMobileMenuOpen = false" class="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-700">about</li>
          <li @click="$emit('scroll', 'career'); isMobileMenuOpen = false" class="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-700">career</li>
          <li @click="$emit('scroll', 'achievement'); isMobileMenuOpen = false" class="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-700">achievement</li>
          <li @click="$emit('scroll', 'project'); isMobileMenuOpen = false" class="cursor-pointer hover:text-blue-600 py-2 border-b border-gray-700">Project</li>
          <li @click="$emit('scroll', 'quiqckStart'); isMobileMenuOpen = false" class="cursor-pointer hover:text-blue-600 py-2">quick start</li>
        </ul>
      </div>
    </transition>
  </div>
</template>