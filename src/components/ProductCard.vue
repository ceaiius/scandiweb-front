<template>
  <div class="p-4 w-80 relative">
    <div class="absolute top-8 left-8">
      <input
        :id="id"
        :value="value"
        type="checkbox"
        class="delete-checkbox"
        v-model="selectedBoxes"
        @change="$emit('selected-boxes', id, selectedBoxes)"
      />
    </div>
    <div
      class="flex rounded-lg h-full p-8 flex-col justify-center items-center shadow-[0px_0px_1px_1px_#1a202c] text-gray-700 bg-transparent border border-solid border-black"
    >
      <h2 class="font-medium">{{ sku }}</h2>
      <h2 class="font-medium">{{ name }}</h2>
      <h2 class="font-medium">{{ price }} $</h2>
      <h2 class="font-medium">
        {{
          type == 1
            ? 'Size: ' + size + ' MB'
            : type == 2
              ? 'Weight: ' + weight + ' KG'
              : 'Dimensions: ' + height + 'x' + width + 'x' + length
        }}
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps([
  'sku',
  'name',
  'price',
  'attribute',
  'id',
  'value',
  'type',
  'size',
  'length',
  'height',
  'width',
  'weight'
])
const selectedBoxes = ref()
</script>
