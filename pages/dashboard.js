import { Row, Col, Divider } from 'antd'
import MainLayout from '../components/layouts/MainLayout'
import ApptDashboard from '../components/ApptDashboard'
import PatientForm from '../components/PatientForm'
import Checkup from '../components/Checkup'

export default function Dashboard() {
  return (
    <MainLayout>
      <h1>Welcome, User</h1>
      
      <Row justify="space-around">
        <Col xs={24} sm={12}>
          <ApptDashboard />
        </Col>
        <Col xs={24} sm={12}>
          <ApptDashboard />
        </Col>
        <Col xs={24}>
          <Checkup />
        </Col>
        <Col xs={24}>
          <PatientForm />
        </Col>
      </Row>
    </MainLayout>
  )
}