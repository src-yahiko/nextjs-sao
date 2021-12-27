
import axios from 'axios';
import nookies from 'nookies';

const GuardLow = async (ctx) => {
    const cookies = nookies.get(ctx)
    let user = {};
    console.log("Hello from GUARDLow!!")

    if (cookies?.jwt) {
        try {
            const { data } = await axios.get('https://strapi.barutec.com/api/users/me', {
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

    return {
        props: {
            user
        }
    }
}

export default GuardLow