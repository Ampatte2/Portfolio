import React from 'react'
import style from "../style/styledcomponents"
import {IoIosCloseCircle, IoIosCode, IoMdLink} from "react-icons/io"

export default class Modal extends React.Component {
    

    onClose = e =>{
        this.props.onClose && this.props.onClose(e);
    };

    handleOutsideClick = (e) => {
        //exits modal if clicked outside of modal
        if (e.target.id === "") {
            document.removeEventListener("click", this.handleOutsideClick, false)
            this.onClose()
        }else{
            return
        
        }
      }

    
    

    render() {
        
        if(!this.props.show){
            return null
        }else{
            document.addEventListener("click", this.handleOutsideClick, false)
        }
        return (
            <style.modal id="modal" ref={node=>{this.node = node;}}>

                <style.modalimg src={this.props.project.img} id="modal"/>
                
                <IoIosCloseCircle style={{position:"absolute",right:0, top:0, color:"#4D5061"}}size={"3vh"}></IoIosCloseCircle>

                <style.modalinfo id="modal">
                
                    <h2 id="modal">{this.props.project.title}</h2>
                
                
                    <style.modalframework id="modal">
                        {this.props.project.frameworks.map((ele, i)=>{
                            return (<style.modalitem key={i} id="modal">{ele}</style.modalitem>)
                        })}
                    </style.modalframework>

                    <style.modaldescription>
                        {this.props.project.description}
                    </style.modaldescription>
                        
                    <style.modallinkdiv>
                        
                        <style.modallink href={this.props.project.code} target="_blank">
                            <div style={{paddingTop:"25px"}}>Code</div>
                            <IoIosCode size={30} style={{paddingTop:"20px"}}></IoIosCode>
                        </style.modallink>

                        <style.modallink href={this.props.project.demo} target="_blank">
                            <div style={{paddingTop:"25px"}}>Demo</div>
                            <IoMdLink size={30} style={{paddingTop:"20px"}}></IoMdLink>
                        </style.modallink>

                    </style.modallinkdiv>
                </style.modalinfo>  
            </style.modal>
        )
    }
}
