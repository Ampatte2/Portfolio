function scrollTo(x, div){
    let innerHeight = window.innerHeight;
    if(div==="home" || div==="contact"){
        window.scrollTo(0,x);
        return
    }else if(window.innerWidth<800){
        if(div==="about"){
            window.scroll(0,(innerHeight*0.9))
        }else{
            window.scroll(0, (innerHeight*2.79))
        }
    }else{
        if(div==="about"){
            window.scroll(0,(innerHeight*0.9))
        }else{
            window.scroll(0, (innerHeight*1.67))
        }
    }

}

export default scrollTo;