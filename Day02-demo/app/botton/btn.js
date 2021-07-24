
define(["ko","jquery","scale"], function(ko,$,scale){
    this.Show = ko.observable(false)
    this.HandleClick = ()=>{
        this.Show(!this.Show())
        scale.scale($("#div1"),$("#div2"))
    }
    
    return{
        HandleClick,
        Show
    }
})