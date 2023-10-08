<script setup lang="ts">
import { inject, type ConcreteComponent } from 'vue'
const message = inject('message')
</script>

<template>
  <h4 style="text-align:center">{{message}}</h4>
</template>