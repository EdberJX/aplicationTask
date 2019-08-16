import React, { Component } from "react";

export default class Task extends Component {
  //funciones que vienen de props
  addTask = taskId => {
    this.props.deleteTask(taskId);
  };
  checkDone = taskId => {
    this.props.checkDone(taskId);
  };

  //Estilos dinamicos
  styleComplete = () => {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "red" : "green",
      textDecoration: this.props.task.done ? "line-through" : "none"
    };
  };
  render() {
    const btnDelete = {
      fontSize: "18px",
      background: "#ea2027",
      color: "#fff",
      borderRadius: "50%",
      padding: "10px 15px",
      cursor: "pointer",
      border: "none"
    };
    //obtener solo la propiedad task de this.props.task
    const { task } = this.props;
    return (
      <p key={task.id} style={this.styleComplete()}>
        {task.title} - {task.description} - {task.id} - {task.done}
        {/* Para no crear una nueva funcion flecha podemos llamar a la funcion que
                        viene de props y bindearla es decir para decirle que es de la misma clase
                        osea del mismo contexto. Enlazamos el objeto global this el argumento pasado 
                       <input type="checkbox"  onChange={this.props.checkDone.bind(this,task.id)} />
                    
                    */}
        <input type="checkbox" onChange={() => this.checkDone(task.id)} />
        <button style={btnDelete} onClick={() => this.addTask(task.id)}>
          X
        </button>
      </p>
    );
  }
}
