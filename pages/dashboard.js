import { Row, Col } from 'antd'
import MainLayout from '../components/layouts/MainLayout'
import ApptDashboard from '../components/ApptDashboard'
import PatientForm from '../components/PatientForm'

export default function Dashboard() {
  return (
    <MainLayout>
      <h1>Welcome, User</h1>
      
      <Row>
        <Col xs={24} sm={12}>
          <ApptDashboard />
        </Col>
        <Col xs={24} sm={12}>
          <ApptDashboard />
        </Col>
        <Col xs={24}>
          <PatientForm />
        </Col>
      </Row>
    </MainLayout>
  )
}