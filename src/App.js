import React from 'react';
import './App.css';
import {Navbar, Modal} from "./components"
import {Banner, Projects, About, Contact} from "./sections"
import projects from "./projectData";


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        shown:"",
        show: false,
        project:""
    }
  }
  
  showModal = (item) =>{

    //sets modal to visible and describes the div that was clicked in the projects with the project id
    this.setState({
        show: !this.state.show,
        project: projects[item]
    })

    //sets blur to the rest of the document on modal open
    if(this.state.shown===""){
      this.setState({shown:"blur"})
    }else{
      this.setState({shown:""})
    }

  }
  
  render(){
    
  return (
    <>
      <div className ={this.state.shown} >
      
      <Navbar></Navbar>
      <Banner></Banner>
      
      
      <About id="About Me"></About>
      <Projects handleClick={this.showModal} visible={this.state.show} id="Work"></Projects>

      <Contact id="Contact"></Contact>

      </div>

      <Modal onClose={this.showModal} show={this.state.show} project={this.state.project}></Modal>
    </>
    );
  }
}


export default App;
