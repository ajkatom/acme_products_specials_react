import React from 'react';
export default class Products extends React.Component{

constructor(){
    super()
    this.state={
      products:[]
    };
  this.onSave=this.onSave.bind(this) 
  this.onChange=this.onChange.bind(this) 
} 
  onSave(ev){
    ev.preventDefault();
    console.log('saving');
  }
  onChange(ev){
    let products = this.state.products;
    products.find(product=>{
      if(product.id===ev.target.value*1){
         product.isSpecial=!product.isSpecial
      }
    })
    this.setState({products})
  }
componentDidMount(){
  const {products}=this.props
  if(products){
    this.setState({ products })
   
  }
  
  
}
render(){
  let products = this.state.products;
  const {onSave}=this;
  const {onChange}=this;
  return(
    <div>
    <h1>Acme Product Specials</h1>
    <h2>
      we have   {
        products.filter(product=>product.isSpecial).length
      }  special Products
    </h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: ' 1 1 0%' }}>
          <form onSubmit={onSave}>
            <h3>regular Products</h3>
            <select onChange={onChange}>
              <option value='-1' >--select--</option>
              {products.map(product=>{
                if(!product.isSpecial)
                  return <option key={product.id} value={product.id}>{product.name}</option>
              })}
            </select>
            <button>change status</button>
          </form>
        </div>

      </div>
      <div style={{display: 'flex'}}>
        <div style={{flex:' 1 1 0%'}}>
          <form onSubmit={onSave}>
          <h3>special Products</h3>
            <select>
              <option value='-1'>--select--</option>
              {products.map(product => {
                if (product.isSpecial)
                  return <option key={product.id} value={product.id}>{product.name}</option>
              })}
            </select>
            <button>change status</button>
          </form>
        </div>
      </div>

      </div>
  )
}

};




