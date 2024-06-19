<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const props = defineProps({
  Id: Number,
  Name: String,
  Price: Number,
  Quantity: Number,
  Image: String,
  putFavorite: Function,
  changeTitle: Function,
});
</script>

<template>
  <div class="text-black w-64 group">
    <div class="relative">
      <img class="z-10" style="width: 280px; height: 293px" :src="Image" />
      <div class="flex">
        <button>
          <img
            @click="changeTitle(Id)"
            class="hidden group-hover:block w-20 h-20 p-5 rounded-full bg-slate-600 hover:bg-black absolute z-20 inset-y-1/3 left-8"
            src="../assets/image/Show.png"
            alt="Описание товара"
          />
        </button>
        <button @click="putFavorite(props.Id)">
          <img
            class="hidden group-hover:block w-20 h-20 p-5 rounded-full bg-slate-600 hover:bg-black active:bg-green-500 absolute z-20 inset-y-1/3 left-32"
            src="../assets/image/trashCart.svg"
            alt="Добавить товар в корзину"
          />
        </button>
      </div>
    </div>
    <div>
      <p>{{ Name }}</p>
      <p>{{ Price }} Рублей</p>
    </div>
  </div>
</template>
