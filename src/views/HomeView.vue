<script setup lang="ts">
import UiSelect from "@/components/Ui/UiSelect/UiSelect.vue";
import type { TIUiSelectOption } from "@/components/Ui/UiSelect/types";

const options2: TIUiSelectOption[] = [
  {
    label: "Ilya",
    category: "Ru"
  },
  {
    label: "Nick",
    category: "Ru"
  },
  {
    label: "Bob",
    category: "En"
  },
  {
    label: "Anton",
    category: "En"
  }
];

const selectHandler = (item: TIUiSelectOption | TIUiSelectOption[]) => {
  if (Array.isArray(item)) {
    console.log(item);
  } else {
    console.log(item.label);
  }
};
</script>
<template>
  <div id="home-page" class="px-10 pt-5 container mx-auto">
    <h1>Home page</h1>
    <div class="w-[400px]">
      <UiSelect
        :options="options2"
        @change="selectHandler"
        :multiple="false"
        :searchable="false"
        :grouping="true"
      >
      </UiSelect>
    </div>
  </div>
</template>
