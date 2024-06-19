<template>
  <div>
    <div
      @click="deleteTitle"
      class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-55"
    ></div>
    <div
      style="margin-left: 250px; width: 1140px"
      class="fixed bg-white z-20 mt-10 p-10"
    >
      <div class="flex gap-5 mb-5">
        <img style="width: 520px; height: 460px" :src="Image" />
        <div>
          <div class="flex">
            <p>Артикул: 879876</p>
            <p>В наличии: {{ Quantity }} шт</p>
          </div>
          <h3>{{ Name }}</h3>
          <p>Выберите размер</p>
          <ul class="flex gap-5">
            <li class="border border-gray-400 rounded-md py-1 px-6">36</li>
            <li class="border border-gray-400 rounded-md py-1 px-6">37</li>
            <li class="border border-gray-400 rounded-md py-1 px-6">38</li>
            <li class="border border-gray-400 rounded-md py-1 px-6">39</li>
            <li class="border border-gray-400 rounded-md py-1 px-6">40</li>
          </ul>
          <div class="flex">
            <p>{{ Price }} ₽</p>
          </div>
          <button class="bg-orange-700 py-5 px-44">Заказать</button>
        </div>
      </div>
      <div class="flex">
        <ul class="flex gap-5">
          <li><img style="width: 70px; height: 75px" :src="Image" /></li>
          <li><img style="width: 70px; height: 75px" :src="Image" /></li>
          <li><img style="width: 70px; height: 75px" :src="Image" /></li>
          <li><img style="width: 70px; height: 75px" :src="Image" /></li>
          <li><img style="width: 70px; height: 75px" :src="Image" /></li>
          <li><img style="width: 70px; height: 75px" :src="Image" /></li>
        </ul>
        <ul>
          <li>
            <img />
            <p>Бесплатная доставка до двери</p>
          </li>
          <li>
            <img />
            <p>Бесплатная доставка до двери</p>
          </li>
          <li>
            <img />
            <p>Бесплатная доставка до двери</p>
          </li>
        </ul>
      </div>
      <div class="flex">
        <div>
          <h3>Описание</h3>
          <p>{{ Title }}</p>
        </div>
        <div>
          <h3>Характеристики</h3>
          <p>Пол: Мужской</p>
          <p>Цвета: Разноцветный</p>
          <p>Состав: Кожа, текстиль, резина</p>
          <p>Страна: Вьетнам</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  Id: Number,
  Name: String,
  Image: String,
  Price: Number,
  Quantity: Number,
  Title: String,
  deleteTitle: Function,
});
</script>
