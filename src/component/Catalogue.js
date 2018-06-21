import React, { Component} from 'react';
import Product from './Product';
import Filter from './CatalogueFilter';

class Catalogue extends Component{
    constructor(props){
        super(props);

        this.state = {
            filterOptions: [],
        }
        this.handleFilter = this.handleFilter.bind(this);

    }

    setFilter = filter => {
        let filterOptions = Object.assign([], this.state.filterOptions);
        filterOptions.push(filter);

        this.setState({
            filterOptions: filterOptions,
        });
    }

    removeFilter = filter => {
        let filterOptions = Object.assign([], this.state.filterOptions);
        
        filterOptions = filterOptions.filter(elem => {
            if(elem !== filter) return elem;
        });

        this.setState({
            filterOptions: filterOptions,
        });
    }

    handleFilter = (event, filter) => {
        if(event.target.checked){
            this.setFilter(filter);
        }else this.removeFilter(filter);
    }

    filteredList = () => {
        let products = Object.assign([], this.props.listOfProducts);
        let filteredList = [];
        products.forEach( product => {
            this.state.filterOptions.forEach( filter => {
                if(filter === product.category) filteredList.push(product);
                return;
            })
        });
        return filteredList;
    }


    render(){
        const filteredList = this.state.filterOptions.length ? this.filteredList()
                                                             : this.props.listOfProducts;
        return (
            <div id="catalogue">
                <Filter handleClick={ this.handleFilter } />

                {filteredList.map( product => <Product handleClick={ this.props.handleClick }key={product.sku} {...product} />)}

            </div>
        )
    }
};



export default Catalogue;