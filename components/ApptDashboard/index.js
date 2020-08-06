import { Card } from 'antd'
import Link from 'next/link'
import './style.scss'

const ApptDashboard = () => {
  return (
    <>
      <Card 
        title="Appointments" 
        className="appointments"
        extra={<Link href="/appointments"><a>View Calendar</a></Link>}>
        <p>
          <span className="appt-date">09/12/2020</span>
          {' '} 
          - General heart appt.
        </p>
        <p>
          <span className="appt-date">09/24/2020</span> 
          {' '} 
          - Cardiologist follow up.
        </p>
        <p>
          <span className="appt-date">10/12/2020</span> 
          {' '} 
          - Heart surgery.
        </p>
      </Card>
    </>
  )
}

export default ApptDashboard