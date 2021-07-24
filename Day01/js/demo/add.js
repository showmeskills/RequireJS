/*
    进行两个数的和计算的模块
    可以写很多个函数,一般情况下把实现同类功能的函数,放在一个模块
*/

define(function(){
    const add = (x,y)=>{
        return x+y;
    }
    const show =()=>{
        console.log("hello world")
    }
    const ccc = ()=>{
        console.log("in time using")
    }
    return {
        add,
        show,
        ccc
    }
})
