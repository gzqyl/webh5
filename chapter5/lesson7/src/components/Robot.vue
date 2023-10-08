<script setup lang="ts">
import { onMounted, type Ref, inject, ref } from 'vue'

const randomNum: Ref<number> = inject('randomNum') as Ref<number>
const checkRandomNum = inject('checkRandomNum') as Ref<String>
const randomNumText: Ref<string> = ref("")

onMounted(()=>{
  
        const checkX = Math.ceil(Math.random() * 10)
        const checkY = Math.ceil(Math.random() * 10)

        randomNumText.value = `${checkX} + ${checkY} = ?`
        randomNum.value = checkX + checkY
})

const updateRobot = (e: Event) =>{
  checkRandomNum.value = (e.target as HTMLInputElement).value
}
</script>

<template>
    <div>
        <label id="random-check">{{randomNumText}}</label>
        <input type="number" name="checkRobot" :value="checkRandomNum" @input="updateRobot" />
    </div>
</template>

<style scoped>
  input {
    margin-left: 15px;
  }
</style>
