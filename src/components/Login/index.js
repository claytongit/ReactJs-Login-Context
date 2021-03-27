
import React from 'react';

import { useAuth } from '../../context/auth';

import Img from '../../assets/teste.png';

import "./styles.css";

export default function Login(){

    const { signed, Login } = useAuth();

    console.log(signed);

    async function handleLogin() {
        await Login(
            {
                name: "Mateus Silva",
                website: "https://devacademy.com.br",
            }
        );
    };

    return(
        <section>

            <img src={ Img } alt="Imagem ilustrativa" />

            <div>

                <label for="email">E-mail</label>
                <input type="email" name="email" placeholder="Informe seu e-mail" autoComplete="off" />

                <label for="email">Senha</label>
                <input type="password" name="email" placeholder="Informe sua senha" />

                <button type="submit" onClick={ handleLogin }>Entrar</button>

            </div>

        </section>
    );
}