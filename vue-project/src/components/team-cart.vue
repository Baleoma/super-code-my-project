<template>
  <div>
    <img
      style="width: 367px"
      src="@/assets/image/Mask Group (3).jpg"
      alt="Здесь должна была быть картинка)"
    />
    <h3>{{ name }}</h3>
    <p>{{ job }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  name: String,
  job: String,
  image: String,
});
</script>
