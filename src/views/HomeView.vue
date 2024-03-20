<template>
  <TheNav addButton="add" deleteButton="mass delete" @add="router.push({ name: 'add' })" id="delete-product-btn" />
  <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700">
  <div class="flex flex-wrap justify-center mt-10">
    <ProductCard v-for="item in array" :id="item.id" :key="item.id" :sku="item.sku" :name="item.name"
      :price="item.price" :attribute="item.attribute" />
  </div>
  <TheFooter />

</template>

<script setup>
import TheNav from '@/components/TheNav.vue';
import ProductCard from '@/components/ProductCard.vue'
import TheFooter from '@/components/TheFooter.vue'
import router from "@/router";
const array = [{
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
}];

</script>
