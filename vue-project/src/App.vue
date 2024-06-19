<script setup>
import { useStore } from "@/Store/Store";
const store = useStore();

import Navigation from "./components/Navigation.vue";
import Draver from "@/components/Draver.vue";
import Order from "@/components/Order.vue";
import Title from "@/components/Title.vue";
import Footer from "./components/Footer.vue";

//import { onMounted, reactive, ref, watch } from "vue";
//import axios from "axios";
</script>

<template>
  <div class="overflow-x-hidden h-dvh text-black">
    <navigation></navigation>
    <Draver
      v-show="store.visibleDraver"
      :changeDraver="store.changeDraver"
      :changeOrder="store.changeOrder"
      :favorites="store.favorites"
      :removeToCart="store.removeToCart"
    ></Draver>
    <Order
      v-show="store.visibleOrder"
      :changeOrder="store.changeOrder"
      :favorites="store.favorites"
      :removeToCart="store.removeToCart"
    >
    </Order>
    <Title
      v-show="store.visibleTitle"
      :Id="store.title.id"
      :Name="store.title.Name"
      :Image="store.title.Image"
      :Price="store.title.Price"
      :Quantity="store.title.Quantity"
      :Title="store.title.Title"
      :deleteTitle="store.deleteTitle"
    >
    </Title>
    <router-view></router-view>
  </div>
</template>
