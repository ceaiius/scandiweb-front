<template>
  <div class="flex justify-center items-center gap-6 pt-4">
    <label :for="id" class="block mb-2 w-16 text-sm pt-2 font-medium text-gray-900">
      {{ label }}</label
    >
    <input
      :type="type"
      id="id"
      class="bg-transparent border border-solid border-black text-gray-900 text-sm block w-80 p-1"
      :placeholder="placeholder"
      v-model="model"
    />
  </div>
</template>

<script setup>
defineProps(['id', 'type', 'placeholder', 'label'])
const model = defineModel()
</script>
