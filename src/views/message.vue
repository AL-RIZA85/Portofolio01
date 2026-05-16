<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const messages = ref([])

const getMessages = async () => {

    try {

        const response = await axios.get(
             'https://backend-porto-production-0ed8.up.railway.app/messages'
        )

        messages.value = response.data

    } catch (error) {

        console.log(error)

    }

}

onMounted(() => {
    getMessages()
})

const logout = () => {

    localStorage.removeItem('adminAuth')

    window.location.href = '/'

}
</script>

<template>

    <div class="min-h-screen bg-gray-100 p-4 md:p-10">

        <h1 class="text-2xl md:text-4xl font-bold mb-6 md:mb-10">
            Message
        </h1>

        <div v-for="message in messages" :key="message._id" class="bg-white p-4 md:p-6 rounded-xl shadow mb-4 md:mb-5">

            <h2 class="text-lg md:text-2xl font-bold">
                {{ message.name }}
            </h2>

            <p class="text-gray-500 mb-2 md:mb-3 text-sm md:text-base">
                {{ message.email }}
            </p>

            <p class="text-gray-700 text-sm md:text-base">
                {{ message.message }}
            </p>

        </div>

        <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded text-sm md:text-base hover:bg-red-600 transition-colors">
            Logout
        </button>
    </div>

</template>