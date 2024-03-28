<template>
  <Form id="product_form" @submit="handleSubmit">
    <TheNav addButton="Save" deleteButton="Cancel" @cancel="router.push({ name: 'home' })" type="submit" class="" />
    <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="grid grid-cols-2">
      <div class="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto pl-20 pt-20 relative">
        <InputField id="sku" name="sku" type="text" placeholder="#sku" label="SKU" v-model="formData.sku"
          rules="required" class="absolute top-[140px] left-[200px]" />
        <InputField id="name" name="name" type="text" placeholder="#name" label="Name" v-model="formData.name"
          rules="required" class="absolute top-[200px] left-[200px]" />
        <InputField id="price" name="price" type="number" placeholder="#price" label="Price ($)"
          v-model="formData.price" rules="required" class="absolute top-[260px] left-[200px]" />
        <div class="flex justify-center items-center gap-[70px] pt-6">
          <label for="productType" class="mb-2 w-44 text-sm pt-2 font-medium text-gray-900">
            Type Switcher</label>
          <select id="productType"
            class="bg-gray-50 border border-solid border-black text-gray-900 text-sm focus:gray-red-500 focus:gray-red-500 block w-48 p-2.5"
            @change="handleChange" v-model="type">
            <option disabled value="">Type Switcher</option>
            <option value="dvd" id="DVD">DVD</option>
            <option value="book" id="Book">Book</option>
            <option value="furniture" id="Furniture">Furniture</option>
          </select>
        </div>
        <div v-if="display.showDvd" class="">
          <InputField id="size" name="size" type="text" placeholder="#size" label="Size (MB)" v-model="formData.size"
            attribute="true" rules="required" class="pl-[120px]" />
          <p class="text-sm pl-[120px] text-[#51829B]">Please, select size</p>
        </div>
        <div v-else-if="display.showBook" class="">
          <InputField id="weight" name="weight" type="text" placeholder="#weight" label="Weight (KG)"
            v-model="formData.weight" attribute="true" rules="required" class="pl-[120px]" />
          <p class="text-sm pl-[120px] text-[#51829B]">Please, select weight</p>
        </div>
        <div v-else-if="display.showFurniture" class="">
          <InputField id="height" name="height" type="text" placeholder="#height" label="Height (MB)"
            v-model="formData.height" attribute="true" rules="required" class="pl-[120px]" />
          <InputField id="width" name="width" type="text" placeholder="#width" label="Width (MB)"
            v-model="formData.width" attribute="true" rules="required" class="pl-[120px]" />
          <InputField id="length" name="length" type="text" placeholder="#length" label="Length (MB)"
            v-model="formData.length" attribute="true" rules="required" class="pl-[120px]" />
          <p class="text-sm pl-[120px] text-[#51829B]">Please, select dimensions in HxWxL format</p>
        </div>
      </div>
      <div></div>
    </div>
  </Form>
  <TheFooter />
</template>

<script setup>
import TheNav from '@/components/TheNav.vue'
import TheFooter from '@/components/TheFooter.vue'
import InputField from '@/components/InputField.vue'
import router from '@/router'
import axios from 'axios'
import { Form } from 'vee-validate'
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
    .post('https://scandiweb-api-966ac6c5a83f.herokuapp.com/add', {
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
