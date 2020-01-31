import React from 'react'

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
            <div className="modal" id="modal" ref={node=>{this.node = node;}}>
                <button onClick={()=>this.onClose} style={{float:"right"}}>Close</button>
                <h2 id="modal">Modal Window</h2>
                <div id="modal">{this.props.children}</div>                
            </div>
        )
    }
}
