<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const messages = ref([])

const getMessages = async () => {

    try {

        const response = await axios.get(
            'http://localhost:3000/messages'
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

<div class="min-h-screen bg-gray-100 p-10">

    <h1 class="text-4xl font-bold mb-10">
        Message
    </h1>

    <div
        v-for="message in messages"
        :key="message._id"
        class="bg-white p-6 rounded-xl shadow mb-5"
    >

        <h2 class="text-2xl font-bold">
            {{ message.name }}
        </h2>

        <p class="text-gray-500 mb-3">
            {{ message.email }}
        </p>

        <p class="text-gray-700">
            {{ message.message }}
        </p>

    </div>

    <button
@click="logout"
class="bg-red-500 text-white px-4 py-2 rounded">
    Logout
</button>
</div>

</template>