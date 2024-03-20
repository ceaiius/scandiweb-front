<template>
    <nav class="mt-6">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">Product List</span>
            <div class=" w-full md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                    <li>
                        <TheButton :name="addButton" @click="$emit('add')" />
                    </li>
                    <li>
                        <TheButton :name="deleteButton" :id="id" @click="$emit('cancel')" />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>

import TheButton from '../components/TheButton.vue';

defineProps(['addButton', 'deleteButton', 'id'])
</script>