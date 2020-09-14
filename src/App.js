import React, { Component } from 'react';
import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';
import './main.scss'

class App extends Component {
  client  = this.props.client;
  state = {
    loading: true,
    isCartOpen: false,
    checkout: { lineItems: [] },
    products: null,
    shop: {}
  };

  async componentDidMount() {
    const client = this.props.client;
    const products = await client.product.fetchAll();
    const checkout = await client.checkout.create();
    const shop = await client.shop.fetchInfo();


    this.setState({
      products,
      checkout,
      shop,
      loading: false,
    })
  }
    

  render() {
    const {shop, loading, checkout} = this.state;
    console.log(checkout);

    return (
      <>
      {loading ? <Spinner /> : <Header shop={shop} />}
      
      </>
    );
  }
  
}

export default App;
