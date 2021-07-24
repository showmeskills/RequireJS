

/*
    当前模块依赖另一个模块开发, 第一个参数是一个数组
    define([],function(){})
*/
// require.config({
//     paths:{
//         "add":"../demo/add"
//     }
// })

define(["add"],function(add){
    const mul = (x,y)=>{
        return x * y;
    }
    const ccc = ()=>{
        add.ccc()
    }
    return {
        mul,
        ccc
    }
})