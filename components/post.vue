<script lang="ts" setup></script>

<template>
  <div class="container">
    <div style="background: url(https://www.belnovosti.by/sites/default/files/2023-04/kartoshka_2_0_0.jpg) 50% 50% no-repeat; background-size: cover; aspect-ratio: 1.3; width: 100%;" />
  
    <div class="pa-4 pt-4" style="position: relative;">
      <div 
        class="font-weight-bold mr-7" 
        style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden; max-width: 100%; font-size: clamp(1rem, 0.8438rem + 0.5vw, 1.125rem);"
      >
        Картошка
      </div>

      <div 
        class="mt-1" 
        style="line-height: 1.1; font-size: clamp(0.9375rem, 0.8594rem + 0.25vw, 1rem);"
      >
        Короткое описание моей картошечки
      </div>
      
      <div 
        style="font-weight: 600; font-size: clamp(0.9375rem, 0.8594rem + 0.25vw, 1rem);" 
        class="mt-2"
      >
        50 руб/кг
      </div>

      <div class="mt-1" style="font-size: clamp(0.875rem, 0.7188rem + 0.5vw, 1rem);">
        <span class="mdi mdi-map-marker-outline" style="font-size: 18px;"></span> Штанигурт
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 10px 40px 5px rgba(34, 60, 80, 0.08);
  transition: .2s;

  &:hover {
    box-shadow: 0px 10px 40px 5px rgba(34, 60, 80, 0.16);
  }
}
</style>
