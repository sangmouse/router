import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product'


const products = [
  {
    id: 1,
    name: 'Iphone 3',
    slug : 'iphone',
    price: 200
  },
  {
    id: 2,
    name: 'Samsung',
    slug : 'samsung',
    price: 400
  },
  {
    id: 3,
    name: 'Oppo',
    slug : 'oppo',
    price: 300
  },
]

// const match = this.props

class Products extends Component {

  render() {
    const {match} = this.props
    const url = match.url
    // console.log(url)


    var result = products.map((product, index) => {
      return (
        <NavLink to = {`${url}/${product.slug}`} key = {index}>
          <li className="list-group-item" key={index}>
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      )
    })
    // const url = match.url
    // console.log(url)

    return (
      <div>
        This is products page
        <div className="row">
          <ul className="list-group">
            {/* <li className="list-group-item">Text</li> */}
            {result}
          </ul>
        </div>
        <div className = "row">
          <Route path = "/products/:name" component = {Product} />
        </div>
      </div>
    );
  }
}

export default Products;