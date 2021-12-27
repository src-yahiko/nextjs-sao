import { Form, Button, Alert } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import GuardAnti from '../../utils/guardAnti'
export const getServerSideProps = async (ctx) => GuardAnti(ctx)

export default function Access(props) {
    const router = useRouter()
    const [errorMsg, setErrorMsg] = useState("")
    useEffect(() => { props.setUserData(props.user) }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userData = {
            password: e.target.password.value,
            email: e.target.email.value
        }

        try {
            await axios.post('/api/login', userData)
            return router.replace('/profile')
        } catch (err) {
            return setErrorMsg(err.response.data)
        }
    }

    return <main className="w-100 py-5">
        <Form className="container-fluid col-12 col-md-6 col-lg-4" onSubmit={handleSubmit}>

            <h1 className='display-1 text-dark border-bottom'>Anmelden.</h1>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-Mail Adresse</Form.Label>
                <Form.Control type="email" placeholder="E-Mail Adresse" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Passwort</Form.Label>
                <Form.Control type="password" placeholder="Passwort" required />
                <Form.Text className="w-100 text-muted text-center">
                    <Link href="/access/resetpassword" passHref><a className="text-secondary">Passwort vergessen?</a></Link>
                </Form.Text>
            </Form.Group>
            {errorMsg !== "" && (<Alert variant="warning">
                {errorMsg}
            </Alert>)}
            <div>
                <Button variant="primary" type="submit" className="border text-light rounded-0 w-100">
                    Anmelden
                </Button>
                <Link href="/access/new" passHref><a><Button variant="outline-secondary" className="border rounded-0 w-100 mt-2">
                    Konto erstellen
                </Button></a></Link>
            </div>
        </Form>


    </main>
}