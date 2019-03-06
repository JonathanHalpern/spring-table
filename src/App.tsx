import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import cities from "./Data/cities.json";

import { Table } from "./Containers";

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          path="/:sortTitle?"
          exact
          component={({ match }: any) => (
            <Table data={cities} sortTitle={match.params.sortTitle} />
          )}
        />
      </Router>
    );
  }
}

export default App;
