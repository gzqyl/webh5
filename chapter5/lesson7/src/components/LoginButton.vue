<script setup lang="ts">
import { inject, type Ref } from 'vue'
const username: Ref<string> = inject('username') as Ref<string>
const password: Ref<string> = inject('password') as Ref<string>
const randomNum: Ref<number> = inject('randomNum') as Ref<number>
const checkRandomNum: Ref<number> = inject('checkRandomNum') as Ref<number>
const smsCode: Ref<string> = inject('smsCode') as Ref<string>
const checkSmsCode: Ref<string> = inject('checkSmsCode') as Ref<string>


const submitForm = (e: Event)=>{

        e.preventDefault()

        //check name
        if(username.value.replace(/\s/g,"").length < 2){
            alert("username is not valid")
            return
        }

        //check password
        if(password.value.replace(/\s/g,"").length < 6){
            alert("password is not valid")
            return
        }

        //checkrobot
        if(checkRandomNum.value != randomNum.value){
            alert("robot check fails")
            return
        }

        //check sms code
        if(smsCode.value != checkSmsCode.value){
            alert("sms check fails")
            return
        }

        //server login ... ok
        
        document.forms[0].submit()

}

</script>

<template>
  <div>
      <button @click="submitForm">登录</button>
  </div>
</template>
