<template>
  <TheNav
    addButton="add"
    deleteButton="mass delete"
    @add="router.push({ name: 'add' })"
    id="delete-product-btn"
    @cancel="deleteItems"
  />
  <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
  <div class="flex flex-wrap justify-center mt-10">
    <ProductCard
      v-for="item in array"
      :id="item.id"
      :key="item.id"
      :sku="item.sku"
      :name="item.name"
      :price="item.price"
      :attribute="item.attribute"
      :value="item.id"
      @selected-boxes="handleSelect"
    />
  </div>
  <TheFooter />
</template>

<script setup>
import TheNav from '@/components/TheNav.vue'
import ProductCard from '@/components/ProductCard.vue'
import TheFooter from '@/components/TheFooter.vue'
import router from '@/router'
import { ref } from 'vue'

const selectedBoxes = ref([])

const handleSelect = (id, value) => {
  if (value === true) {
    selectedBoxes.value.push(id)
  } else if (value === false) {
    selectedBoxes.value = selectedBoxes.value.filter((e) => e != id)
  }
}

const array = ref([
  {
    id: 1,
    sku: 131,
    name: 'idk',
    price: 200,
    attribute: '200kg'
  },

  {
    id: 2,
    sku: 200,
    name: 'idk',
    price: 400,
    attribute: '400kg'
  }
])

const deleteItems = () => {
  array.value = array.value.filter((item) => !selectedBoxes.value.includes(item.id))
}
</script>
