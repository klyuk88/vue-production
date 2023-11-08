import type { TIUiSelectOption, TUiSelectProps } from "./types";
import { computed, ref } from "vue";

export const useUiSelect = (
  props: TUiSelectProps,
  emits: (evt: "change", option: TIUiSelectOption | TIUiSelectOption[]) => void
) => {
  const multipleSelectedValue = ref<TUiSelectProps["options"]>([]);
  const singleSelectedValue = ref<TIUiSelectOption | null>(null);
  const isShowOptionsList = ref(false);
  const changeSelectHandler = (item: TIUiSelectOption) => {
    if (props.multiple) {
      if (multipleSelectedValue.value.includes(item)) {
        isShowOptionsList.value = false;
        return;
      }
      multipleSelectedValue.value.push(item);
      isShowOptionsList.value = false;
      searchInput.value = null;
      emits("change", multipleSelectedValue.value);
    }
    if (!props.multiple) {
      if (singleSelectedValue.value?.label === item?.label) {
        isShowOptionsList.value = false;
        return;
      }
      singleSelectedValue.value = item;
      isShowOptionsList.value = false;
      searchInput.value = null;
      emits("change", singleSelectedValue.value);
    }
  };

  const deleteOptionHandler = (item: TIUiSelectOption) => {
    multipleSelectedValue.value = multipleSelectedValue.value?.filter(
      (el: TIUiSelectOption) => el !== item
    );
    emits("change", multipleSelectedValue.value);
  };

  const searchInput = ref<string | null>(null);
  const optionsSearchList = computed(() => {
    const reg = new RegExp(`${searchInput.value}`, "ig");
    return props.options.filter((item: TIUiSelectOption) => {
      return reg.test(item?.label);
    });
  });

  const isShowPlaceholder = computed(() => {
    return !(multipleSelectedValue.value.length > 0 || singleSelectedValue.value?.label);
  });

  const groupBy = (items: any, key: any) =>
    items.reduce(
      (result: any, item: any) => ({
        ...result,
        [item[key]]: [...(result[item[key]] || []), item]
      }),
      {}
    );

  const groupOptionsList = computed(() => {
    return groupBy(props.options, "category");
  });

  return {
    multipleSelectedValue,
    singleSelectedValue,
    deleteOptionHandler,
    changeSelectHandler,
    searchInput,
    isShowOptionsList,
    isShowPlaceholder,
    optionsSearchList,
    groupOptionsList
  };
};
