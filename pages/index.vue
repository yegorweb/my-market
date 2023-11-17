<script lang="ts" setup></script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="item in 4" cols="3">
        <Post />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
