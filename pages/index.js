import Link from 'next/link'
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import GuardLow from "../utils/guardLow";
export const getServerSideProps = async (ctx) => GuardLow(ctx)

export default function Home(props) {

  return (<main className="w-100 bg-light">
    <div className='d-block'>
      <div className='bg-dark text-primary text-center d-flex align-items-center flex-column justify-content-center' style={{ minHeight: "98vh" }}>
        <h1 className='display-1 mx-auto'>Papierkram adé!</h1>
        <p className='lead text-center mx-auto text-secondary'>Stromanmeldung einfach online stellen, wir übernehmen den Rest.</p>
        <div>
          <Link href="/#more" passHref><a><button className='btn btn-primary m-2 rounded-0'>MEHR ERFAHREN</button></a></Link>
          <Link href="/access" passHref><a><button className='btn btn-outline-secondary m-2 rounded-0'>LOSLEGEN</button></a></Link>
        </div>
      </div>
    </div>

    <div className="d-block border border-primary">
      <div id="more" className='container px-5 d-flex align-items-center flex-column justify-content-center' style={{ minHeight: "100vh" }}>
        <h1 className="text-center text-primary my-3 pb-3 border-bottom">Überzeugen Sie sich selbst</h1>
        <Row className="my-5">
          <Col sm={4}><p style={{ height: "150px", width: "150px", lineHeight: "134px" }} className="bg-dark text-primary shadow rounded-circle mx-auto text-center h3 pt-2">Simpel</p><p className="border-top pt-3 mt-3 text-mute text-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p></Col>
          <Col sm={4}><p style={{ height: "150px", width: "150px", lineHeight: "134px" }} className="bg-dark text-primary shadow rounded-circle mx-auto text-center h3 pt-2">Sicher</p><p className="border-top pt-3 mt-3 text-mute text-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p></Col>
          <Col sm={4}><p style={{ height: "150px", width: "150px", lineHeight: "134px" }} className="bg-dark text-primary shadow rounded-circle mx-auto text-center h3 pt-2">Schnell</p><p className="border-top pt-3 mt-3 text-mute text-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p></Col>
        </Row>
        <Link href="/#footer" passHref><a><button className='btn btn-outline-primary m-2 rounded-0'>WEITER</button></a></Link>
      </div>
    </div>
    <div className="bg-dark py-5">
      <div className="mt-5 mx-auto py-5 bg-dark text-primary">
        <h1 className='mt-auto display-4 mx-auto text-center'>Noch Fragen? Kein Problem!</h1>
        <p style={{ maxWidth: "670px" }} className='container lead text-center mx-auto text-secondary'>Wir beantworten Ihre Fragen so gut und schnell wir können. Nehmen Sie kontakt mit uns auf und erklären Sie uns Ihr Anliegen. Wir freuen uns auf Sie!</p>
        <div className="text-center">
          <button className='btn btn-warning m-2 rounded-0 btn-lg'>KONTAKT AUFNEHMEN</button>
        </div>
      </div>
      <div>
        <div style={{ minHeight: "50vh" }} className='mx-auto text-center bg-dark py-5'>
          <Link href="/access/new" passHref><a><button className='btn btn-outline-primary btn-lg p-3 m-2 rounded-pill'>IN 2 MINUTEN REGISTRIEREN</button></a></Link>
          <p className="lead text-center text-secondary p-2"><b>Stromanmeldung</b><br></br><i>Simpel, Sicher und Schnell abhaken</i></p>
          <Link href="/#navbar" passHref><a><button className='btn btn-outline-secondary m-2 rounded-0 btn-sm p-2'>ZURÜCK NACH OBEN</button></a></Link>

        </div>
      </div>
    </div>
  </main>
  )
}
