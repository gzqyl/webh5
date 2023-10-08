<script setup lang="ts">
import { inject, type Ref } from 'vue'
const password = inject('password') as Ref<string>


const updatePassword = (e: Event)=>{

  password.value = (e.target as HTMLInputElement).value

}

</script>

<template>
    <div>
      <label>Password:</label>
      <input
      id="password" 
      type="password" 
      name="password"
      :value="password"
      @input="updatePassword"
    />
    </div>
</template>

<style scoped>
  input {
    margin-left: 15px;
  }
</style>
