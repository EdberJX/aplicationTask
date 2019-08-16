import React, { Component } from "react";

export default class FormTask extends Component {
  onSubmitTask = e => {
      //previene el comportamiento por defecto del evento onSubmit lo que hace que no recargue la pagina
    e.preventDefault();
    //llamomos la funcion que viene de props y le pasamos parametros
    this.props.addTask(this.state.title, this.state.description);
  };
   //el evento onChange tiene como propiedades name(obtiene el name del input) y value (obtiene el valor del input)
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  state = {
    title: "",
    description: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.onInputChange}
          />
          <br />
          <textarea
            type="textarea"
            placeholder="Description"
            value={this.state.description}
            name="description"
            onChange={this.onInputChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
