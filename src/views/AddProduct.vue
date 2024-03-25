<template>
  <form action="" id="product_form" @submit.prevent="handleSubmit">
    <TheNav
      addButton="save"
      deleteButton="cancel"
      @cancel="router.push({ name: 'home' })"
      type="submit"
    />
    <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="grid grid-cols-2">
      <div
        class="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto pl-20 pt-20"
      >
        <InputField id="sku" type="text" placeholder="#sku" label="SKU" v-model="formData.sku" />
        <InputField
          id="name"
          type="text"
          placeholder="#name"
          label="Name"
          v-model="formData.name"
        />
        <InputField
          id="price"
          type="number"
          placeholder="#price"
          label="Price"
          v-model="formData.price"
        />
        <div class="flex justify-center items-center gap-10 pt-4">
          <label for="productType" class="block mb-2 w-44 text-sm pt-2 font-medium text-gray-900">
            Type Switcher</label
          >
          <select
            id="productType"
            class="bg-gray-50 border border-solid border-black text-gray-900 text-sm focus:gray-red-500 focus:gray-red-500 block w-48 p-2.5"
            @change="handleChange"
            v-model="type"
          >
            <option disabled value="">Type Switcher</option>
            <option value="dvd">DVD</option>
            <option value="book">Book</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>
        <div v-if="display.showDvd">
          <InputField
            id="size"
            type="text"
            placeholder="#size"
            label="Size (MB)"
            v-model="formData.size"
          />
        </div>
        <div v-else-if="display.showBook">
          <InputField
            id="weight"
            type="text"
            placeholder="#weight"
            label="Weight (KG)"
            v-model="formData.weight"
          />
        </div>
        <div v-else-if="display.showFurniture">
          <InputField
            id="height"
            type="text"
            placeholder="#height"
            label="Height (MB)"
            v-model="formData.height"
          />
          <InputField
            id="width"
            type="text"
            placeholder="#width"
            label="Width (MB)"
            v-model="formData.width"
          />
          <InputField
            id="length"
            type="text"
            placeholder="#length"
            label="Length (MB)"
            v-model="formData.length"
          />
        </div>
      </div>
      <div></div>
    </div>
  </form>
  <TheFooter />
</template>

<script setup>
import TheNav from '@/components/TheNav.vue'
import TheFooter from '@/components/TheFooter.vue'
import InputField from '@/components/InputField.vue'
import router from '@/router'
import axios from 'axios'
import { ref, reactive, computed, watch } from 'vue'
const type = ref('')

const formData = reactive({
  sku: ref(''),
  name: ref(''),
  price: ref(''),
  size: ref(null),
  weight: ref(null),
  height: ref(null),
  width: ref(null),
  length: ref(null)
})

// Hold the display states

const display = reactive({
  showDvd: false,
  showBook: false,
  showFurniture: false
})

// Update types

watch(
  () => type.value,
  (newType) => {
    display.showDvd = newType === 'dvd'
    display.showBook = newType === 'book'
    display.showFurniture = newType === 'furniture'
  }
)

// Get form values

const formDataObject = computed(() => {
  return {
    SKU: formData.sku,
    name: formData.name,
    price: formData.price,
    type: type.value == 'dvd' ? 1 : type.value == 'book' ? 2 : 3,
    size: formData.size,
    weight: formData.weight,
    height: formData.height,
    width: formData.width,
    length: formData.length
  }
})

// Add products

const handleSubmit = () => {
  axios
    .post('http://127.0.0.1:8000/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataObject.value)
    })
    .then((response) => {
      if (response.status == 200) {
        router.push({ name: 'home' })
      }
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
</script>
