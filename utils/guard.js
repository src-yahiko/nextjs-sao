
import axios from 'axios';
import nookies from 'nookies';

const Guard = async (ctx) => {
    const cookies = nookies.get(ctx)
    let user = null;

    if (cookies?.jwt) {
        try {
            const { data } = await axios.get(proccess.env.api + '/api/users/me', {
                headers: {
                    Authorization:
                        `Bearer ${cookies.jwt}`,
                },
            });
            user = data;
            // console.log(user)
        } catch (e) {
            console.log(e);
        }
    }

    if (!user) {
        return {
            redirect: {
                permanent: false,
                destination: '/'
            }
        }
    }

    return {
        props: {
            user
        }
    }
}

export default Guard