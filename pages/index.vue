<script lang="ts" setup></script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="item in 10" cols="6" md="4" lg="3">
        <Post />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
