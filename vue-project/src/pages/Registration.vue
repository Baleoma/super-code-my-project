<template>
  <div>
    <Entry v-show="store.visibleEntry"></Entry>
    <Authorization v-show="store.visibleRegistration"></Authorization>
  </div>
</template>

<script setup>
import Entry from "@/components/Entry.vue";
import Authorization from "@/components/Authorization.vue";

import { useStore } from "@/Store/Store";
const store = useStore();
</script>
