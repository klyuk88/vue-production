<script setup lang="ts">
import TheHeader from "@/components/widgets/TheHeader.vue";
</script>

<template>
  <main>
    <div id="page" class="">
      <TheHeader />
      <Suspense>
        <router-view></router-view>
      </Suspense>
    </div>
  </main>
</template>
