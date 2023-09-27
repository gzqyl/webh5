const { createApp } = Vue
  
  createApp({
    data() {
      return {
        message: 'Hello ',
        username: 'test'
      }
    },
    methods: {
      submitForm(evt){
        evt.preventDefault()
        console.log("I have submitted the form")
      }
    }
  }).mount('#app')