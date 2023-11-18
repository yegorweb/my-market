<script lang="ts" setup>
import { useDisplay } from 'vuetify/lib/framework.mjs';

let router = useRouter()
</script>

<template>
  <v-container class="d-flex align-center justify-space-between user-select-none" style="height: 60px; position: relative;">
    <div @click="router.push('/')" class="d-flex align-center cursor-pointer">
        <img src="/logo.svg" />

        <div class="font-weight-bold" style="font-size: 18px; margin-left: 15px;">МойМаркет</div>
    </div>

    <div :class="`d-flex align-center pa-2 cursor-pointer ${useDisplay().smAndUp.value ? 'abs-location' : ''}`">
        <span class="mdi mdi-map-marker-outline" style="font-size: 18px;" />&nbsp;Глазов
    </div>

    <v-app-bar-nav-icon :ripple="false" variant="plain" />
  </v-container>
</template>

<style scoped lang="scss">
.abs-location { 
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
}
</style>
