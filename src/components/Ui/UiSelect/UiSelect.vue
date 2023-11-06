<script setup lang="ts">
import { computed, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import type { TIUiSelectOption, IUiSelectProps } from "./types";
const props = defineProps<IUiSelectProps>();
const emits = defineEmits<{
  change: [option: TIUiSelectOption | TIUiSelectOption[]];
}>();
const showList = ref(false);
const uiSelectNode = ref<HTMLElement | null>(null);
const optionsList = ref<TIUiSelectOption | TIUiSelectOption[]>(props.defaultOption);
onClickOutside(uiSelectNode, () => {
  showList.value = false;
  searchInput.value = null;
});

const changeSelectHandler = (item: TIUiSelectOption) => {
  if (!props.multiple) {
    if (optionsList.value === item) {
      showList.value = false;
      return;
    }
    optionsList.value = item;
    emits("change", optionsList.value);
    showList.value = false;
    searchInput.value = null;
    return;
  }
  if (Array.isArray(optionsList.value) && optionsList.value?.includes(item)) {
    showList.value = false;
    return;
  }
  (optionsList.value as TIUiSelectOption[])?.push(item);
  emits("change", optionsList.value);
  showList.value = false;
  searchInput.value = null;
  return;
};

const isArrayOptions = computed(() => {
  return Array.isArray(optionsList.value);
});

const deleteOptionHandler = (item: TIUiSelectOption) => {
  optionsList.value = (optionsList.value as TIUiSelectOption[])?.filter(
    (el: TIUiSelectOption) => el !== item
  );
  emits("change", optionsList.value);
};

const searchInput = ref<string | null>(null);
const optionsSearch = computed(() => {
  let reg = new RegExp(`${searchInput.value}`, "ig");
  return props.options.filter((item: TIUiSelectOption) => {
    return reg.test(typeof item !== "string" ? item?.label : item);
  });
});
</script>
<template>
  <div class="ui-select__wrap" ref="uiSelectNode">
    <div @click="showList = !showList" class="ui-select" tabindex="0">
      <span class="text-neutral-400" v-if="optionsList?.length === 0">Select value</span>
      <template v-if="isArrayOptions">
        <div v-for="(item, idx) in optionsList" :key="idx" class="flex items-center gap-1">
          <slot name="selectedOption" v-bind="{ option: item }">
            <div class="bg-neutral-200 p-0.5">
              {{ item?.label ?? item }}
            </div>
          </slot>
          <img
            src="@/assets/icons/close.svg"
            alt=""
            class="w-4 cursor-pointer"
            @click.stop="deleteOptionHandler(item)"
          />
        </div>
      </template>
      <template v-else>
        <slot name="selectedOption" v-bind="{ option: optionsList }">
          {{ optionsList?.label ?? optionsList }}</slot
        >
      </template>
    </div>
    <Transition>
      <div class="ui-select__list" v-if="showList">
        <ul>
          <li
            class="ui-select__list__item flex items-center gap-2 relative"
            v-if="props.searchable"
          >
            <input type="text" class="ui-select__search-input" v-model="searchInput" />
            <img src="@/assets/icons/search.svg" alt="" class="w-4 absolute right-6" />
          </li>
          <template v-if="searchInput">
            <li
              class="ui-select__list__item"
              v-for="(item, idx) in optionsSearch"
              :key="idx"
              @click="changeSelectHandler(item)"
            >
              <slot name="option" v-bind="{ option: item }">{{ item?.label ?? item }}</slot>
            </li>
            <li v-if="optionsSearch.length === 0" class="p-2">Not fount result</li>
          </template>
          <template v-else>
            <li
              class="ui-select__list__item"
              v-for="(item, idx) in props.options"
              :key="idx"
              @click="changeSelectHandler(item)"
            >
              <slot name="option" v-bind="{ option: item }">{{ item?.label ?? item }}</slot>
            </li>
          </template>
        </ul>
      </div>
    </Transition>
  </div>
</template>
<style lang="scss" scoped>
.ui-select {
  @apply relative box-border border-[1px] border-neutral-500 p-2 w-full cursor-auto flex items-center flex-wrap gap-1;
  @apply focus:ring-[1px] ring-neutral-900;

  &__search-input {
    @apply box-border w-full border-[1px] py-1 px-2;
  }

  &__list {
    @apply absolute z-20 mt-2 border-[1px] border-neutral-500 w-full;
    &__item {
      @apply transition-colors hover:bg-neutral-200 p-2 cursor-pointer;
    }
  }

  &__wrap {
    @apply relative w-full;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
