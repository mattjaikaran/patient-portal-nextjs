import Link from 'next/link'
import { Card } from 'antd'
import './style.scss'
import Medications from '../Medications'

const MedicationsDashboard = () => {
  return (
    <Card
      title="Medications"
      className="medications-dashboard"
      extra={
        <Link href="/profile">
          <a>View Medications</a>
        </Link>
      }>
      <Medications pagination={false} tableSize="small" />
    </Card>
  )
}

export default MedicationsDashboard