import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    // Executed when the componenet is displayed
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    }; 

    prevPage = () => {
        const { page } = this.state;

        // Do nothing if already on first page
        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        // Do nothing if already on last page
        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    // Listen for changes in the state variable...
    render() {

        const { products, productInfo, page } = this.state;

        return (
            <div className="product-list">
                { products.map(product => (
                    <article key={ product._id }>
                        <strong>{ product.title }</strong>
                        <p>{ product.description }</p>

                        <a href="#">Access</a>
                    </article>
                )) }
                <div className="actions">
                    <button disabled={ page === 1 } onClick={ this.prevPage }>Previous</button>
                    <button disabled={ page === productInfo.pages } onClick={ this.nextPage }>Next</button>
                </div>
            </div>
        )
    }
}