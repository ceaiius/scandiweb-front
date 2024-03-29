<template>
  <div class="flex justify-center items-center gap-6 pt-6 relative">
    <label :for="id" class="block mb-2 w-24 text-sm pt-2 font-medium text-gray-900">
      {{ label }}</label
    >
    <Field
      :type="type"
      :id="id"
      :name="name"
      :rules="rules"
      class="bg-transparent border border-solid border-black text-gray-900 text-sm block w-80 p-1"
      :placeholder="placeholder"
      v-model="model"
    />
  </div>
  <ErrorMessage :name="name" class="text-sm text-[#D04848]" :class="class" />
</template>

<script setup>
defineProps(['id', 'type', 'placeholder', 'label', 'name', 'rules', 'class'])
import { Field, ErrorMessage } from 'vee-validate'
const model = defineModel()
</script>
