import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {

    const {match} = this.props
    // console.log(match)
    const name = match.params.name


    return (
      <div>
          This is product detail {name}
      </div>
    );
  }
}

export default Product;

Product.propTypes = {
};