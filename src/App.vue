<script setup>
import { RouterView } from 'vue-router'

</script>

<template>

  <RouterView />
</template>

<style>
 html, body {
  min-height: 100vh;
  color: var(--color-text);
  background-color: var(--clr-background-light); 
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import url("@/assets/base.css");
</style>
