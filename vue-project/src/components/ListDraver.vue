<template>
  <div>
    <div
      @click="changeDraver"
      class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-55"
    ></div>
    <div
      style="margin-left: 60vmin"
      class="fixed top-0 left-10 w-96 h-96 bg-white z-20 mt-8"

    >
      <div class="overflow-auto h-80">
        <SneakerMiniCard
          v-for="item in favorites"
          :key="item.id"
          :Name="item.Name"
          :Image="item.Image"
          :Price="item.Price"
          :Id="item.id"
          :removeToCart="removeToCart"
        ></SneakerMiniCard>
      </div>
      <div class="flex justify-between border-t border-black">
        <div>
          <h3>Итого</h3>
          <p></p>
        </div>
        <button @click="changeOrder" class="px-12 py-5 bg-orange-500">
          Перейти в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import SneakerMiniCard from "@/components/SneakerMiniCard.vue";
import { ref } from "vue";

const props = defineProps({
  items: Array,
  favorites: Array,
  removeToCart: Function,
  changeDraver: Function,
  changeOrder: Function,
});

const emit = defineEmits(["addToCart"]);
</script>

<style></style>
