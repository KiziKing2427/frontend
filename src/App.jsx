import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import router from './Router';

function App() {
  return (
  
      <PayPalScriptProvider options={{ "client-id": "ASrRlrRUhXs2o_DJSHg53z0YhQb64OOLbj37UrndbWcdtlfvPs4rZ_aqJs0ZnOXE-fxpxZy1Ea2QyOVL", currency: "THB" }}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    
  );
}

export default App;
