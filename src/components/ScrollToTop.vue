<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const handleScroll = () => {
  // Show button after scrolling 300px
  showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-white text-gray-800 p-3 md:p-4 rounded-full shadow-lg hover:scale-110 hover:bg-blue-50 transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Scroll to top"
    >
      <svg
        class="w-6 h-6 md:w-8 md:h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </transition>
</template>