<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import type { TIUiSelectOption, TUiSelectProps } from "./types";
import { useUiSelect } from "./useUiSelect";

const uiSelectNode = ref<HTMLElement | null>(null);
onClickOutside(uiSelectNode, () => {
  isShowOptionsList.value = false;
  searchInput.value = null;
});
``;
const props = defineProps<TUiSelectProps>();
const emits = defineEmits<{
  change: [option: TIUiSelectOption | TIUiSelectOption[]];
}>();
const {
  isShowOptionsList,
  deleteOptionHandler,
  changeSelectHandler,
  multipleSelectedValue,
  singleSelectedValue,
  searchInput,
  isShowPlaceholder,
  optionsSearchList,
  groupOptionsList
} = useUiSelect(props, emits);
</script>
<template>
  <div class="ui-select__wrap" ref="uiSelectNode">
    <div @click="isShowOptionsList = !isShowOptionsList" class="ui-select" tabindex="0">
      <span class="text-neutral-400" v-if="isShowPlaceholder">Select value</span>
      <!--      if multiple value -->
      <template v-if="props.multiple">
        <div
          v-for="(item, idx) in multipleSelectedValue"
          :key="idx"
          class="flex items-center gap-1"
        >
          <slot name="selectedOption" v-bind="{ option: item }">
            <div class="bg-neutral-200 p-0.5">
              {{ item?.label }}
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
      <!--      if single value -->
      <template v-if="!props.multiple">
        <slot name="selectedOption" v-bind="{ option: singleSelectedValue }">
          {{ singleSelectedValue?.label }}</slot
        >
      </template>
    </div>
    <Transition>
      <div class="ui-select__list" v-if="isShowOptionsList && !props.grouping">
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
              v-for="(item, idx) in optionsSearchList"
              :key="idx"
              @click="changeSelectHandler(item)"
            >
              <slot name="option" v-bind="{ option: item }">{{ item?.label }}</slot>
            </li>
            <li v-if="optionsSearchList.length === 0" class="p-2">Not fount result</li>
          </template>
          <template v-else>
            <li
              class="ui-select__list__item"
              v-for="(item, idx) in props.options"
              :key="idx"
              @click="changeSelectHandler(item)"
            >
              <slot name="option" v-bind="{ option: item }">{{ item?.label }}</slot>
            </li>
          </template>
        </ul>
      </div>
    </Transition>
    <Transition>
      <div class="ui-select__list" v-if="isShowOptionsList && props.grouping">
        <pre>{{ groupOptionsList }}</pre>
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
