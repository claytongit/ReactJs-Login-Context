import React from 'react';

import Routes from './routes';

import { AuthProvider } from './context/auth';

import './global.css';

export default function App(){
  return(
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}