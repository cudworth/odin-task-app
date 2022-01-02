import { Component } from "react";

class Overview extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div>
        <h1>Task List</h1>
        <ul>
          <hr />
          {tasks.map((task, index) => {
            const { name, description } = task;
            return (
              <li key={`task_key_${index}`}>
                <p>{`${name} | ${description}`}</p>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Overview;
