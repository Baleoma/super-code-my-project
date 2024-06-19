<template>
  <div class="flex">
    <img style="width: 120px; height: 120px" :src="Image" alt="Кросовки" />
    <div class="my-auto">
      <p class="mb-3">{{ Name }}</p>
      <p>{{ Price }}</p>
    </div>
    <img
      @click="removeToCart(Id)"
      class="ml-auto cursor-pointer"
      src="@/assets/image/trash.svg"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  removeToCart: Function,
  Id: Number,
  Name: String,
  Image: String,
  Price: String,
});
</script>

<style></style>
