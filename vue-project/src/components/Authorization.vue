<template>
  <div class="h-full flex justify-center">
    <div class="my-auto p-10 bg-red-100 rounded-xl">
      <h1 class="mb-5">Регистрация</h1>
      <div class="border-4 w-72 border-indigo-500 rounded-xl">
        <div class="m-4">
          <div class="mb-4 mx-auto w-48">
            <div class="mb-4">
              <p>Имя</p>
              <input
                v-model.lazy="store.name"
                class="border-2 border-black px-2"
                type="text"
              />
            </div>
            <div class="mb-4">
              <p>Email</p>
              <input
                v-model.lazy="store.email"
                class="border-2 border-black px-2"
                type="email"
              />
            </div>
            <div class="mb-4">
              <p>Пароль</p>
              <input
                v-model.lazy="store.password"
                class="border-2 border-black px-2"
                type="password"
              />
            </div>
            <div>
              <p>Повторите пароль</p>
              <input
                v-model.lazy="store.returnPassword"
                class="border-2 border-black px-2"
                type="password"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <button
              @click="store.changeRegistration"
              class="p-1 border-2 border-black"
            >
              Войти
            </button>
            <button
              @click="store.checkValidityAuthorization"
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
