import Link from 'next/link'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Badge } from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function MyNavbar({ userData }) {
    const router = useRouter()
    useEffect(() => { }, [userData])
    const loggedIn = !(userData && Object.keys(userData).length === 0 && Object.getPrototypeOf(userData) === Object.prototype)

    return <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" className="pb-2 pt-3 shadow-sm">
        <Container fluid className="px-5">
            <Link href="/#navbar" passHref><Navbar.Brand className="p-2 px-4  "><div className='d-flex'><Image alt="Baru Logo" height={30} width={24} src="/baru.svg" /><p className="m-0 p-0 px-3">baru tec</p></div></Navbar.Brand></Link>
            {/* <Link href="/#navbar" passHref><Navbar.Brand style={{ position: "fixed", backgroundColor: "rgba(0,0,0,0.4);" }} className="p-2 px-4 pr-0 rounded-pill border border-primary"><div className='d-flex'><Image alt="Baru Logo" height={30} width={24} src="/baru.svg" /><p className="m-0 p-0 px-3">baru tec</p></div></Navbar.Brand></Link> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link href="/" passHref><Nav.Link active={router.pathname == "/"}>Startseite</Nav.Link></Link>
                    <Link href="/profile" passHref><Nav.Link active={router.pathname == "/profile"} disabled={!loggedIn}>Meine Daten</Nav.Link></Link>
                    <Nav.Link disabled={!loggedIn}>Meine Einsendungen</Nav.Link>
                    <NavDropdown disabled={!loggedIn} className="text-primary" title="Nachrichten" id="collasible-nav-dropdown">
                        <NavDropdown.Item>Kontakt aufnehmen</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Neuer Status für Antrag 123...</NavDropdown.Item>
                        <NavDropdown.Item>Neuer Status für Antrag 321...</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    {loggedIn && userData.email ? (<Link href="/access/logout" passHref><Nav.Link active={router.pathname == "/access/logout"}>{userData.email} abmelden</Nav.Link></Link>)
                        :
                        (<Link href="/access" passHref><Nav.Link active={router.pathname == "/access"}>Anmelden</Nav.Link></Link>)}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}