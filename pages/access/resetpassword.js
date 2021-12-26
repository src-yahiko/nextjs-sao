import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Badge, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'


export default function Resetpassword() {
    return <main className="w-100 py-5">
        <Form className="container-fluid col-12 col-md-6 col-lg-4" onSubmit={(e) => e.preventDefault()}>
            <h1 className='display-1 text-dark border-bottom'>Self-Service.</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-Mail Adresse</Form.Label>
                <Form.Control type="email" placeholder="E-Mail Adresse" required />
                <Form.Text className="w-100 text-muted text-center">
                    Geben Sie die E-Mail Adresse an die Sie zum registrieren benutzt haben, um Ihren Zugang wiederherzustellen.
                </Form.Text>
            </Form.Group>
            <div>
                <Button variant="primary" type="submit" className="border text-light rounded-0 w-100">
                    Passwort wiederherstellen
                </Button>
                <Link href="/access" passHref>
                    <a>
                        <Button variant="outline-secondary" className="mt-2 rounded-0 w-100">
                            Anmelden
                        </Button>
                    </a>
                </Link>
            </div>
        </Form>
    </main>
}