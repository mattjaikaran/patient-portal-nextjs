import { Tabs } from 'antd'
import BillingInfo from './components/BillingInfo'
import PaymentHistory from './components/PaymentHistory'
import BillingStatements from './components/BillingStatements'
import MainLayout from '../../components/layouts/MainLayout'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const Billing = () => {
  return (
    <MainLayout>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Billing Info" key="1">
          <BillingInfo />
        </TabPane>
        <TabPane tab="Payment History" key="2">
          <PaymentHistory />
        </TabPane>
        <TabPane tab="Billing Statements" key="3">
          <BillingStatements />
        </TabPane>
      </Tabs>
    </MainLayout>
  )
}

export default Billing