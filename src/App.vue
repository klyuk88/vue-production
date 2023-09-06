<script setup lang="ts">
import TheAside from "@/components/widgets/TheAside.vue";
import TheHeader from "@/components/widgets/TheHeader.vue";
</script>

<template>
  <main>
    <TheAside/>
    <div class="w-full fixed h-full top-0 left-0 bg-black bg-opacity-50 z-10"></div>
    <div id="page" class="ml-[250px]">
      <TheHeader/>
      <RouterView />
    </div>
  </main>


</template>

