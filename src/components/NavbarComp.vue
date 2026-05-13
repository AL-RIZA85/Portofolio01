<script setup>
 
</script>

<template>
    <div class="flex gap-20 justify-between m-15">
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
</template>