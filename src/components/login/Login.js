import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import "./login.css"
import logo from '../img/business.png'
import Home from '../Home';
import api from '../../services/api'
import StoreContext from '../Store/Context'
// Layout da tela de Login

function initialState() {
    return { email: '', password: '' }
}



const useLogin = () => {
    const [values, setValues] = useState(initialState);
    const { setToken } = useContext(StoreContext);
    const history = useHistory();

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    

    function onSubmit(event) {
        event.preventDefault();
        api.post('/login',
            values
        )
        .then(function (res) {
            console.log(res.data.token)
            setToken(res.data.token)
            history.push('/user/home')
        })
        .catch(function (error) {
            console.log(error)
        })

    }


    return (
        <div className="user-login">
            <h1 className="user-login__title">Acessar o Sistema</h1>
            <img src={logo} className="card-img-top" />
            <form onSubmit={onSubmit} >
                <div className="user-login__form-control">
                    <label htmlFor="user">Usuário</label>
                    <input
                        id="user"
                        type="text"
                        name="email"
                        onChange={onChange}
                        value={values.email}
                    />
                </div>
                <div className="user-login__form-control">
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={onChange}
                        value={values.password}
                    />
                </div>
                <button
                    type="submit"
                    theme="contained-green"
                    className="user-login__submit-button"
                    rounded
                >
                    Entrar
                </button>
            </form>
        </div>
    )
}

export default useLogin