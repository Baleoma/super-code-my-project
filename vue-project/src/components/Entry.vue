<template>
  <div class="h-full flex justify-center">
    <div class="my-auto p-10 bg-red-100 rounded-xl">
      <h1 class="mb-5">Войти</h1>
      <div class="border-4 border-indigo-500 rounded-xl">
        <div class="m-4">
          <div class="mb-4">
            <div class="mb-4">
              <p>имя</p>
              <input
                v-model.lazy="store.entryName"
                class="border-2 border-black"
                type="text"
              />
            </div>
            <div>
              <p>Пароль</p>
              <input
                v-model.lazy="store.entryPassword"
                class="border-2 border-black"
                type="password"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <router-link
              @click.native="store.checkValidityEntry"
              class="p-1 border-2 border-black"
              :to="store.entryNavigation ? 'Catalog' : ''"
            >
              Войти
            </router-link>
            <button
              @click="store.changeRegistration"
              class="p-1 border-2 border-black bg-black text-white"
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/Store/Store";
const store = useStore();
</script>
