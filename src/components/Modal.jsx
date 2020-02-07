import React from 'react'
import style from "../style/styledcomponents"


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
                
                <i class="fa fa-times-circle fa-2x" style={{position:"absolute",right:"7px", top:"7px", color:"#4D5061"}}></i>

                <style.modalinfo id="modal">
                
                    <style.modalheader id="modal">{this.props.project.title}</style.modalheader>
                
                
                    <style.modalframework id="modal">
                        {this.props.project.frameworks.map((ele, i)=>{
                            return (<style.modalitem key={i} id="modal">{ele}</style.modalitem>)
                        })}
                    </style.modalframework>

                    <style.modaldescription>
                        {this.props.project.description}
                    </style.modaldescription>
                        
                    <style.modallinkdiv>
                        
                        <style.modallink href={this.props.project.code} target="_blank" rel="noopener noreferrer">
                            <div style={{marginRight:"10px", marginLeft:"30px", marginTop:"0.5vmin", color:"#CDD1C4"}}>Code</div>
                            <i className="fa fa-code fa-2x" ></i>
                        </style.modallink>
                        {this.props.project.demo !== "" &&
                            <style.modallink href={this.props.project.demo} target="_blank" rel="noopener noreferrer">
                            <div style={{marginRight:"10px", marginLeft:"30px", marginTop:"0.5vmin", color:"#CDD1C4"}}>Demo</div>
                            <i className="fa fa-link fa-2x" ></i>
                            </style.modallink>
                        }
                        

                    </style.modallinkdiv>
                </style.modalinfo>  
            </style.modal>
        )
    }
}
