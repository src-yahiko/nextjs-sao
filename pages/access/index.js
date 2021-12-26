import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Badge, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import Link from 'next/link'

export default function Access() {

    return <main className="w-100 py-5">
        <Form className="container-fluid col-12 col-md-6 col-lg-4" onSubmit={(e) => e.preventDefault()}>

            <h1 className='display-1 text-dark border-bottom'>Anmelden.</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-Mail Adresse</Form.Label>
                <Form.Control type="email" placeholder="E-Mail Adresse" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Passwort</Form.Label>
                <Form.Control type="password" placeholder="Passwort" required />
                <Form.Text className="w-100 text-muted text-center">
                    <Link href="/access/resetpassword" passHref><a className="text-secondary">Passwort vergessen?</a></Link>
                </Form.Text>
            </Form.Group>

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