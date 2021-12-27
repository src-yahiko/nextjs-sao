import axios from 'axios';
import { setCookie } from 'nookies'

const login = async (req, res) => {
    const { email, password } = req.body;

    axios
        .post('https://strapi.barutec.com/api/auth/local', {
            identifier: email,
            password,
        })
        .then(response => {
            // Handle success
            setCookie({ res }, 'jwt', response.data.jwt, {
                httpOnly: true,
                secure: true,
                maxAge: 1 * 60 * 60,
                path: '/',
            });
            // console.log('User profile', response.data.user);
            // console.log('User token', response.data.jwt);
            res.status(200).end();
        })
        .catch(error => {
            // Handle error.
            res.status(400).send(error.response.data.error.message);
        });



}

export default login