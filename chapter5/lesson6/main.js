const { createApp } = Vue
  
  createApp({
    data() {
      return {
        
        username: 'test',
        output: 'this is output text',
        attr1: 'this is attribute',
        checkRobot: '验证码',

      }
    },
    computed:{
      message(){
        return `hello ${this.username}`
      }
    },
    methods: {
      submitForm(evt){
        evt.preventDefault()
        console.log("I have submitted the form")
      }
    },
    mounted(){
      //this.message = "Mounted Hello"
    }
  }).mount('#app')