<script setup lang="ts"></script>
<template>
  <header class="flex gap-16 border-2 p-5 sticky top-0 bg-neutral-50">
    <h1>Logo</h1>
    <ul class="flex items-center gap-4">
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/about">О нас</router-link>
      </li>
      <li>
        <router-link to="/catalog">Каталог</router-link>
      </li>
    </ul>
  </header>
</template>
