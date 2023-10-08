<script setup lang="ts">
import { inject, type Events, type Ref } from 'vue'
const username = inject('username') as Ref<string>

const updateUserName = (e: Event)=>{

  username.value = (e.target as HTMLInputElement).value

}

</script>




<template>
  <div>
    <label>UserName:</label>
    <input
      id="name" 
      type="text" 
      name="username"
      :value="username"
      @input="updateUserName"
    />
  </div>
</template>

<style scoped>
  input {
    margin-left: 15px;
  }
</style>