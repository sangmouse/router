import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div>
          This is contact page
      </div>
    );
  }
}

export default Contact;

Contact.propTypes = {
};