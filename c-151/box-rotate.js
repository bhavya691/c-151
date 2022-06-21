AFRAME.registerComponent("rotate-box",{
    schema:{
        moveX:{type:"number",default:1},
        moveY:{type:"number",default:1}
    },
    tick: function(){
        this.data.moveX += 10;
        this.data.moveY += 10;
        var rotate = this.el.getAttribute("rotation")
        rotate.x = this.data.moveX;
        rotate.y = this.data.moveY;
        this.el.setAttribute("rotation",{
            x:rotate.x,
            y:rotate.y,
            z:rotate.z
        })
    }
})