import React from 'react'
import style from "../style/styledcomponents"
import logo from "../images/logo.png"

export default class Navbar extends React.Component {    
    
    scrollTo(x){
        console.log(window.outerHeight, window.innerHeight)
        window.scrollTo(0,x)
    }
    render() {
        
        return (
            <style.nav>
                <style.navlist>
                    <style.navimg src={logo}/>
                    
                    <style.navlistitem style={{float:"right", marginRight:"2vw"}} onClick={()=>window.scrollTo({top:0})}>Home</style.navlistitem>
                    <style.navlistitem style={{float:"right"}} onClick={()=>this.scrollTo(800)}>Work</style.navlistitem>
                    <style.navlistitem style={{float:"right"}} onClick={()=>this.scrollTo(1450)}>About Me</style.navlistitem>
                    <style.navlistitem style={{float:"right"}}>Contact</style.navlistitem>
                </style.navlist>
            </style.nav>
            
        )
    }
}
