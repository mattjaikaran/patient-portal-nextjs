import { useState } from 'react'
import { Table, Tag, Space, Modal, Button } from 'antd'
import ApptForm from '../ApptForm'
import './style.scss'

const Checkup = (props) => {
  const [visible, setVisible] = useState(false)
  const showApptModal = (e) => setVisible(true)

  const handleOk = (e) => {
    console.log(e)
    setVisible(false)
  }
  const handleCancel = (e) => {
    console.log(e)
    setVisible(false)
  }

  const { Column } = Table
  
  const data = [
    {
      key: '1',
      title: 'Annual Physical',
      lastVisit: '08/2019',
      address: 'New York No. 1 Lake Park',
      tags: ['Up To Date']
    },
    {
      key: '2',
      title: 'Dental Cleaning',
      lastVisit: '10/2019',
      address: 'London No. 1 Lake Park',
      tags: ['Past Due']
    },
    {
      key: '3',
      title: 'Vision Exam',
      lastVisit: '11/2019',
      address: 'Sidney No. 1 Lake Park',
      tags: ['Past Due']
    },
    {
      key: '4',
      title: 'Skin Screening',
      lastVisit: 'Unknown',
      address: 'Sidney No. 1 Lake Park',
      tags: ['Up To Date']
    },
  ]

  return (
    <>
      <Table 
        className="table" 
        bordered={props.bordered} 
        size={props.tableSize} 
        dataSource={data}>
        <Column
          className="column"
          dataIndex="tags"
          title="Status" 
          key="tags"
          responsive={['md', 'lg']}
          render={tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green' 
                if (tag === 'Past Due') {
                  color = 'red' 
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                ) 
              })}
            </>
          )}
        />
        <Column 
          className="column" 
          title="Title" 
          dataIndex="title" 
          key="title" />
        <Column 
          className="column" 
          title="Last Visit" 
          dataIndex="lastVisit" 
          responsive={['md', 'lg']}
          key="lastVisit" />
        <Column className="column"
          title="Action"
          key="action"
          align="center"
          render={(text) => (
            <>
              <Button 
                className="book-button"
                onClick={showApptModal} 
                type="primary">
                <span>Book</span> 
                <span className="appt-name">{text.title}</span>
              </Button>
              <Space />
              <Button className="mark-as-done">
                <span>Mark as done</span>
              </Button>
            </>
          )}
        />
      </Table>
      <Modal
        title="Book Appointment"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <ApptForm />
      </Modal>
    </>
  )
}

export default Checkup