import { Tabs } from 'antd'
import Messages from './components/Messages'
import Checkup from '../Checkup'
import Medications from '../Medications'
import InsuranceInfo from '../InsuranceInfo'
import MySettings from '../MySettings'

const MyHealth = () => {
  const { TabPane } = Tabs

  const callback = (key) => {
    console.log(key)
  }

  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Messages" key="1">
          <Messages />
        </TabPane>
        <TabPane tab="Medications" key="2">
          <Medications />
        </TabPane>
        <TabPane tab="Medical History" key="3">
          <Checkup />
        </TabPane>
        <TabPane tab="Insurance Info" key="4">
          <InsuranceInfo />
        </TabPane>
        <TabPane tab="My Settings" key="5">
          <MySettings />
        </TabPane>
      </Tabs>
    </>
  )
}

export default MyHealth