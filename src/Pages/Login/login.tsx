import React, { useState } from 'react';
import './Login.css'

const Login = () => {

    const [authenticated, setAuthenticated] = useState<string | null>(null);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const validarCadastro = () => {
        if (name === "") {
            alert("Todos os campos devem ser preenchidos!")
        }
    }

    return (
        <div className="cadastro-frame-holder">
            <img className="cadastro-image" src="https://assets.entrepreneur.com/content/3x2/2000/1601668159-Depositphotos-57033799-l-2015.jpg" alt="bacground" />
            <div className="cadastro-frame">
                <img className="logo-image" src="https://newimg.ebit.com.br/ebitBR/imagens/logo-lojas/logo_73874.gif" alt="logo" />
                <input id="nome" placeholder="Nome" onChange={(event) => setName(event.target.value)} />
                <input id="email" placeholder="E-mail" />
                <input id="age" placeholder="Idade" />
                <input id="password" placeholder="Senha" />
                <button onClick={(event) => validarCadastro()}>CADASTRAR</button>
            </div>
        </div>
    )
}

export default Login;