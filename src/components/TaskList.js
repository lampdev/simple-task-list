import React from "react";
import TaskCreate from "./TaskCreate";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: 'Create App'
        },
        {
          id: 2,
          name: 'Build App'
        },
        {
          id: 3,
          name: 'Deploy App'
        }
      ]
    };

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(event, taskName) {
    this.setState({
      tasks: [...this.state.tasks, { id: this.state.tasks.length + 1, name: taskName }]
    });
  }

  removeTask(event, taskId) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskId)
    });
  }

  render() {
    return (
      <div>
        <TaskCreate onTaskCreated={this.addTask} />
        <ul>
          {this.state.tasks.map(task => {
            return (
              <TaskItem id={task.id} name={task.name} key={task.id} onTaskDeleted={this.removeTask} />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default TaskList;
