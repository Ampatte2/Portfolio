import React from 'react'
import style from "../style/styledcomponents"
import NavList from "./NavList"
import Burger from "./Burger"



export default class Navbar extends React.Component { 
    constructor(){
        super()
        this.state={
            navDiv: <NavList></NavList>,
            burgerDisplay:false,
            burgerOpen:false
        }
    }
    

    updateDimension(){
        
        if(window.innerWidth<800){
            this.setState({navDiv:  <Burger></Burger>})
        }else{
            this.setState({navDiv:  <NavList></NavList>})
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.updateDimension.bind(this))
    }
    
    render() {

        if(window.innerWidth<800){
            this.state.navDiv = <Burger></Burger>
        }
        
        return (
            
            <style.nav>
                
                {this.state.navDiv}
            </style.nav>
            
        )
    }
}
