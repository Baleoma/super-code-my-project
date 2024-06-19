<template>
  <div class="h-full bg-orange-100">
    <h3 class="mb-4">Подбор по параметрам</h3>
    <p class="mb-2">Цена. руб</p>
    <div>
      <div class="range-flex">
        <p>
          Цена:
          <input
            v-model="firstInput"
            @input="updateFirstInput"
            class="text text-black"
          />
        </p>
      </div>
      <input
        v-model="secondInput"
        @input="updateSecondInput"
        type="range"
        min="0"
        max="25000"
        step="10"
      />
    </div>
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
    <button class="mb-2 bg-neutral-800 rounded">Применить</button>
    <button class="bg-slate-300 rounded">Сбросить</button>
  </div>
</template>
