import React from 'react';
export default class Products extends React.Component{

constructor(){
    super()
    this.state={
      product:[],
    };
  this.update=this.update.bind(this) 
  this.changeStatus = this.changeStatus.bind(this) 
  
} 
  changeStatus(ev) {
    let id=ev.target.value
    let products = this.props.products;
    products.find(product => {
      if (product.id === id * 1) {
        product.isSpecial = !product.isSpecial
      }
    })
    this.setState({ product })
   
  } 
  update(ev){
    ev.preventDefault();
    this.props.Toupdate(product)
    
  }
 

// componentDidMount(){
 
//   if(products){
//     this.setState({ products})
   
//   }
  
// }
render(){
  const { products, Toupdate } = this.props
  const { update, changeStatus}=this;
  return(
    <div>
    <h1>Acme Product Specials</h1>
    <h2>
      we have   {
        products.filter(product=>product.isSpecial).length
      }  special Products
    </h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: ' 1 1 0%'}}>
          <form onSubmit={update}>
            <h3>regular Products</h3>
            <select onchange={changeStatus}>
              <option value='-1' >--select--</option>
              {products.map(product=>{
                if(!product.isSpecial)
                  return <option key={product.id} value={product.id}>{product.name}</option>
              })}
            </select>
            <button onClick={changeStatus}>change status</button>
          </form>
        </div>

      </div>
      <div style={{display: 'flex'}}>
        <div style={{flex:' 1 1 0%'}}>
          <form onSubmit={update}>
          <h3>special Products</h3>
            <select>
              <option value='-1'>--select--</option>
              {products.map(product => {
                if (product.isSpecial)
                  return <option key={product.id} value={product.id}>{product.name}</option>
              })}
            </select>
            <button onClick={changeStatus}>change status</button>
          </form>
        </div>
      </div>

      </div>
  )
}

};




