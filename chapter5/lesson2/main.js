const { createApp } = Vue
  
  createApp({
    data() {
      return {
        message: 'Hello ',
        username: 'test'
      }
    }
  }).mount('#app')