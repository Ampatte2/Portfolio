import React from 'react'
import style from "../style/styledcomponents"
import logo from "../images/logo.png"
import scrollTo from "./scroll"

export default class NavList extends React.Component {
    
    render() {
        return (
            <style.navlist>
                    <style.navimg src={logo}/>
                    <style.navlistitem onClick={()=>scrollTo(document.body.scrollHeight, "contact")} style={{float:"right", marginRight:"2vw"}}>Contact</style.navlistitem>
                    <style.navlistitem onClick={()=>scrollTo(0, "work")}>Work</style.navlistitem>
                    <style.navlistitem onClick={()=>scrollTo(0, "about")}>About Me</style.navlistitem>                    
                    <style.navlistitem onClick={()=>scrollTo(0, "home")}>Home</style.navlistitem>                            
            </style.navlist>
        )
    }
}
