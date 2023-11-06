<script setup lang="ts">
import TheAside from "@/components/widgets/TheAside.vue";
import TheHeader from "@/components/widgets/TheHeader.vue";
</script>

<template>
  <main>
    <!--    <TheAside />-->
    <div id="page" class="">
      <TheHeader />
      <router-view></router-view>
    </div>
  </main>
</template>
