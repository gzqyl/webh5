//变量
//string number bool null undefined object function
//var name = ""

// function sayhi(){

//     var name="hi your name"
//     var obj = {
//         name: "jack"
//     }
//     console.log("hi " + obj.name)
//     console.log(typeof(obj))
//     console.log(typeof([""]))

// }

// // console.log(typeof(sayhi))

// sayhi()

//类

class Animal{

    name = "dog"
    isrun = false

    constructor(){
        
    }

    static log(input){
        console.log(input)
    }

    run(){
        console.log("I am running")
    }


}

// console.log(typeof(Animal))

// Animal.log("hello world")

var dog = new Animal()
// dog.run()
console.log(dog.name)

//ES6

//变量
//const / let -> var
//const 表示是常量，不能改变值
//let 表示是可变的变量

// const hi = "hi name"
// // hi = "another name"

let hi  = "hi name"
hi = "another name"

//函数
const myFunc = (name)=>{

    console.log(name)

}

myFunc("test es6")

//oneStep().then((data)=>{

// })

class operateObj{

    static data

    static then(func){
        func(operateObj.data)
    }

}

function oneStep(){

    const data = "result data"

    operateObj.data = data
    return operateObj
    

}

oneStep().then((data)=>{
    console.log(data)
})

let i = 0
if(i < 99){
    i++;
}

while(i < 99){
    i++;
}

try{
    km()
}catch(e){
    console.log(e)
}

for(;i<200;i++){

}

console.log(i)

switch(i){
    case 200:
        console.log("switch is ok")
        break
    default:
        break
}

