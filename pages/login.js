import LoginForm from '../components/LoginForm'
import { Row, Col, Divider } from "antd"

function Login() {
  const style = { background: "#0092ff", padding: "8px 0" };

  return (
    <div>
      <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
      Responsive
    </Divider>
    <Row>
      <Col 
        className="gutter-row" 
        xs={24} sm={12} md={6}>
        <LoginForm />
      </Col>
      <Col className="gutter-row" xs={24} sm={12} md={6}>
        <LoginForm />
      </Col>
    </Row>
    </div>
  )
}

export default Login