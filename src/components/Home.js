import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div>
          This is home page
      </div>
    );
  }
}

export default Home;

