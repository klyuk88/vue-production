<script setup lang="ts">
import {ref} from "vue";
const isShow = ref(false)

</script>
<template>
 <header class="flex gap-16 border-2 p-5 sticky top-0 bg-neutral-50">
   <h1>Logo</h1>
   <ul class="flex items-center gap-4">
     <li>1</li>
     <li>2</li>
     <li>3</li>
     <li>4</li>
     <li>5</li>
   </ul>
   <div class="w-8 h-8 bg-amber-600 rounded-full ml-auto cursor-pointer relative z-20" @click="isShow = true"></div>
   <div class="w-full fixed h-full top-0 left-0 bg-black bg-opacity-50 z-10" v-if="isShow" @click.self="isShow = false"></div>
 </header>
</template>