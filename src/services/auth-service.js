import api from './api'

const TOKEN_KEY = '@Company:token';
const COMPANY = '@Company:company';

export const signIn = async (acesso) => {

    try {

        const res = await api.post('/login', acesso)
        
        
            const token = res.data.token
            localStorage.setItem(TOKEN_KEY, JSON.stringify(token))

            try {
                const response = await api.get("/companies/whois", { headers: { Authorization: token } })
                var comp = response.data
                delete comp.password
                localStorage.setItem(COMPANY, JSON.stringify(comp))
            } catch (error) {
                console.log(error)
            }
        return res

    } catch (error) {
        console.log(error)
    }
}

export const signOut = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isSignedIn = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    return JSON.parse(token);
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY));
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