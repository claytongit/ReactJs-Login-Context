import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth';

import api from '../../service/api';

export default function Home(){

    const [ data, setData ] = useState([]);

    const { signed, Logout } = useAuth();

    console.log(signed);

    async function handleLogout() {
        Logout();
    }

    useEffect(() => {

        (async () => {

            const res = await api.get('/users');
            
            setData(res.data);

        })();


    }, []);

    console.log(data);

    return(
        <div>
            <h1>Home</h1>
            {data.map(value => (
                <div key={value.id}>
                    <p>{value.name}</p>
                </div>
            ))}
            <button onClick={ handleLogout } >Sair</button>
        </div>
    );
}