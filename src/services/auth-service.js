import api from './api'

const TOKEN_KEY = '@Company:token';
const COMPANY = '@Company:company';

export const signIn = async (acesso) => {

    try {
        const res = await api.post('/login', acesso)

        const token = res.data.token
        const dados = {"email": acesso.email}
        try {
            const response = await api.post('/companies/whois', dados)
            console.log(response)
            var comp = response.data
            delete comp.password
            console.log(comp)
            localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
            localStorage.setItem(COMPANY, JSON.stringify(comp))
            return true
        } catch (error) {
            console.log(error)
        }
        return false

    } catch (error) {
        console.log(error)
    }
}

export const signOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(COMPANY);
}

export const isSignedIn = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    return JSON.parse(token);
}

export const getCompany = () => {
    const company = JSON.parse(localStorage.getItem(COMPANY));
    delete company.password
    return company;
}

export const getCompanyId = () => {
    const company = JSON.parse(localStorage.getItem(COMPANY));
    return company.id;
}

export const getOrders = () => {
    const company = JSON.parse(localStorage.getItem(COMPANY));
    delete company.password
    return company.orders;
}