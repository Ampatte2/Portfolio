import React from 'react'
import style from "../style/styledcomponents"
import quiz from "../images/quiz-app.png"
import workout from "../images/workout-app.png"
import portfolio from "../images/portfolio-app.png"


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
                <style.projectimg src={quiz}/>
            </style.project>

            <style.project onClick={()=>{this.handleClick("project2")}}>
                <style.projectimg src={workout}/>          
            </style.project>

            <style.project onClick={()=>{this.handleClick("project3")}}>
                <style.projectimg src={portfolio}/>                
            </style.project>
            
            </style.projectcontainer>
        )
    }
}
