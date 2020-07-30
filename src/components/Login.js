import React, { useState } from 'react';
import { signIn } from '../services/auth-service';

import { useHistory } from 'react-router-dom';

const MsgError = (props) => {
    if (props.msgError === '') {
        return ""
    }
    return (
        <div className="alert alert-danger">
            {props.msgError}
        </div>
    )
}

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    async function singIn(e) {

        try {
            e.preventDefault();
            const res = await signIn({ email, password })
            if (res.status === 403 || res.status === 400) {
                setError("Email ou senha invalidos!")
            } else {
                history.push('/user/dashboard')
            }

        } catch (error) {
            console.log(error)
            setError("Email ou senha invalidos!")
        }
    }

    return (
        <div className="container">
            <nav className="navbar navbar-light ">
                                <a className="navbar-brand"></a>
                                <form className="form-inline">
                                    <button className="btn btn-light border border-dark mr-2" type="submit">
                                        <a href="sign_in">Login</a>
                                    </button>
                                    <button className="btn btn-light border border-dark" type="submit">
                                        <a href="sign_up">Cadastre-se</a>
                                    </button>

                                </form>
                            </nav>
            <div className="text-center row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <form className="form-signin" method="get" onSubmit={singIn}>
                        <img className="mb-4 " src="/imagens/business.png" alt="Bussiness Boost" />
                        <h1 className="h3 mb-3 font-weight-normal">
                            Acessar Como Empresa
                            </h1>
                        <MsgError msgError={error} />

                        <label className="sr-only">
                            Email address
                            </label>
                        <input
                            type="email"
                            id="inputEmail"
                            className="form-control mb-2"
                            name="email"
                            placeholder="Email address"
                            required autoFocus
                            value={email}
                            onChange={e => setEmail(e.target.value)} />

                        <label className="sr-only">
                            Password
                            </label>
                        <input
                            type="password"
                            id="inputPassword"
                            className="form-control mb-2"
                            name="senha"
                            placeholder="Password"
                            required autoFocus
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"></input> Remember me
                                </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default Login;




