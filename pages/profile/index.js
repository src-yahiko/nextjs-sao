import axios from 'axios';

import { Button, Row, Col, Form, Alert } from 'react-bootstrap'
import { useState, useEffect } from "react";
import Guard from "../../utils/guard";

const Profile = ({ setUserData, userData, user, jwt }) => {
    const [edit, setEdit] = useState(false)

    useEffect(() => { setUserData(user) }, [setUserData, user])

    const [newUserData, setNewUserData] = useState({ ...user })
    const [errorMsg, setErrorMsg] = useState("")
    const [succMsg, setSuccMsg] = useState("")

    const handleChange = (e) => {
        const value = e.target.value;
        setNewUserData({
            ...newUserData,
            [e.target.id]: value
        });
    }

    const switchEdit = () => {
        setNewUserData(userData)
        const _edit = !edit
        setEdit(_edit)
        // setErrorMsg("")
        // setSuccMsg("")
        // if (_edit) {
        //     // Rein in den Bearbeitungsmodus
        //     // zeige kopie von userdate
        // } else {
        //     // Raus aus dem Bearbeitungsmodus
        //     // zeige echte userdate
        // }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMsg("")
        setSuccMsg("")

        if (e.target.formofaddress.value === "0")
            return setErrorMsg("Bitte geben Sie eine Anredeform an.")

        if (e.target.email.value !== e.target.reEmail.value && e.target.email.value !== userData.email)
            return setErrorMsg("Bitte überprüfen Sie Ihre Eingaben. Die E-Mails stimmen nicht überein.")


        const _userData = {} //{
        // username: e.target.firstname.value + e.target.lastname.value,
        // password: e.target.password.value,
        // email: e.target.email.value,
        //}

        if (e.target.email.value !== userData.email && e.target.email.value == e.target.reEmail.value) {
            setErrorMsg(`Überprüfen Sie den Posteingang von ${e.target.email.value} und befolgen Sie die da beschriebenen Schritte um die Änderung wirksam zu machen`)
            _userData[e.target.email.id] = e.target.email.value
        }

        if (e.target.firstname.value !== userData.firstname)
            _userData[e.target.firstname.id] = e.target.firstname.value

        if (e.target.lastname.value !== userData.lastname)
            _userData[e.target.lastname.id] = e.target.lastname.value

        if (e.target.formofaddress.value !== userData.formofaddress)
            _userData[e.target.formofaddress.id] = e.target.formofaddress.value

        e.target.reEmail.value = ""
        try {
            switchEdit()
            if (!(_userData && Object.keys(_userData).length === 0 && Object.getPrototypeOf(_userData) === Object.prototype) && _userData !== null) {
                if (Object.keys(_userData).length > 0) {
                    console.log(_userData)
                    _userData["id"] = userData.id
                    _userData["jwt"] = jwt
                    await axios.post('/api/updateme', _userData)
                    setUserData({ ...user, ..._userData })
                    setNewUserData({ ...user, ..._userData })
                    // return router.replace('/profile')
                    setSuccMsg("Änderungen eingereicht!")
                }
            }
        } catch (err) {
            return setErrorMsg(err.response.data)
        }
    }
    return (
        <main className='w-100 py-5'>
            <Form onChange={handleChange} onSubmit={handleSubmit} className='container-fluid col-12 col-md-7 col-lg-4'>
                <h1 className='display-1 text-dark border-bottom'>Meine Daten.</h1>
                {
                    succMsg !== "" && (<Alert variant="success">
                        {succMsg}
                    </Alert>)
                }
                <Form.Group className="mb-3">
                    <Row>
                        <Col lg={4}>
                            <Form.Label>Anrede</Form.Label>
                            <Form.Select defaultValue={newUserData.formofaddress} disabled={!edit} aria-label="Anrede" id="formofaddress" required>
                                <option value={newUserData.formofaddress} disabled hidden>{newUserData.formofaddress}</option>
                                <option value="Frau">Frau</option>
                                <option value="Herr">Herr</option>
                            </Form.Select>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="firstname">
                        <Form.Label>Vorname</Form.Label>
                        <Form.Control type="text" disabled={!edit} value={newUserData.firstname} placeholder="Vorname" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastname">
                        <Form.Label>Nachname</Form.Label>
                        <Form.Control type="text" disabled={!edit} value={newUserData.lastname} placeholder="Nachname" required />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>E-Mail Adresse</Form.Label>
                    <Form.Control id="email" type="email" value={newUserData.email} disabled={!edit} placeholder="E-Mail Adresse" required />
                    <Form.Control id="reEmail" type="email" className={edit ? "mt-2" : "hide"} placeholder="E-Mail Adresse wiederholen" />
                    <Form.Text className={edit ? "text-muted" : "hide"}>
                        Wir lassen Ihnen bei Änderung eine Bestätigungsemail zukommen. Befolgen Sie die da beschriebenen Schritte um die Änderung wirksam zu machen.
                    </Form.Text>
                </Form.Group>
                <div className="hide">
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </div>
                {errorMsg !== "" && (<Alert variant="warning">
                    {errorMsg}
                </Alert>)}
                <div className='d-flex flex-row'>
                    <Button onClick={switchEdit} className={"w-50 mx-1"} variant={edit ? "outline-danger" : "warning"}>
                        {edit ? "Abbrechen" : "Bearbeiten"}
                    </Button>
                    <Button type="submit" className={edit ? "w-100 mx-1" : "hide"} variant="primary">
                        Änderungen speichern
                    </Button>
                </div>
            </Form>
        </main >
    )
}

export const getServerSideProps = async (ctx) => Guard(ctx)
export default Profile;