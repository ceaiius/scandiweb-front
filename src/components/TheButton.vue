<template>
  <button
    :id="id"
    class="shadow-[0px_0px_1px_1px_#1a202c] text-gray-700 bg-transparent border border-solid border-black hover:text-black font-bold uppercase text-xs px-4 py-2 rounded outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button"
  >
    {{ name }}
  </button>
</template>

<script setup>
defineProps(['name', 'id'])
</script>
