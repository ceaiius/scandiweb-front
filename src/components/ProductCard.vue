<template>
    <div class="p-4 w-80 relative ">
        <div class="absolute top-8 left-8">
            <input id="checkbox" type="checkbox">
        </div>
        <div
            class="flex rounded-lg h-full p-8 flex-col justify-center items-center shadow-[0px_0px_1px_1px_#1a202c] text-gray-700 bg-transparent border border-solid border-black">
            <h2 class="font-medium">{{ sku }}</h2>
            <h2 class="font-medium">{{ name }}</h2>
            <h2 class="font-medium">{{ price }}</h2>
            <h2 class="font-medium">Weight: {{ attribute }}</h2>
        </div>
    </div>
</template>

<script setup>
defineProps(['sku', 'name', 'price', 'attribute'])
</script>