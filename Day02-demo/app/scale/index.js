

define(["jquery"], function($){
    const scale = (node1,node2)=>{
        node2.onmousedown = function(ev){
            console.log(1)
            ev = ev || window.event;
            var w = node1.offsetWidth;
            var h = node2.offsetHeight;
            var l = e.clientX;
            var t = e.clientY;
            document.onmousemove = function (ev){
                ev = ev || window.event;
                node1.style.width = w + (e.clientX - l)+"px";
                node1.style.height = h + (e.clientX - t) +"px";
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null;
        }
    }
    return {
        scale
    }
})