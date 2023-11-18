<script lang="ts" setup></script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="item in 10" cols="6" sm="4" md="3">
        <Post />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
