import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Products from './products';

export default class  Main extends React.Component{
  constructor(){
    super()
    this.state={
      Products:[]
    }
  }

  componentDidMount(){
  axios.get('/api/products')
    .then(res=>res.data)
    .then(products=> this.setState({ products }))
    .catch(console.error)
  }
  

render(){
  const {products} = this.state;
  return (
    <Router>
      <div>
  <Route path='/' exact component={() => <Products products={products} />}/>  
  {/* <Route path='/api/products' exact render={() => <Products products={products} />}/>   */}
      </div>
    </Router>
  );
}
}
