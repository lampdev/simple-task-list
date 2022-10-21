import React from 'react';

class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onTaskCreated(event, this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="Input-label">
          Add a new task
          <input type="text" name="task-name" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TaskCreate;
