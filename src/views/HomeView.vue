<template>
  <TheNav addButton="ADD" deleteButton="MASS DELETE" @add="router.push({ name: 'add' })" id="delete-product-btn"
    @cancel="deleteItems" />
  <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
  <div class="flex flex-wrap justify-center mt-10" v-if="products">
    <ProductCard v-for="product in products" :id="product.id" :key="product.id" :sku="product.sku" :name="product.name"
      :price="product.price" :size="product.size" :height="product.height" :length="product.length"
      :weight="product.weight" :width="product.width" :type="product.type" @selected-boxes="handleSelect" />
  </div>
  <TheFooter />
</template>

<script setup>
import TheNav from '@/components/TheNav.vue'
import ProductCard from '@/components/ProductCard.vue'
import TheFooter from '@/components/TheFooter.vue'
import router from '@/router'
import { onMounted, ref } from 'vue'
import axios from 'axios'
const selectedBoxes = ref([])

// Save checked cards in an array

const handleSelect = (id, value) => {
  if (value === true) {
    selectedBoxes.value.push(id)
  } else if (value === false) {
    selectedBoxes.value = selectedBoxes.value.filter((e) => e != id)
  }
}
const products = ref()
onMounted(() => {
  fetchProducts()
})

// Fetch products

const fetchProducts = () => {
  axios.get(`${import.meta.env.VITE_SCANDIWEB_API}get`).then((res) => {
    products.value = res.data
  })
}

// Delete products

const deleteItems = () => {
  axios
    .post(`${import.meta.env.VITE_SCANDIWEB_API}delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: selectedBoxes.value
    })
    .then((response) => {
      if (response.status == 200) {
        fetchProducts()
      }
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
</script>
