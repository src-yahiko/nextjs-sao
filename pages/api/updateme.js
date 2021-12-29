
// import axios from 'axios';
// import nookies from 'nookies';

// const Guard = async (ctx) => {
//     const cookies = nookies.get(ctx)
//     let user = null;

//     if (cookies?.jwt) {
//         try {
//             const { data } = await axios.get(process.env.api + '/api/users/me', {
//                 headers: {
//                     Authorization:
//                         `Bearer ${cookies.jwt}`,
//                 },
//             });
//             user = data;
//             // console.log(user)
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     if (!user) {
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: '/'
//             }
//         }
//     }

//     return {
//         props: {
//             user
//         }
//     }
// }

// export default Guard

import axios from 'axios';
import nookies from 'nookies'

const updateme = async (req, res) => {
    const { jwt, id, email, formofaddress, firstname, lastname } = req.body;
    console.log({ email, formofaddress, firstname, lastname }, jwt)
    if (jwt) {
        axios
            .put(process.env.api + '/api/users/' + id, {
                email, formofaddress, firstname, lastname
            }, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            .then(response => {
                // Handle success
                // setCookie({ res }, 'jwt', response.data.jwt, {
                //     httpOnly: true,
                //     secure: true,
                //     maxAge: 1 * 60 * 60,
                //     path: '/',
                // });
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
                res.status(200).end();
            })
            .catch(error => {
                // Handle error.
                res.status(400).send(error.response.data.error.message);
            });
    } else {
        // Not logged in
    }

}

// const res = await axios.put('http://localhost:1337/users/1',
//     {
//         displayName: "John Smith",
//         newsletter: true
//     },
//     {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     })

export default updateme