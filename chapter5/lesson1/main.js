const { createApp } = Vue
  
  createApp({
    data() {
      return {
        message: 'Hello Vue Test!'
      }
    }
  }).mount('#app')