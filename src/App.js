import React, { Component } from "react";
import CardList from "./CardList.js";
import { robots } from "./robots.js";
import SearchBox from "./SearchBox.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  searchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const filteredRobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.searchChange} />
        <CardList robots={filteredRobot} />
      </div>
    );
  }
}

export default App;
