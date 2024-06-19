<template>
  <div @click="store.changeOrder">
    <div
      class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-55"
    ></div>
    <div
      @click="store.changeOrder"
      style="margin-left: 250px"
      class="fixed bg-white z-20 mt-36"
    >
      <div class="flex justify-between mb-10">
        <h2>Оформление заказа</h2>
        <p>Заказ 345678</p>
      </div>
      <div class="mb-10">
        <p>Товаров в заказе: 3шт</p>
        <p>Общая сумма заказа: 25 987p</p>
        <div>
          <button>Состав заказа</button>
          <div>
            <SneakerMiniCard
              v-for="item in store.favorites"
              :key="item.id"
              :Name="item.Name"
              :Image="item.Image"
              :Price="item.Price"
              :Id="item.id"
              :removeToCart="store.removeToCart"
            ></SneakerMiniCard>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <input placeholder="Ваше имя" class="bg-zinc-300 h-16 mb-3 w-full" />
        <input
          placeholder="Номер телефона"
          class="bg-zinc-300 h-16 mb-3 w-full"
        />
        <input placeholder="E-mail" class="bg-zinc-300 h-16 mb-3 w-full" />
      </div>
      <button class="bg-orange-500 px-12 py-5">Оформить заказ</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/Store/Store";
const store = useStore();

import SneakerMiniCard from "./SneakerMiniCard.vue";
</script>
