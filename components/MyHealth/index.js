import { Tabs } from 'antd'
import Messages from './components/Messages'
import Checkup from '../Checkup'
import Medications from '../Medications'
import InsuranceInfo from '../InsuranceInfo'
import MySettings from '../MySettings'
import './style.scss'

const MyHealth = (props) => {
  const { TabPane } = Tabs

  const callback = (key) => {
    console.log(key)
  }

  return (
    <>
      <Tabs 
        defaultActiveKey="1" 
        className="health-tabs"
        activeKey={props.activeKey} 
        onChange={callback}>
        <TabPane 
          className="messages" 
          tab="Messages" 
          key="1">
          <Messages bordered={true} />
        </TabPane>
        <TabPane 
          className="medications" 
          tab="Medications" 
          key="2">
          <Medications bordered={true} />
        </TabPane>
        <TabPane 
          className="medical-history" 
          tab="Medical History" 
          key="3">
          <Checkup bordered={true} />
        </TabPane>
        <TabPane 
          className="insurance-info" 
          tab="Insurance Info" 
          key="4">
          <InsuranceInfo bordered={true} />
        </TabPane>
        <TabPane 
          className="my-settings" 
          tab="My Settings" 
          key="5">
          <MySettings />
        </TabPane>
      </Tabs>
    </>
  )
}

export default MyHealth