import React, { Component } from "react";
import Task from "../components/task";

export default class Tasks extends Component {
  render() {
    const { tasks } = this.props;

    return tasks.map(task => (
      //pasando props al componente task
      <Task
        task={task}
        key={task.id}
        deleteTask={this.props.deleteTask}
        checkDone={this.props.checkDone}
      />
    ));
  }
}
