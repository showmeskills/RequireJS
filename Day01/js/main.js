/*
    引入模块
    第一个参数是一个数组
*/

// require(["./demo/add"],function(addDemo){
//     console.log(addDemo.add(10,30));
//     addDemo.show();
// })

/*
    配置路径
*/
require.config({
    paths: {
        //自定义模块名字:引入模块的路径
        "add": "demo/add",
        "time":"demo1/time"
    }
})

require(["add","time"], function (addDemo,time) {
        console.log(addDemo.add(10,30));
        addDemo.show();
        console.log(time.mul(3,2));
        time.ccc()
})