class LoginForm{

    checkRobot = 0
    verifyCode = ""
    //singleton
    static shared = new LoginForm()

    generateRandomCheck(){

        const checkX = Math.ceil(Math.random() * 10)
        const checkY = Math.ceil(Math.random() * 10)

        this.checkRobot = checkX + checkY

        //document.getElementById("random-check").innerHTML = 

        $("#random-check").html(`${checkX} + ${checkY} = ?`)
        

    }

    getSMSCode(e){
        e.preventDefault()

        //send to server
        //from http server get the random code, and we mock it here...
        this.verifyCode = "1234"

        // const sms_btn = document.getElementById("sms-btn")
        const sms_btn = $("#sms-btn")
        let time_left = 60
        sms_btn.html(`${time_left}秒`)
        sms_btn.css("background-color","gray")
        sms_btn.css("cursor","default")
        sms_btn.attr("disabled",true)

        const time_counter = setInterval(()=>{
            time_left -= 1
            if(time_left == 0){
                sms_btn.html("验证码")
                sms_btn.css("background-color","rgb(8, 151, 241)")
                sms_btn.css("cursor","pointer")
                sms_btn.removeAttr("disabled")
                clearInterval(time_counter)
                return
            }
            sms_btn.html(`${time_left}秒`)
        },1000)
    }

    login(e){

        e.preventDefault()

        //check name
        //const username = document.querySelector('input[name="username"]').value
        const username = $('input[name="username"]').val()
        console.log(username)
        if(username.replace(/\s/g,"").length < 2){
            alert("username is not valid")
            return
        }

        const password = document.querySelector('input[name="password"]').value

        if(password.replace(/\s/g,"").length < 6){
            alert("password is not valid")
            return
        }

        //checkrobot
        const checkrobot = document.querySelector('input[name="checkRobot"]').value
        if(checkrobot != this.checkRobot){
            alert("robot check fails")
            return
        }

        //check sms code
        const sms_code = document.querySelector('input[name="verifycode"]').value
        if(sms_code != this.verifyCode){
            alert("sms check fails")
            return
        }

        //server login ... ok
        
        document.forms[0].submit()

    }


}

window.addEventListener("load",()=>{
    LoginForm.shared.generateRandomCheck()
})