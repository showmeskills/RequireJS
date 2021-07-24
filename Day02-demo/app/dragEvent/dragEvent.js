

define(["ko","jquery"],function(ko,$){
    const drag = ()=>{
        $("#div3").on('mousedown',function(e){
            e = e || window.event;
            var offsetX = e.clientX - this.offsetLeft;
            var offsetY = e.clientY - this.offsetTop;
            $(this).on("mousemove",function(e){
                e = e || window.event;
                $("#div3").style.left = e.clientX - offsetX + 'px';
                $("#div3").style.top = e.clientY - offsetY + 'px';
            })
            $(this).on("mouseup",function(e){
                $(this).off("mousemove")
            })
        })
    }
    return {
        drag,
    }
})