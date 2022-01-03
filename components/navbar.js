import Link from 'next/link'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Badge } from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function MyNavbar({ userData }) {
    const router = useRouter()
    useEffect(() => { }, [userData])
    const loggedIn = !(userData && Object.keys(userData).length === 0 && Object.getPrototypeOf(userData) === Object.prototype) && userData !== null && userData && userData !== null && userData.email

    return <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" className="pb-2 pt-3 shadow-sm">
        <Container fluid className="px-5">
            <Link href="/#navbar" passHref>
                <Navbar.Brand className="">
                    <div className='d-flex m-0 p-0 align-items-center'>
                        <div className='pt-2 m-2 align-center-center'>
                            <Image className='' alt="Baru Logo" height={30} width={24} src="/baru.svg" />
                        </div>
                        <div className='m-0 p-0 pt-3'>
                            <p className='bt m-0 p-0'>baru tec</p>
                            <p className='ug m-0 p-0 text-secondary'>UG</p>
                        </div>
                    </div>
                    {/* <div className='border d-flex'>
                        <Image alt="Baru Logo" height={30} width={24} src="/baru.svg" />
                        <div className='border m-0 p-0 px-3 d-flex flex-column'>
                            <p className="border p-0 m-0 pt-2">baru tec</p>
                            <p style={{ fontSize: "0.34em", margin: "10px" }} className="border m-0 p-0 align-self-end">UG</p>
                        </div>
                    </div> */}
                </Navbar.Brand>
            </Link>
            {/* <Link href="/#navbar" passHref><Navbar.Brand style={{ position: "fixed", backgroundColor: "rgba(0,0,0,0.4);" }} className="p-2 px-4 pr-0 rounded-pill border border-primary"><div className='d-flex'><Image alt="Baru Logo" height={30} width={24} src="/baru.svg" /><p className="m-0 p-0 px-3">baru tec</p></div></Navbar.Brand></Link> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link href="/" passHref><Nav.Link active={router.pathname == "/"}>Startseite</Nav.Link></Link>
                    <div className={loggedIn ? '' : 'hide'}>
                        <Link href="/profile" passHref><Nav.Link active={router.pathname == "/profile"} disabled={!loggedIn}>Meine Daten</Nav.Link></Link>
                    </div>
                    <div className='hide'>
                        <Nav.Link disabled={!loggedIn}>Meine Einsendungen</Nav.Link>
                        <NavDropdown disabled={!loggedIn} className="text-primary" title="Nachrichten" id="collasible-nav-dropdown">
                            <NavDropdown.Item>Kontakt aufnehmen</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Neuer Status für Antrag 123...</NavDropdown.Item>
                            <NavDropdown.Item>Neuer Status für Antrag 321...</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Nav>
                <Nav>
                    {loggedIn ? (<Link href="/access/logout" passHref><Nav.Link active={router.pathname == "/access/logout"}>{userData.email} abmelden</Nav.Link></Link>)
                        :
                        (<Link href="/access" passHref><Nav.Link active={router.pathname == "/access"}>Anmelden</Nav.Link></Link>)}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar >
}