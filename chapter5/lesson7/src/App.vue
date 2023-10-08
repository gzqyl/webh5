<script setup lang="ts">
import { ref, provide, computed, onMounted, type Ref } from 'vue'
import Panel from './components/Panel.vue'
import UserName from './components/UserName.vue'
import Password from './components/Password.vue'
import Robot from './components/Robot.vue'
import SmsCode from './components/SmsCode.vue'
import LoginButton from './components/LoginButton.vue'

const username: Ref<string> = ref("test")
provide('username', username)
const message = computed({
  get() {
    return `hello ${username.value}`
  },
  set(val){
    
  }
})
provide('message', message)

const password: Ref<String> = ref("")
provide('password', password)

const randomNum: Ref<number> = ref(0)
provide('randomNum', randomNum)

const checkRandomNum: Ref<String> = ref("")
provide('checkRandomNum', checkRandomNum)

const smsCode: Ref<String> = ref("")
provide('smsCode', smsCode)

const checkSmsCode: Ref<String> = ref("")
provide('checkSmsCode', checkSmsCode)

</script>

<template>
  <div>
    <Panel />
    <div class="form-container">
      
      <form class="my-form" id="myform" method="get" action="https://cn.bing.com/search">
        <UserName />
        <Password />
        <Robot />
        <SmsCode />
        <LoginButton />
      </form>
    </div>
  </div>
</template>

<style scoped></style>
