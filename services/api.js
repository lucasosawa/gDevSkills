import axios from "axios";
import { Alert } from 'react-native';
const api = axios.create({
    baseURL:"https://gdev-skills.herokuapp.com/api",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

api.interceptors.response.use(
    response => {
        console.log(response);
        // Do something with response data

        return response
    },
    error => {

        // Do something with response error

        // You can even test for a response code
        // and try a new request before rejecting the promise

        // if (
        //     error.request._hasError === true &&
        //     error.request._response.includes('connect')
        // ) {
        console.log(error);
            Alert.alert(
                'Aviso',
                'Não foi possível conectar aos nossos servidores, sem conexão a internet',
                [ { text: 'OK' } ],
                { cancelable: false },
            )
        // }

        // if (error.response.status === 401) {
        //     const requestConfig = error.config
        //
        //     // O token JWT expirou
        //
        //     deleteUser().then(() => {
        //         navigate('AuthLoading', {})
        //     })
        //
        //     return axios(requestConfig)
        // }

        return Promise.reject(error)
    },
)

api.interceptors.request.use(
    config => {
        return 'success'
            // .then(user => {
            //     user = JSON.parse(user)
            //     if (user && user.token)
            //         config.headers.Authorization = `Bearer ${user.token}`
            //     return Promise.resolve(config)
            // })
            // .catch(error => {
            //     console.log(error)
            //     return Promise.resolve(config)
            // })
    },
    error => {
        return Promise.reject(error)
    },
)

export default api;