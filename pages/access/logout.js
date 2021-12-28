import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import axios from 'axios'

import Guard from "../../utils/guard";
export const getServerSideProps = async (ctx) => Guard(ctx)

export default function Access(props) {
    const router = useRouter()

    const logout = async () => {
        try {
            props.setUserData({})
            await axios.get('/api/logout');
            router.push('/');
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post('/api/logout')
            return router.replace('/')
        } catch (err) {
            alert(err)
        }
    }
    return <main className="w-100 py-5">
        <div className="container-fluid col-12 col-md-6 col-lg-4">
            <h1 className='display-1 text-dark border-bottom'>Abmelden.</h1>

            <div>
                <p className='lead text-center'>Sie sind dabei sich abzumelden.</p>
                <Button onClick={logout} variant="danger" type="submit" className="border text-light rounded-0 w-100">
                    {props.user.email} abmelden
                </Button>
            </div>
        </div>

    </main>
}