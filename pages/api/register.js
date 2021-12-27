import axios from 'axios';
import { setCookie } from 'nookies'

const register = async (req, res) => {
    const { username, password, email } = req.body;

    axios
        .post(process.env.api + '/api/auth/local/register', {
            username,
            email,
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

export default register