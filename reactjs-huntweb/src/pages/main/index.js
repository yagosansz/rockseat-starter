import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        products: [],
    }

    // Executed when the componenet is displayed
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        
        this.setState({ products: response.data.docs });
    }; 

    // Listen for changes in the state variable...
    render() {
        return (
            <div className="product-list">
                { this.state.products.map(product => (
                    <h2 key={ product._id }>{ product.title }</h2>
                )) }
            </div>
        )
    }
}