import { useState } from 'react'
import { Table, Button, Modal } from 'antd'
import '../style.scss'
import ApptInfo from './ApptInfo'

const ApptTable = (props) => {
  const [visible, setVisible] = useState(false)
  const showModal = (e) => setVisible(true)
  const handleOk = (e) => {
    console.log(e)
    setVisible(false)
  }
  const handleCancel = (e) => {
    console.log(e)
    setVisible(false)
  }

  const dataSource = [
    {
      key: '1',
      date: '08/12/2020',
      description: 'Open Heart Surgery - Unverified superior vena cava',
      info: <Button onClick={showModal}>See Info</Button>
    },
    {
      key: '2',
      date: '08/13/2020',
      description: 'Hip replacement - Insurance not covered',
      info: <Button onClick={showModal}>See Info</Button>
    },
    {
      key: '3',
      date: '08/14/2020',
      description: 'Knee replacement - Patient provided knee to cover costs',
      info: <Button onClick={showModal}>See Info</Button>
    },
  ];

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      responsive: ['xl']
    },
    {
      title: 'Action',
      dataIndex: 'info',
      key: 'info',
    },
  ]

  return (
    <>
      <Table 
        dataSource={dataSource} 
        size={props.tableSize}
        pagination={dataSource.length > 3 ? true : false}
        columns={columns} />
      <Modal
        title="Refill Prescription"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <ApptInfo />
      </Modal>
    </>
  )
}

export default ApptTable