<script setup lang="ts">
import {ref} from "vue";
const isShow = ref(false)

</script>
<template>
  <div class="fixed left-0 top-0 h-[100vh] w-[250px] border-2 bg-amber-200 flex gap-10 flex-col items-center p-5">
    <h2 class="font-bold text-center pt-4">Logo</h2>
    <ul class="flex flex-col gap-4 items-center pt-10">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
    <div class="w-8 h-8 bg-amber-600 rounded-full cursor-pointer relative z-20" @click="isShow = true"></div>
    <div class="w-full fixed h-full top-0 left-0 bg-black bg-opacity-50 z-10" v-if="isShow" @click.self="isShow = false"></div>
  </div>
</template>
