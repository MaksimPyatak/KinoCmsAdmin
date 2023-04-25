<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <component :is="layoutComponent">
      <slot></slot>
   </component>
</template>
 
<script setup>
//import { ref } from "vue";
import MainLayout from "@/layout/main-layout/MainLayout.vue";
const layoutComponent = MainLayout
</script>
 