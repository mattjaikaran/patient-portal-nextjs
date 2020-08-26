import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'
import { Row, Col, Card } from "antd"
import '../stylesheets/homepage.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Patient Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="homepage">
        <h1 className="title">
          Welcome to Patient Portal
        </h1> 
        <Row>
          <Col
            className="gutter-row"
            xs={24}
            sm={24}
            md={12}>
            <Card 
              title="Login" 
              className="cred-card"
              bordered={false}>
              <LoginForm />
            </Card>
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            sm={24}
            md={12}>
            <Card
              title="Register"
              className="cred-card"
              bordered={false}>
              <RegistrationForm />
            </Card>
          </Col>
        </Row>
        </main>
    </div>
  )
}
