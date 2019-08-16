import React, { Component } from "react";
//importando base de datos
import { tasks } from "./db/tasks";
//importando componentes
import Tasks from "./components/tasks";
import FormTask from "./components/taskForm";
//importando estilos pero no lo utilizamos ene ste ejemplo
import "./App.css";

export default class App extends Component {
  //obtiene dos argumentos a traves de los parametros, crea un objeto newTask y lo añade al estado
  addTask = (title, description) => {
    const newTask = {
      title,
      description,
      id: this.state.tasks.length
    };
    //obtiene todo lo que esta en el estado y le agrega una nueva tarea
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  deleteTask = id => {
      //metodo filtro devuele un arrays dependiendo de la condicion (devuelve todos
      //los task que no tenga ese argumento)
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks });
  };

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  };
  state = {
    tasks
  };
  render() {
    return (
      <div >
        <FormTask addTask={this.addTask} />
        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
        />
      </div>
    );
  }
}
