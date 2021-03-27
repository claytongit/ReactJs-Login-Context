import React, { createContext, useState, useContext, useEffect } from 'react';

import api from '../service/api';

const AuthContext = createContext({});

export function AuthProvider({ children  }){

    const [ user, setUser ] = useState(null);

    async function Login(){

        const response = await api.post('/authenticate', {
            "name": "Mateus Silva", //email ou usuario
            "website": "https://devacademy.com.br", //senha
        });

        setUser(response.data.user);

        localStorage.setItem('@App:user', JSON.stringify(response.data.user));
        localStorage.setItem('@App:token', response.data.token);

    }

    function Logout() {
        setUser(null);
    
        sessionStorage.removeItem('@App:user');
        sessionStorage.removeItem('App:token');
      }

    useEffect(() => {

        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');
    
        if (storagedToken && storagedUser) {

          setUser(JSON.parse(storagedUser));

          api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        }

      }, []);

    return(
        <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout } } >
            { children }
        </AuthContext.Provider>
    );
}

export function useAuth() {

    const context = useContext(AuthContext);
  
    return context;

}