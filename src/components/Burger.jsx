import React from 'react'
import style from "../style/styledcomponents"
import logo from "../images/logo.png"
import {GiHamburgerMenu} from "react-icons/gi"
import scrollTo from "./scroll"

export default class Burger extends React.Component {
    constructor(){
        super()
        this.state={
            visibility:"hidden",
            height:"0"
        }
    }

    

    handleClick(){
        console.log(window.innerWidth, window.innerWidth)
        if(this.state.visibility==="hidden"){
            this.setState({visibility:"visible", height:"50vh"})
        }else{
            this.setState({visibility:"hidden", height:"0"})
        }
    }
    render() {
        return (
            <>
                <style.navimg src={logo}/>
                <style.burger onClick={()=>this.handleClick()}>
                    <GiHamburgerMenu size={30}></GiHamburgerMenu>
                </style.burger>
                <style.burgerdiv visibility={this.state.visibility} height={this.state.height}>
                    <style.burgeritem onClick={()=>scrollTo(0, "home")}>
                        Home
                    </style.burgeritem>
                    <style.burgeritem onClick={()=>scrollTo(0, "work")}>
                        Work
                    </style.burgeritem>
                    <style.burgeritem onClick={()=>scrollTo(0, "about")}>
                        About Me
                    </style.burgeritem>
                    <style.burgeritem onClick={()=>scrollTo(document.body.scrollHeight, "contact")}>
                        Contact
                    </style.burgeritem>
                </style.burgerdiv>
            </>
            
        )
    }
}
