import { Tabs } from 'antd'
import Messages from './components/Messages'
import Checkup from '../Checkup'
import Medications from '../Medications'

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
        <TabPane tab="Tab 4" key="4">
          Content of Tab Pane 4
        </TabPane>
        <TabPane tab="Tab 5" key="5">
          Content of Tab Pane 5
        </TabPane>
        <TabPane tab="Tab 6" key="6">
          Content of Tab Pane 6
        </TabPane>
        <TabPane tab="Tab 7" key="7">
          Content of Tab Pane 7
        </TabPane>
      </Tabs>
    </>
  )
}

export default MyHealth