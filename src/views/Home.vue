<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import axios from 'axios';
import CardComp from '../components/CardHomeComp.vue';
import NavbarComp from '../components/NavbarComp.vue';

import profile from '../assets/profile.png';

import quranApp from '../assets/projects/quranApp.png'
import tixId from '../assets/projects/tixId.png'
import piggyApp from '../assets/projects/piggyApp.png'
import platzi from '../assets/projects/platzi.png'

import wikrama from '../assets/icons/wikrama.png'
import framework from '../assets/icons/framework.png'
import expressIcon from '../assets/icons/express.png'
import figma from '../assets/icons/figma.png'
import barista from '../assets/icons/barista.png'

import ach1 from '../assets/achivment/1.png'
import ach2 from '../assets/achivment/2.png'
import ach3 from '../assets/achivment/3.png'
import ach4 from '../assets/achivment/4.png'

// scrool fungsi
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
// IntersectionObserver
let observer = null;

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.2 });

    const todoElements = document.querySelectorAll('.todo');
    todoElements.forEach((el) => observer.observe(el));
});

onUnmounted(() => {
    if (observer) observer.disconnect();
    if (autoSlideInterval) clearInterval(autoSlideInterval);
});

const currentIndex = ref(0);
const name = ref('')
const email = ref('')
const message = ref('')



const sendMessage = async () => {

    try {

        await axios.post(
            'http://localhost:3000/api/messages',
            {
                name: name.value,
                email: email.value,
                message: message.value
            }
        )

        alert('Pesan berhasil dikirim')

        name.value = ''
        email.value = ''
        message.value = ''

    } catch (error) {

        console.log(error)

        alert('Gagal mengirim pesan')

    }

}


const projects = [{
    name: "Quran App",
    role: "REACT JS",
    description: "Aplikasi Al-Quran digital dengan fitur membaca, mendengarkan audio murottal, dan terjemahan dalam berbagai bahasa. Dibangun dengan React JS untuk pengalaman pengguna yang responsif.",
    image: quranApp,
    techStack: ["React JS", "Tailwind CSS"],
    features: [
        "Baca Al-Quran dengan terjemahan",
        "Tafsir per ayat",
        "Pencarian surah dan ayat"
    ],
    githubLink: "https://github.com/AL-RIZA85/quran-Appv2.git"
},
{
    name: "TIX ID",
    role: "LARAVEL",
    description: "Platform pemesanan tiket bioskop online dengan fitur pemilihan kursi, pembayaran integrated, dan manajemen jadwal film. Dibangun menggunakan Laravel untuk backend yang robust.",
    image: tixId,
    techStack: ["Laravel", "MySQL", "Tailwind CSS"],
    features: [
        "Pemilihan kursi interaktif",
        "Pembayaran online",
        "Jadwal film real-time",
        "Riwayat pemesanan"
    ],
    githubLink: "https://github.com/AL-RIZA85/TIX-ID-by-Alriza.git"
},
{
    name: "PIGGY APP",
    role: "LARAVEL",
    description: "Aplikasi manajemen keuangan pribadi yang membantu pengguna melacak pemasukan, pengeluaran, dan menabung dengan target keuangan. Dibangun dengan Laravel dan fitur analitik keuangan.",
    image: piggyApp,
    techStack: ["Laravel", "MySQL", "Chart.js", "Bootstrap"],
    features: [
        "Tracking pemasukan & pengeluaran",
        "Target tabungan",
        "Laporan keuangan bulanan",
    ],
    githubLink: "https://github.com/AL-RIZA85/Aplikasi-Tabungan-sparchwein.git"
},
{
    name: "Platzi Fake Stote",
    role: "REACT",
    description: "Aplikasi Ecomerse Demo Untuk Membeli Membuat Pesanan Dan Menambah Pesanan",
    image: piggyApp,
    techStack: ["React", "Public API", "Tailwind"],
    features: [
        "Tracking pemasukan & pengeluaran",
        "Target tabungan",
        "Laporan keuangan bulanan",
    ],
    githubLink: "https://github.com/AL-RIZA85/Platzi-Fake-Store"
}


];

const nextProject = () => {
    currentIndex.value = (currentIndex.value + 1) % projects.length;
};

const prevProject = () => {
    currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length;
};



// Auto-slide projects
let autoSlideInterval = null;

// Mounted tambahan untuk auto slide
onMounted(() => {
    autoSlideInterval = setInterval(() => {
        nextProject();
    }, 6000);
});
</script>

<template>
    <section>
        <NavbarComp @scroll="scrollToSection" class="todo" />

        <div class="todo">
            <div class="flex justify-center mt-50" style="font-family: 'Bebas Neue', sans-serif;">
                <h1 class="text-9xl animate-zoom-in">Welcome to<br> &nbsp; my portfolio</h1>
            </div>
            <small class="flex justify-center text-2xl animate-zoom-in">
                &ensp;Helping creators grow beyond mere numbers From your first upload to millions <br>&ensp; I focus on
                scaling website content and turning it into a real business.
            </small>
        </div>

        <div>
            <CardComp />
        </div>
    </section>

    <section id="career" class="bg-blue-50 py-20 grid grid-cols-1 justify-items-center">
        <!-- Career/About Section -->
        <div
            class="todo about-section bg-gradient-to-br from-white to-blue-200 w-[80%] p-16 rounded-2xl shadow-xl relative mb-10">
            <div class="grid grid-cols-2 gap-10 items-center">
                <div>
                    <h1 class="text-black text-7xl leading-none" style="font-family: 'Bebas Neue', sans-serif;">
                        ABOUT <br>ME

                    </h1>

                </div>

                <div>
                    <ul class="space-y-6 text-gray-800 text-lg leading-relaxed"
                        style="font-family: 'Inter', sans-serif;">
                        <li class="flex items-start gap-4">
                            <img :src="wikrama" class="w-12 h-12 shrink-0" />
                            <p>
                                Saya adalah siswa di <span class="text-blue-600 font-semibold">SMK Wikrama Bogor</span>
                                yang memiliki minat besar di bidang
                                <span class="text-blue-600 font-semibold">Front-End Development</span>.
                            </p>
                        </li>

                        <li class="flex items-start gap-4">
                            <img :src="framework" class="w-20 h-20 shrink-0" />
                            <p>
                                Terbiasa membangun aplikasi web modern dan responsif menggunakan <span
                                    class="text-blue-600 font-semibold">Vue.js</span>, <span
                                    class="text-blue-600 font-semibold">React</span>, <span
                                    class="text-blue-600 font-semibold">Laravel</span>, dan <span
                                    class="text-blue-600 font-semibold">PHP</span>, dengan fokus pada tampilan UI yang
                                menarik dan fungsional.
                                dan fokus pada UI yang modern dan responsif.
                            </p>
                        </li>

                        <li class="flex items-start gap-4">
                            <img :src="expressIcon" class="w-12 h-12 shrink-0" />
                            <p>
                                Selain itu, saya juga memiliki dasar <span
                                    class="text-purple-600 font-semibold">Back-End</span> menggunakan <span
                                    class="text-purple-600 font-semibold">Node.js</span>, <span
                                    class="text-purple-600 font-semibold">Express.js</span>, <span
                                    class="text-purple-600 font-semibold">PHP</span>, dan <span
                                    class="text-purple-600 font-semibold">Laravel</span> untuk memahami alur aplikasi
                                secara menyeluruh.

                            </p>
                        </li>

                        <li class="flex items-start gap-4">
                            <img :src="figma" class="w-12 h-12 shrink-0" />
                            <p>
                                Saya tertarik pada desain dan senang membuat tampilan yang clean, estetik, dan
                                user-friendly menggunakan Figma.

                            </p>
                        </li>

                        <li class="flex items-start gap-4">
                            <img :src="barista" class="w-12 h-12 shrink-0" />
                            <p>
                                Di luar dunia coding, saya juga memiliki pengalaman bekerja part-time sebagai
                                <span class="text-orange-500 font-semibold">barista</span> dan
                                <span class="text-orange-500 font-semibold">server</span> yang melatih komunikasi dan
                                kerja tim.
                            </p>
                        </li>
                    </ul>
                </div>


            </div>

            <!-- Profile Card -->
            <div class="absolute left-70 bottom-15">
                <div
                    class="cursor-pointer transform:perspective(800px)_rotateY(10deg) hover:[transform:perspective(800px)_rotateY(-10deg)] w-90 sm:w-70 p-5 bg-red-600 border rounded-lg shadow-lg group duration-300">
                    <div class="bg-center bg-cover bg-img-bg p-5 rounded-lg">
                        <img width="300px" class="duration-300 group-hover:-translate-x-8" :src="profile"
                            alt="profile image">
                    </div>
                    <div class="text-center mt-4 text-gray-900">
                        <p class="font-bold text-xl">Muhammad Al-RIZA Ramadhan</p>
                    </div>
                </div>
            </div>
        </div>
        <div>

        </div>
        <!-- Achievement Section -->
        <div id="achievement"
            class="about-section bg-gradient-to-br from-blue-200 to-white w-[80%] p-16 rounded-2xl shadow-xl relative border border-black">
            <h1 class="text-black text-7xl leading-none mb-10" style="font-family: 'Bebas Neue', sans-serif;">
                ACHIEVEMENT</h1>

            <div class="grid grid-cols-2 gap-6">

                <img :src="ach1" alt="Achievement 1"
                    class="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img :src="ach2" alt="Achievement 2"
                    class="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img :src="ach3" alt="Achievement 3"
                    class="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img :src="ach4" alt="Achievement 4"
                    class="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
            </div>
        </div>
    </section>

    <!-- Project Section -->
    <section class="bg-blue-50 py-20 flex justify-center">
        <div id="project"
            class="bg-gradient-to-br from-gray-900 to-gray-700 py-20 relative w-[90%] rounded-2xl flex flex-col items-center shadow-2xl">
            <h1 class="text-white text-5xl font-bold text-center mb-10" style="font-family: 'Bebas Neue', sans-serif;">
                MADE BY <br> ME
            </h1>

            <div class="relative w-full flex justify-center items-center min-h-[500px] px-12">
                <!-- Left button -->
                <button @click="prevProject"
                    class="absolute left-0 bg-white p-3 rounded-full shadow hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-300 z-10"
                    aria-label="Previous project">
                    ←
                </button>

                <transition name="slide-fade" mode="out-in">
                    <div :key="currentIndex" class="bg-white w-[80%] rounded-2xl shadow-2xl overflow-hidden">
                        <div class="grid md:grid-cols-2 gap-0">
                            <!-- Image Section -->
                            <div class="relative h-64 md:h-full overflow-hidden bg-gray-200">
                                <img :src="projects[currentIndex].image" :alt="projects[currentIndex].name"
                                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                                <div
                                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div class="flex gap-4">
                                        <a :href="projects[currentIndex].githubLink" target="_blank"
                                            class="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="p-8">
                                <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ projects[currentIndex].name }}</h2>
                                <span class="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm mb-4">{{
                                    projects[currentIndex].role }}</span>

                                <p class="text-gray-600 mb-6 leading-relaxed">
                                    {{ projects[currentIndex].description }}
                                </p>

                                <!-- Tech Stack -->
                                <div class="mb-6">
                                    <h3 class="text-sm font-semibold text-gray-700 mb-2">Tech Stack</h3>
                                    <div class="flex flex-wrap gap-2">
                                        <span v-for="tech in projects[currentIndex].techStack" :key="tech"
                                            class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                            {{ tech }}
                                        </span>
                                    </div>
                                </div>

                                <!-- Features -->
                                <div>
                                    <h3 class="text-sm font-semibold text-gray-700 mb-2">Key Features</h3>
                                    <ul class="space-y-1">
                                        <li v-for="feature in projects[currentIndex].features" :key="feature"
                                            class="text-gray-600 text-sm flex items-center gap-2">
                                            ✓ {{ feature }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>

                <button @click="nextProject"
                    class="absolute right-0 bg-white p-3 rounded-full shadow hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-300 z-10"
                    aria-label="Next project">
                    →
                </button>
            </div>

            <div class="flex gap-3 mt-8">
                <button v-for="(_, idx) in projects" :key="idx" @click="currentIndex = idx"
                    class="h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                    :class="idx === currentIndex ? 'w-8 bg-white' : 'w-3 bg-white/50 hover:bg-white/70'"
                    :aria-label="`Go to project ${idx + 1}`"></button>
            </div>
        </div>
    </section>

    <section id="quiqckStart"
        class=" bg-black text-white min-h-screen flex flex-col justify-between relative overflow-hidden">

        <div class="todo grid grid-cols-2 gap-10 p-16 relative z-10">

            <!-- LEFT -->
            <div class="flex flex-col justify-between">

                <h1 class="text-9xl leading-none font-bold" style="font-family: 'Bebas Neue', sans-serif;">
                    LET'S GROW <br> YOUR WEBSITE
                </h1>

                <div class="flex gap-20 mt-10 text-sm opacity-70">
                    <ul class="space-y-2">
                        <li>
                            <button @click="scrollToSection('career')"
                                class="animate-fade-in-down [animation-delay:0.3s] cursor-pointer hover:text-blue-600">
                                CAREER
                            </button>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/al-riza-4a7255328" target="_blank"
                                class="animate-fade-in-down [animation-delay:0.3s] hover:text-blue-600">
                                LINKEDIN
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/AL-RIZA85" target="_blank"
                                class="animate-fade-in-down [animation-delay:0.3s] hover:text-blue-600">
                                GITHUB
                            </a>
                        </li>
                    </ul>

                    <ul class="space-y-2">
                        <li>
                            <a href="muhammadalriza5@gmail.com"
                                class="animate-fade-in-down [animation-delay:0.3s] hover:text-blue-600">
                                EMAIL
                            </a>
                        </li>

                        <li>
                            <a href="https://wa.me/6287765287245" target="_blank"
                                class="animate-fade-in-down [animation-delay:0.3s] hover:text-blue-600">
                                WHATSAPP
                            </a>
                        </li>

                        <li>
                            <a href="https://instagram.com/igtbebtter" target="_blank"
                                class="animate-fade-in-down [animation-delay:0.3s] hover:text-blue-600">
                                INSTAGRAM
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <!-- form message -->
            <div class="flex items-center">
                <div class="w-full space-y-6">

                    <div>
                        <label class="text-sm opacity-60">SEND YOUR MESSAGE</label>
                    </div>

                    <div>
                        <label class="text-sm opacity-60">NAME</label>
                        <input v-model="name" class="w-full bg-transparent border-b border-gray-600 outline-none py-2">
                    </div>



                    <div>
                        <label class="text-sm opacity-60">MESSAGE</label>
                        <input v-model="message"
                            class="w-full bg-transparent border-b border-gray-600 outline-none py-2">
                    </div>

                    <div>
                        <label class="text-sm opacity-60">YOUR EMAIL</label>
                        <input v-model="email" class="w-full bg-transparent border-b border-gray-600 outline-none py-2">
                    </div>

                    <button @click="sendMessage" class="w-full bg-white text-black py-3 rounded-md mt-6">
                        SUBMIT
                    </button>

                </div>
            </div>

        </div>

        <h1 class="absolute bottom-[0px] left-1/2 -translate-x-1/2 
           text-[590px] leading-none font-bold 
           opacity-10 pointer-events-none z-0" style="font-family:'Bebas Neue', sans-serif;">
            INFLUENCE
        </h1>

    </section>
</template>

<style scoped>
.todo {
    opacity: 0;
    transform: translateY(300px);
    transition: opacity 0.6s ease, transform 2s ease;
}

.todo.show {
    opacity: 1;
    transform: translateY(0);
}

/* Project Carousel Transitions */

.slide-fade-enter-active {
    transition: all 0.5s ease;
}

.slide-fade-leave-active {
    transition: all 0.4s ease;
    position: absolute;
    width: 80%;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateX(80px);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-80px);
}

/* Responsive adjustments */

@media (max-width: 768px) {

    .slide-fade-leave-active,
    .slide-fade-enter-active {
        width: 90%;
    }

    .slide-fade-leave-to,
    .slide-fade-enter-from {
        transform: translateX(0);
    }
}

/* Custom position for profile card */

.absolute.left-70.bottom-15 {
    position: absolute;
    left: 280px;
    bottom: 60px;
}

/* Responsive profile card position */

@media (max-width: 1280px) {
    .absolute.left-70.bottom-15 {
        position: relative;
        left: auto;
        bottom: auto;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
    }
}

/* Grid responsive untuk achievement */

@media (max-width: 768px) {
    .grid-cols-2 {
        grid-template-columns: 1fr;
    }
}

/* Hover effects */

.hover\:scale-105:hover {
    transform: scale(1.05);
}

/* Custom scrollbar */

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>