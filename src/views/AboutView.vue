<script setup lang="ts">
import { ref } from "vue";

const table = ref<HTMLElement | null>(null);
</script>
<template>
  <div class="px-10 pt-5">
    <h1>About page</h1>
    <div class="table-wrap overflow-x-scroll w-[500px]" ref="table" v-dragscroll>
      <div class="table w-[900px]">
        <div class="tr grid grid-cols-4 bg-neutral-200">
          <div class="td">Name</div>
          <div class="td">Last name</div>
          <div class="td">Age</div>
          <div class="td">Status</div>
        </div>
        <div>
          <div class="tr grid grid-cols-4">
            <div class="td">Ilya</div>
            <div class="td">Popin</div>
            <div class="td">33</div>
            <div class="td">Action</div>
          </div>
          <div class="tr grid grid-cols-4">
            <div class="td">Ilya</div>
            <div class="td">Popin</div>
            <div class="td">33</div>
            <div class="td">Action</div>
          </div>
          <div class="tr grid grid-cols-4">
            <div class="td">Ilya</div>
            <div class="td">Popin</div>
            <div class="td">33</div>
            <div class="td">Action</div>
          </div>
          <div class="tr grid grid-cols-4">
            <div class="td">Ilya</div>
            <div class="td">Popin</div>
            <div class="td">33</div>
            <div class="td">Action</div>
          </div>
          <div class="tr grid grid-cols-4">
            <div class="td">Ilya</div>
            <div class="td">Popin</div>
            <div class="td">33</div>
            <div class="td">Action</div>
          </div>
          <div class="tr grid grid-cols-4">
            <div class="td">Ilya</div>
            <div class="td">Popin</div>
            <div class="td">33</div>
            <div class="td">Action</div>
          </div>
          <div class="tr grid grid-cols-4">
            <div class="td">Ilya</div>
            <div class="td">Popin</div>
            <div class="td">33</div>
            <div class="td">Action</div>
          </div>
          <div class="tr grid grid-cols-4">
            <div class="td">Ilya</div>
            <div class="td">Popin</div>
            <div class="td">33</div>
            <div class="td">Action</div>
          </div>
        </div>
      </div>
    </div>

    <!--    <button @click="scrollLeftTableHandler" class="bg-amber-600 p-2 mr-2">Scroll left</button>-->
    <!--    <button @click="scrollRightTableHandler" class="bg-neutral-950 p-2 text-white">-->
    <!--      Scroll right-->
    <!--    </button>-->
  </div>
</template>

<style lang="scss">
.table {
  @apply border-l-[1px] border-r-[1px];
  .td {
    @apply p-2 border-r-[1px] border-b-[1px];
  }
  .td:last-child {
    @apply border-r-0;
  }
}
//.table-wrap::-webkit-scrollbar {
//  display: inherit;
//}
//
//.table-wrap:hover::-webkit-scrollbar {
//  width: 10px;
//}
//
//.table-wrap:hover::-webkit-scrollbar-track {
//  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
//  border-radius: 8px;
//  -webkit-border-radius: 8px;
//}
//
//.table-wrap:hover::-webkit-scrollbar-thumb {
//  -webkit-border-radius: 10px;
//  border-radius: 10px;
//  background: rgba(100, 100, 100, 0.8);
//  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
//}
</style>
