import React from 'react'
import style from "../style/styledcomponents"


export default class Projects extends React.Component {
    handleClick = (e) =>{   
        //sends to handleclick function of parent if the modal is not visible        
        if(this.props.visible === false){
            this.props.handleClick(e)
        }else{
            return
        }
        
    }
    
    render() {

        return (
            <style.projectcontainer>

            <style.project onClick={()=>{this.handleClick("project1")}}>
            </style.project>

            <style.project onClick={()=>{this.handleClick("project2")}}>            
            </style.project>

            <style.project onClick={()=>{this.handleClick("project3")}}>                
            </style.project>
            
            </style.projectcontainer>
        )
    }
}
