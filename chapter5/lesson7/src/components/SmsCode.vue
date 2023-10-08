<script setup lang="ts">
import { onMounted, type Ref, inject, ref } from 'vue'

const smsCode: Ref<string> = inject('smsCode') as Ref<string>
const checkSmsCode: Ref<string> = inject('checkSmsCode') as Ref<string>

onMounted(()=>{
  smsCode.value = "1234"
})

const generateSmsCode = ()=>{

        smsCode.value = "1234"

        const sms_btn: HTMLElement = document.getElementById("sms-btn") as HTMLElement
        let time_left = 60
        sms_btn.innerHTML = `${time_left}秒`
        sms_btn.style.backgroundColor = 'gray'
        sms_btn.style.cursor = 'default'
        sms_btn.setAttribute("disabled","true")

        const time_counter = setInterval(()=>{
            time_left -= 1
            if(time_left == 0){
                sms_btn.innerHTML = "验证码"
                sms_btn.style.backgroundColor = 'rgb(8, 151, 241)'
                sms_btn.style.cursor = 'pointer'
                sms_btn.removeAttribute("disabled")
                clearInterval(time_counter)
                return
            }
            sms_btn.innerHTML = `${time_left}秒`
        },1000)
}

const updateSmsCode = (e: Event) =>{
  checkSmsCode.value = (e.target as HTMLInputElement).value
}

</script>

<template>
  <div>
      <input type="text" name="verifycode" :value="checkSmsCode" @input="updateSmsCode" />
      <button @click="generateSmsCode" id="sms-btn">验证码</button>
      <input type="hidden" name="q" value="login test is ok" />
  </div>
</template>

<style scoped>
  button {
    margin-left: 15px;
  }
</style>