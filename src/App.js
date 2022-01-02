import "./App.css";
import { Component } from "react";

import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { formName: "", formDescription: "", tasks: [] };

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  mySetState(key, value) {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState[key] = value;
      return newState;
    });
  }

  onFormChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState[name] = value;
      return newState;
    });
  }

  onFormSubmit() {
    this.setState((prevState) => {
      const newState = {
        formName: "",
        formDescription: "",
        tasks: [...prevState.tasks],
      };
      newState.tasks.push({
        name: prevState.formName,
        description: prevState.formDescription,
      });
      return newState;
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <div>
            <input
              type="text"
              name="formName"
              value={this.state.formName}
              onChange={this.onFormChange}
            />
            <label htmlFor="task-name">Task Name</label>
          </div>

          <div>
            <input
              type="text"
              name="formDescription"
              value={this.state.formDescription}
              onChange={this.onFormChange}
            />
            <label htmlFor="task-description">Task Description</label>
          </div>

          <input type="button" value="Submit" onClick={this.onFormSubmit} />
        </form>
        <Overview tasks={this.state.tasks}></Overview>
      </div>
    );
  }
}

export default App;
