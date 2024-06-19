<template>
  <div class="flex pb-2 border-b-2 border-white bg-violet-500 text-white" style="padding: 10px 40px 10px 40px ">
    <img
      class="mr-auto cursor-pointer"
      src="@/assets/image/logo.png"
      alt="Лого"
    />
    <ul class="text-sm flex gap-10 items-center cursor-pointer">
      <router-link to="/Catalog"><li>Каталог</li></router-link>
      <router-link to="/Us"><li>О нас</li></router-link>
      <li>
        <img
          @click="store.changeDraver"
          src="@/assets/image/basket.svg"
          alt="корзина"
        />
      </li>
      <router-link to="Registration">
        <li @click="store.entryNavigation = false">
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "@/Store/Store";
const store = useStore();
</script>
