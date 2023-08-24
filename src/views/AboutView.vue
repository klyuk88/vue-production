<script setup lang="ts">
import {PostService} from "@/composables/Post";
import { useQuery } from "@tanstack/vue-query";
import type {IPost} from "@/composables/Post/model";

const {data: posts, isSuccess} = useQuery({
  queryKey: ['getPosts'],
  queryFn: (): Promise<IPost[]> => {
   return PostService.getAllPosts()
  }
})

</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-if="isSuccess">
      <pre>
        {{posts}}
      </pre>

    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
