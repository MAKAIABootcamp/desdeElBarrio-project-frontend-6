import React from 'react'
import ReactDOM from 'react-dom/client'
import NavRoutes from './routes/NavRoutes.jsx';
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from './context/AuthContext.jsx';
import './main.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <NavRoutes /> 
    </BrowserRouter>
  </AuthProvider>
);
