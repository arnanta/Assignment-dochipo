import React, { Component } from 'react'
import Products from './Products'

export class Men extends Component {
    state={
        products:[],
    }
    componentDidMount=()=>
    {
        fetch("http://localhost:3000/products")
        .then(res=>res.json())
        .then(data=>this.setState({
            products:data
        }))
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <Products products={this.state.products}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Men
