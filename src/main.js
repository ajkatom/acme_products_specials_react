import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Products from './products';

export default class  Main extends React.Component{
  constructor(){
    super()
    this.state={
      products:[],
    }
    this.updateStatus=this.updateStatus.bind(this)
  }
 
  updateStatus(product){
    const id=product.id;
    const { products }=this.state
    products.find(product => {
      if (product.id === id * 1) {
        product.isSpecial = !product.isSpecial
        this.props.Toupdate(product)
        this.setState({ product })
      }
    })
    axios.put(`/api/products/${product.id}`,product)
      .then(res=>res.data)
      .catch(console.error)

  }
  componentDidMount(){
  axios.get('/api/products')
    .then(res=>res.data)
    .then(products=> this.setState({ products }))
    .catch(console.error)
  }
  

render(){
  const { products} = this.state;
  const {updateStatus}=this;
  return (
    <Router>
      <div>
        <Route path='/' exact component={() => <Products products={products} Toupdate={updateStatus}/>}/>   
      </div>
    </Router>
  );
}
}
