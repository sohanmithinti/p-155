AFREAME.registerComponent("collider", {
    schema:{
        elementId: {type: "string", default: "#coin1"}
    },
    isCollider: function(eid){
        const element = document.querySelector(eid)
        element.addEventlistener("collide", (e)=>{
            if(eid.includes("#coin")){
                console.log(eid)
            }
        })
    },
    update: function(){
        this.isCollider(this.data.elementId)
    }
})
