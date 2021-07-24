require.config({
    paths:{
        "ko":"/libs/knockout-latest.min",
        "jquery":"/libs/jquery.min",
        "btn":"/app/botton/btn",
        "drag":"/app/dragEvent/dragEvent",
        "scale":"/app/scale/index"
    }
})

require(["ko","jquery","btn","drag"],function(ko,$,btn,drag,){
    drag.drag()
    ko.applyBindings(btn,$("#app")[0]);
    ko.applyBindings(drag,$("#div3")[0]);
})