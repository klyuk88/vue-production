<script setup lang="ts">
import { createFetch, type UseFetchOptions } from "@vueuse/core";
import queryString from "query-string";
import { computed, reactive } from "vue";

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const configQuery = reactive({
  _limit: 3,
  _page: 1
});

const useMyFetch = <T,>(
  url: string,
  queryParams?: Record<string, any>,
  useFetchOptions: UseFetchOptions = {}
) => {
  //create instance
  const fetch = createFetch({
    baseUrl: "https://jsonplaceholder.typicode.com",
    options: {
      refetch: true
    }
  });
  //ref url
  const urlRef = computed<string>(() => {
    return `${url}${
      queryParams
        ? "?" +
          queryString.stringify(queryParams, {
            arrayFormat: "comma"
          })
        : ""
    }`;
  });
  // return instance
  return fetch<T>(urlRef, {
    ...useFetchOptions
  });
};

const { data, error, isFetching } = useMyFetch<TPost[]>("/posts", configQuery, {
  refetch: false
});

const setPageHandler = () => {
  configQuery._page = configQuery._page + 1;
};
const addPost = () => {
  useMyFetch<TPost>("/posts").post({
    title: "foo",
    body: "bar",
    userId: 1
  });
};
</script>
<template>
  <div id="home-page" class="px-10 pt-5 container mx-auto">
    <h1>Home page</h1>
    <div class="w-[400px]">
      <div v-if="error">Error</div>
      <div v-else-if="isFetching">...Loading</div>
      <div v-else>
        <pre>{{ data }}</pre>
      </div>

      <button @click="setPageHandler">Set page</button>
      <button @click="addPost">Add Post</button>
    </div>
  </div>
</template>
