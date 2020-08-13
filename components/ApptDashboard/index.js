import { Card } from 'antd'
import Link from 'next/link'
import './style.scss'
import ApptTable from './components/ApptTable'

const ApptDashboard = (props) => {
  return (
    <>
      <Card 
        title="Appointments" 
        className="appointments"
        extra={<Link href="/appointments"><a>View Calendar</a></Link>}>
        <ApptTable {...props} />
      </Card>
    </>
  )
}

export default ApptDashboard