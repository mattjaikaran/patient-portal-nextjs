import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'
import { Row, Col, Divider } from "antd"

function Login() {
  const style = { padding: "10px 0" };

  return (
    <div>
      <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
        Responsive
      </Divider>
      <Row>
        <Col 
          className="gutter-row"
          style={style} 
          xs={24} 
          sm={12}
          md={12}>
          <LoginForm />
        </Col>
        <Col 
          className="gutter-row" 
          style={style}
          xs={24} 
          sm={12}
          md={12}>
          <RegistrationForm />
        </Col>
      </Row>
    </div>
  )
}

export default Login