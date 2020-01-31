import React from "react";
import style from "../style/styledcomponents"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {

    const { status } = this.state;
    return (
        <style.contact>
            <h1 style={{color:"#4D5061"}}>Contact Me</h1>
      <style.contactform onSubmit={this.submitForm} action="https://formspree.io/mnqdqend" method="POST">
        <label>Name</label>
        <input type="text" name="name"/>
        <label>Email:</label>
        <input type="email" name="email" />
        <label >Phone</label>
        <input type="text" name="phone"/>
        <label>Message:</label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <style.contactbutton>Submit</style.contactbutton>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </style.contactform>
      </style.contact>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
