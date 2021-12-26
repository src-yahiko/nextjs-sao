import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Badge, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

export default function Access() {
    return <main className="w-100 py-5">
        <Form className="container-fluid col-12 col-md-6 col-lg-4" onSubmit={(e) => e.preventDefault()}>
            <h1 className='display-1 text-dark border-bottom'>Registrieren.</h1>
            <Form.Group className="mb-3">
                <Form.Label>Persönliche Angaben</Form.Label>
                <Row>
                    <Col lg={4}>
                        <Form.Select aria-label="Anrede" id="selectfoa" required>
                            <option>Anrede</option>
                            <option value="1">Frau</option>
                            <option value="2">Herr</option>
                        </Form.Select>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col><Form.Control id="firstname" className="mt-2" type="text" placeholder="Vorname" required /></Col>
                    <Col><Form.Control id="surname" className="mt-2" type="text" placeholder="Nachname" required /></Col>
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