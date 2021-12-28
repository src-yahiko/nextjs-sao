import { Form, Button, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Alert } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import GuardAnti from '../../utils/guardAnti'
export const getServerSideProps = async (ctx) => GuardAnti(ctx)

export default function Access(props) {
    const router = useRouter()
    const [errorMsg, setErrorMsg] = useState("")
    useEffect(() => { console.log("DEBUG", props.user); props.setUserData(props.user) }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMsg("")

        if (e.target.formofaddress.value === "0")
            return setErrorMsg("Bitte geben Sie eine Anredeform an.")

        if (e.target.email.value !== e.target.reEmail.value)
            return setErrorMsg("Bitte überprüfen Sie Ihre Eingaben. Die E-Mails stimmen nicht überein.")

        if (e.target.password.value !== e.target.rePassword.value)
            return setErrorMsg("Bitte überprüfen Sie Ihre Eingaben. Die Passwörter stimmen nicht überein.")


        const userData = {
            username: e.target.firstname.value + e.target.lastname.value,
            password: e.target.password.value,
            email: e.target.email.value,
            formofaddress: e.target.formofaddress.value,
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value
        }

        console.log(userData)

        try {
            await axios.post('/api/register', userData)
            return router.replace('/profile')
        } catch (err) {
            return setErrorMsg(err.response.data)
        }
    }
    return <main className="w-100 py-5">
        <Form className="container-fluid col-12 col-md-6 col-lg-4" onSubmit={handleSubmit}>
            <h1 className='display-1 text-dark border-bottom'>Registrieren.</h1>
            <Form.Group className="mb-3">
                <Form.Label>Persönliche Angaben</Form.Label>
                <Row>
                    <Col lg={4}>
                        <Form.Select aria-label="Anrede" id="formofaddress" required>
                            <option value="0">Anrede</option>
                            <option value="Frau">Frau</option>
                            <option value="Herr">Herr</option>
                        </Form.Select>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col><Form.Control id="firstname" className="mt-2" type="text" placeholder="Vorname" required /></Col>
                    <Col><Form.Control id="lastname" className="mt-2" type="text" placeholder="Nachname" required /></Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3" autoComplete="off">
                <Form.Label>E-Mail Adresse</Form.Label>
                <Form.Control id="email" type="email" placeholder="E-Mail Adresse" required />
                <Form.Control id="reEmail" className="mt-2" type="text" placeholder="E-Mail Adresse wiederholen" required autoComplete="off" />
                <Form.Text className="w-100 text-muted text-center">
                    Keine Sorge, wir teilen Ihre E-Mail Adresse mit Niemanden.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Passwort</Form.Label>
                <Form.Control id="password" type="password" placeholder="Passwort" required autoComplete="off" />
                <Form.Control id="rePassword" className="mt-2" type="password" placeholder="Passwort wiederholen" required autoComplete="off" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Allgemeine Geschäftsbedingungen</Form.Label>
                <Form.Check type="checkbox" id="acceptCheckbox" label="Ich habe die AGBs gelesen und bin mit ihnen einverstanden." required />
            </Form.Group>
            {errorMsg !== "" && (<Alert variant="warning">
                {errorMsg}
            </Alert>)}
            <div>
                <Button variant="primary" type="submit" className="border text-light rounded-0 w-100">
                    Registrieren
                </Button>
                <Link href="/access" passHref><a><Button variant="outline-secondary" className="border rounded-0 w-100 mt-2">
                    Mit bestehendem Konto anmelden
                </Button></a></Link>
            </div>
        </Form>

    </main>
}