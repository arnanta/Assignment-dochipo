import React, { Component } from 'react'

export class Products extends Component {
    render() {
        const productItems=this.props.products.map(product=>{
            <div className="col-md-4" key={product.id}>


                <div className="thumbnail text-center">
                    <img src={`./products/${product.sku}_2.jpg`} alt={product.title}/>
                    <p>{product.title}</p>

                </div>
            </div>
        })
        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

export default Products
