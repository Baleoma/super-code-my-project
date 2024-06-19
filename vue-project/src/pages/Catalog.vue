<template>
  <div class="mx-auto">
    <header class="mb-16 bg-violet-500 text-white">
      <div class="relative w-3/5 mx-auto pt-20">
        <img
          class="absolute bottom-40 left-40"
          src="@/assets/image/sneaker-text.png"
          alt="SneakMax"
        />
        <h2 class="mb-5 text-center text-3xl font-bold">
          Кроссовки известных брендов с доставкой по России и СНГ
        </h2>
        <p class="mb-10">
          Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
          многие другие по низким ценам
        </p>
        <button class="px-12 py-5 bg-orange-500 mb-24" style="border-radius: 10px">
          Перейти к покупкам
        </button>
      </div>
    </header>
    <main>
      <div class="mb-16 w-3/5 mx-auto">
        <div class="flex justify-between text-center mb-10">
          <h2>Каталог</h2>
          <select @change="store.changeOption">
            <option>И так норм</option>
            <option value="Price">По минимальной цене</option>
            <option value="-Price">По максимальной цене</option>
          </select>
        </div>
        <div class="flex gap-5">
          <div class="h-full bg-orange-100" style="padding: 20px; border-radius: 10px">
            <h3 class="mb-4">Подбор по параметрам</h3>
            <input
              @input="store.changeInput"
              type="text"
              placeholder="Поиск по названию"
            />
            <p>Пол</p>
            <div class="mb-2 flex gap-2">
              <div class="flex">
                <input id="html" type="checkbox" />
                <p class="text-xs">Мужской</p>
              </div>
              <div class="flex">
                <input id="html" type="checkbox" />
                <p class="text-xs">Женский</p>
              </div>
            </div>
            <p class="mb-1">Размер</p>
            <table class="mb-2 w-full">
              <tr>
                <td class="border-2 border-sky-500">35</td>
                <td class="border-2 border-sky-500">36</td>
                <td class="border-2 border-sky-500">37</td>
              </tr>
              <tr>
                <td class="border-2 border-sky-500">38</td>
                <td class="border-2 border-sky-500">39</td>
                <td class="border-2 border-sky-500">40</td>
              </tr>
              <tr>
                <td class="border-2 border-sky-500">41</td>
                <td class="border-2 border-sky-500">42</td>
                <td class="border-2 border-sky-500">43</td>
              </tr>
            </table>
            <div style="display: flex; justify-content: space-between">
              <button class="mb-2 bg-slate-300 rounded" style="padding: 5px">Применить</button>
              <button class="mb-2 bg-slate-300 rounded" style="padding: 5px">Сбросить</button>
            </div>
          </div>
          <div class="flex flex-wrap gap-5">
            <sneaker-card
              v-for="item in store.items_sneaker"
              :key="item.id"
              :Id="item.id"
              :Name="item.Name"
              :Price="item.Price"
              :Title="item.Title"
              :Quantity="item.Quantity"
              :Image="item.Image"
              :putFavorite="store.putFavorite"
              :changeTitle="store.changeTitle"
            ></sneaker-card>
            <button class="py-5 bg-orange-500 mt-10" style="border-radius: 10px; height: fit-content; padding: 10px">Показать еще</button>
          </div>
        </div>
      </div>
      <div class="bg-violet-500 mb-16 flex">
        <div class="w-3/5 mx-auto text-white relative">
          <img class="absolute" src="@/assets/image/pattern.svg" />
          <h2 class="mb-5" style="font-size: 4vw; margin-top: 2vw;">Пара слов о нас</h2>
          <p class="mb-5" style="font-size: 1.2vw">
            Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
            спорт мы можем менять жизни. В том числе с помощью воодушевляющих
            историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.
          </p>
          <p style="font-style: italic; font-size: 1vw">SneakMax</p>
        </div>
        <img class="" src="../assets/image/Neeger.png" />
      </div>
      <div class="bg-orange-100 mb-16 w-3/5 mx-auto" style="padding: 40px; border-radius: 20px">
        <h2>Мы подберем идеальную пару для вас</h2>
        <p>
          Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
          вас моделями
        </p>
        <h3>Какой тип кроссовок рассматриваете?</h3>
        <div class="flex flex-wrap gap-x-16 gap-y-5">
          <sneakerFilterVue></sneakerFilterVue>
          <sneakerFilterVue></sneakerFilterVue>
          <sneakerFilterVue></sneakerFilterVue>
          <sneakerFilterVue></sneakerFilterVue>
          <sneakerFilterVue></sneakerFilterVue>
          <sneakerFilterVue></sneakerFilterVue>
        </div>
        <div class="flex justify-between items-center">
          <p>1 из 3</p>
          <button class="mb-10 px-10 py-4 border border-black">
            Следующий шаг
          </button>
        </div>
      </div>
      <div class="bg-violet-500 text-white pb-16">
        <div class="w-3/5 mx-auto relative">
          <h2>Наша команда</h2>
          <img
            style="left: 1000px"
            class="absolute top-0"
            src="../assets/image/pattern2.svg"
          />
          <div class="flex flex-wrap gap-x-5 gap-y-10">
            <teamCartVue
              v-for="item in store.items_team"
              :key="item.id"
              :name="item.name"
              :job="item.job"
              :image="item.image"
              :visibleListDraver="false"
            ></teamCartVue>
          </div>
        </div>
      </div>
      <div class="bg-slate-100 py-16 mb-16">
        <div class="w-3/5 mx-auto">
          <div>
            <h2>Контакты</h2>
            <h3>Главный офис</h3>
            <p>+7 800 789 89 89</p>
            <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
            <h3>отдел продаж</h3>
            <p>+7 800 789 89 89</p>
            <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
            <div class="flex gap-5">
              <img
                class="bg-green-700 py-3.5 px-2.5 rounded-full"
                src="@/assets/image/VK.png"
              />
              <img
                class="bg-green-700 py-2 px-2 rounded-full"
                src="../assets/image/Instagram.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-3/5 mx-auto flex mb-20">
        <div class="bg-violet-500 text-white" style="padding: 20px; border-radius:  12px 0 0 12px">
          <h2>Есть вопросы?</h2>
          <p>Заполните форму и наш менеджер свяжется с вами</p>
          <input class="w-full mb-2.5" type="text" placeholder="Ваше имя" />
          <input
            class="w-full mb-2.5"
            type="text"
            placeholder="Номер телефона"
          />
          <button class="px-32 py-5 bg-orange-500 w-full" style="border-radius: 10px">Отправить</button>
        </div>
        <div class="flex">
          <div>
            <img
              src="../assets/image/Instagram-photo-1.jpg"
              alt="фото из инстаграмма"
              style="width: 15vw"
            />
            <img
              src="../assets/image/Instagram-photo-2.jpg"
              alt="фото из инстаграмма"
              style="width: 15vw"
            />
          </div>
          <img
            src="../assets/image/Instagram-photo-main.jpg"
            alt="фото из инстаграмма"
            style="width: 15vw"
          />
          <div>
            <img
              src="../assets/image/Instagram-photo-3.jpg"
              alt="фото из инстаграмма"
              style="width: 15vw"
            />
            <img
              src="../assets/image/Instagram-photo-4.jpg"
              alt="фото из инстаграмма"
              style="width: 15vw"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useStore } from "@/Store/Store";
const store = useStore();

import sneakerFilterVue from "@/components/sneaker-filter.vue";
import teamCartVue from "@/components/team-cart.vue";
import sneakerCard from "@/components/sneaker-card.vue";
</script>
