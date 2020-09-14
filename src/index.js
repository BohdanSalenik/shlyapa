import React from 'react';
import ReactDOM from 'react-dom';
import Client from 'shopify-buy';
import App from './App';

const client = Client.buildClient({
  domain: 'shlyapa-free.myshopify.com',
  storefrontAccessToken: 'e47b6d51fdbe8822f546dcc285a826fa'
});

ReactDOM.render(
  <React.StrictMode>
    <App client={client}/>
  </React.StrictMode>,
  document.getElementById('root')
);

