const { createApp } = Vue
  
  createApp({
    data() {
      return {
        message: 'Hello ',
        username: 'test',
        output: 'this is output text',
        attr1: 'this is attribute',
        checkRobot: '验证码'
      }
    },
    methods: {
      submitForm(evt){
        evt.preventDefault()
        console.log("I have submitted the form")
      }
    }
  }).mount('#app')