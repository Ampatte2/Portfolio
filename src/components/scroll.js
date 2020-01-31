import React from "react"

function scrollTo(x, div){
    let innerHeight = window.innerHeight;
    if(div==="home" || div==="contact"){
        window.scrollTo(0,x);
        return
    }else if(window.innerWidth<800){
        if(div==="work"){
            window.scroll(0,(innerHeight*0.75))
        }else{
            window.scroll(0, (innerHeight*1.75))
        }
    }else{
        if(div==="work"){
            window.scroll(0,(innerHeight*0.60))
        }else{
            window.scroll(0, (innerHeight*1.6))
        }
    }

}

export default scrollTo;