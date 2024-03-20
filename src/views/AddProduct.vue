<template>
  <TheNav addButton="save" deleteButton="cancel" @cancel="router.push({ name: 'home' })" />
  <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700">
  <div class="grid grid-cols-2">
    <div class="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto pl-20 pt-20">
      <form action="" id="product_form">
        <InputField id="sku" type="text" placeholder="#sku" label="SKU" />
        <InputField id="name" type="text" placeholder="#name" label="Name" />
        <InputField id="price" type="number" placeholder="#price" label="Price" />
        <div class="flex justify-center items-center gap-10 pt-4">
          <label for="productType" class="block mb-2 w-44 text-sm pt-2 font-medium text-gray-900"> Type Switcher</label>
          <select id="productType"
            class="bg-gray-50 border border-solid border-black text-gray-900 text-sm focus:gray-red-500 focus:gray-red-500 block w-48 p-2.5"
            @change="handleChange" v-model="type">
            <option disabled value="">Type Switcher</option>
            <option value="dvd">DVD</option>
            <option value="book">Book</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>
        <div v-if="showDvd">
          <InputField id="size" type="text" placeholder="#size" label="Size (MB)" />
        </div>
        <div v-else-if="showBook">
          <InputField id="weight" type="text" placeholder="#weight" label="Weight (KG)" />
        </div>
        <div v-else-if="showFurniture">
          <InputField id="height" type="text" placeholder="#height" label="Height (MB)" />
          <InputField id="width" type="text" placeholder="#width" label="Width (MB)" />
          <InputField id="length" type="text" placeholder="#length" label="Length (MB)" />
        </div>
      </form>
    </div>
    <div></div>
  </div>
  <TheFooter />
</template>

<script setup>
import TheNav from '@/components/TheNav.vue';
import TheFooter from '@/components/TheFooter.vue'
import InputField from '@/components/InputField.vue'
import router from "@/router";
import { ref } from 'vue';
const type = ref('');
const showDvd = ref(false);
const showBook = ref(false);
const showFurniture = ref(false);
const handleChange = () => {
  if (type.value === 'dvd') {
    showDvd.value = true;
    showBook.value = false;
    showFurniture.value = false;
  } else if (type.value === 'book') {
    showBook.value = true;
    showFurniture.value = false;
    showDvd.value = false;
  } else if (type.value === 'furniture') {
    showFurniture.value = true;
    showBook.value = false;
    showDvd.value = false;
  }
}
</script>