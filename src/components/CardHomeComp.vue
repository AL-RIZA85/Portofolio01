<script setup>
import bestF from '../assets/bestF.jpg'
import casual from '../assets/casual.jpeg'
import partTime from '../assets/partTime.jpeg'
import wk from '../assets/wk.jpeg'
</script>

<template>
  <!-- Mobile: Single column stack, Desktop: 4 column grid (unchanged) -->
  <div class="imgTodo">
    <!-- Mobile view - stacked vertically -->
    <div class="md:hidden flex flex-col items-center gap-6 px-4 my-10">
      <img :src="wk" class="w-full max-w-sm aspect-auto rounded-2xl border-3 border-white animate-fade-in-up [animation-delay:0.5s]" alt="profile" />
      <img :src="casual" class="w-full max-w-sm aspect-auto rounded-[90px] border-3 border-white animate-fade-in-up [animation-delay:0.4s]" alt="profile" />
      <img :src="bestF" class="w-full max-w-sm aspect-auto rounded-2xl border-3 border-white animate-fade-in-up [animation-delay:0.3s]" alt="profile" />
      <img :src="partTime" class="w-full max-w-sm aspect-auto rounded-[90px] border-3 border-white animate-fade-in-up [animation-delay:0.2s]" alt="profile" />
    </div>

    <!-- Desktop view - original 4 column grid (unchanged) -->
    <div class="hidden md:grid grid-cols-4 m-20 gap-4">
      <img :src="wk" class="w-100 aspect-auto rounded-2xl mt-10 animate-fade-in-up [animation-delay:0.5s] border-3 border-white" alt="profile" />
      <img :src="casual" class="w-100 aspect-auto rounded-[90px] animate-fade-in-up [animation-delay:0.4s] border-3 border-white" alt="profile" />
      <img :src="bestF" class="w-100 aspect-auto rounded-2xl mt-10 animate-fade-in-up [animation-delay:0.3s] border-3 border-white" alt="profile" />
      <img :src="partTime" class="w-100 aspect-auto rounded-[90px] mt-20 animate-fade-in-up [animation-delay:0.2s] border-3 border-white" alt="profile" />
    </div>
  </div>
</template>