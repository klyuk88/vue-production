<script setup lang="ts">
import { createFetch, type UseFetchOptions } from "@vueuse/core";
import queryString from "query-string";
import { computed, reactive, ref, type MaybeRef, unref } from "vue";

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

//create instance
const fetch = createFetch({
  baseUrl: "https://jsonplaceholder.typicode.com",
  options: {
    refetch: true
  }
});
const useMyFetch = <T,>(
  url: MaybeRef,
  queryParams?: MaybeRef<Record<string, any>>,
  useFetchOptions: UseFetchOptions = {}
) => {
  if (typeof url === "string") {
    const urlStr = `${url}${
      queryParams
        ? "?" +
          queryString.stringify(unref(queryParams), {
            arrayFormat: "comma"
          })
        : ""
    }`;
    return fetch<T>(urlStr, {
      ...useFetchOptions
    }).json<T>();
  }
  const urlRef = computed<string>(() => {
    return `${unref(url)}${
      queryParams
        ? "?" +
          queryString.stringify(unref(queryParams), {
            arrayFormat: "comma"
          })
        : ""
    }`;
  });
  return fetch<T>(urlRef, {
    ...useFetchOptions
  }).json<T>();
};

const postId = ref(1);
const url = computed(() => {
  return `/posts/${postId.value}`;
});

const { data, error, isFetching } = await useMyFetch<TPost>(url, configQuery);

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

const setPostId = () => {
  postId.value = postId.value + 1;
};
</script>
<template>
  <div id="home-page" class="px-10 pt-5 container mx-auto">
    {{ postId }}
    <h1>Home page</h1>
    <div class="w-[400px]">
      <div v-if="error">Error</div>
      <div v-else-if="isFetching">...Loading</div>
      <div v-else>
        <pre>{{ data }}</pre>
      </div>

      <button @click="setPageHandler">Set page</button>
      <button @click="addPost">Add Post</button>
      <button @click="setPostId">Set Post ID</button>
    </div>
  </div>
</template>
