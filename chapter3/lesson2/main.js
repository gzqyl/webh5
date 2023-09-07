function checkName(evt){
    evt.preventDefault()
    
    var name = document.getElementById("name").value
    if (name == ""){
        alert("名字不能为空")
        return false
    }

    document.getElementById("myform").submit()

    return true

}