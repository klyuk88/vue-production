<script setup lang="ts">
import { ref } from "vue";
import UiSelect from "@/components/Ui/UiSelect/UiSelect.vue";
import type { TIUiSelectOption } from "@/components/Ui/UiSelect/types";
const options = ref(["Hello", "world", "Good"]);
const options2 = [
  {
    label: "Hello",
    value: 1
  },
  {
    label: "world",
    value: 2
  }
];

const selectHandler = (item: TIUiSelectOption) => {
  console.log(item);
};
</script>
<template>
  <div id="home-page" class="px-10 pt-5 container mx-auto">
    <h1>Home page</h1>
    <div class="w-[400px]">
      <UiSelect :options="options2" @change="selectHandler" :multiple="true" :searchable="false">
        <template #selectedOption="{ option }">
          <div class="bg-amber-500 px-1 rounded-xl">{{ option.label }}</div>
        </template>
        <template #option="{ option }">
          <div class="bg-amber-500 px-1rounded-xl">{{ option.label }}</div>
        </template>
      </UiSelect>
    </div>
  </div>
</template>
