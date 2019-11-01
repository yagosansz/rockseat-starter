import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

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

        const { products } = this.state;

        return (
            <div className="product-list">
                { products.map(product => (
                    <article key={ product._id }>
                        <strong>{ product.title }</strong>
                        <p>{ product.description }</p>

                        <a href="#">Access</a>
                    </article>
                )) }
            </div>
        )
    }
}