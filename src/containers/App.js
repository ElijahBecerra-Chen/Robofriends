import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  searchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc mt5">loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearchChange={this.searchChange} />
        <Scroll>
          <CardList robots={filteredRobot} />
        </Scroll>
      </div>
    );
  }
}

export default App;
