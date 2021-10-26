import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Lamen",
          type: "withdraw",
          category: 'Comida',
          amount: 50.00,
          createdAt: new Date('2021-10-25 21:00:00'),
        },
        {
          id: 2,
          title: "Cartão",
          type: "withdraw",
          category: 'Pagamentos',
          amount: 375.00,
          createdAt: new Date('2021-10-10 10:00:00'),
        }
      ],
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transations', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


