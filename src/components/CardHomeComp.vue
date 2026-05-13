<script setup>
import { onMounted } from 'vue'
import bestF from '../assets/bestF.jpg'
import casual from '../assets/casual.jpeg'
import partTime from '../assets/partTime.jpeg'
import wk from '../assets/wk.jpeg'

// onMounted(() => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // reset animasi supaya bisa replay
//         entry.target.classList.remove('show')
//         void entry.target.offsetWidth // force reflow
//         entry.target.classList.add('show')
//       } else {
//         entry.target.classList.remove('show')
//       }
//     })
//   }, {
//     threshold: 0.2
//   })

//   document.querySelectorAll('.imgTodo')
//     .forEach(el => observer.observe(el))
// })
</script>

<template>
    <div class="grid grid-cols-4 m-20 imgTodo">
        <img :src="wk" class="imgTodo  w-100 aspect-auto rounded-2xl mt-10 animate-fade-in-up [animation-delay:0.5s] border-3 border-white"  alt="profile" />
        <img :src="casual" class="imgTodo w-100 aspect-auto rounded-[90px] animate-fade-in-up [animation-delay:0.4s] border-3 border-white"  alt="profile" />
        <img :src="bestF" class="imgTodo w-100 aspect-auto rounded-2xl mt-10 animate-fade-in-up [animation-delay:0.3s] border-3 border-white"  alt="profile" />
        <img :src="partTime" class="imgTodo w-100 aspect-auto rounded-[90px] mt-20 animate-fade-in-up [animation-delay:0.2s] border-3 border-white" alt="profile" />
    </div>
</template>

<style scoped>
/* .imgTodo.show {
  animation: fade-in-up 0.6s ease-out forwards;
} */
</style>