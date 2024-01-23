import React from 'react'
import ReactDOM from 'react-dom/client'
import NavRoutes from './routes/NavRoutes.jsx';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext.jsx';
import './main.scss';
import store from './store/store.js';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById("root")).render(
 
  <Provider store={store}>
    <AuthProvider>
    <BrowserRouter>
      <NavRoutes />
    </BrowserRouter>
    </AuthProvider>
  </Provider>
);
