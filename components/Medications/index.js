import { useState } from 'react'
import { Table, Modal, Button } from 'antd'
import PrescriptionForm from '../PrescriptionForm'
import './style.scss'

const Medications = (props) => {
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
      name: 'Lysergic acid diethylamide',
      dose: '25 mg',
      lastRefill: '08/15/2020',
    },
    {
      key: '2',
      name: 'Methyl​enedioxy​methamphetamine',
      dose: '50 mg',
      lastRefill: '06/12/2020',
    },
    {
      key: '3',
      name: 'Psilocybe mexicana',
      dose: '150 mg',
      lastRefill: '05/14/2020',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Dose',
      dataIndex: 'dose',
      key: 'dose',
      responsive: ['md', 'lg']
    },
    {
      title: 'Last Refill',
      dataIndex: 'lastRefill',
      key: 'lastRefill',
      responsive: ['md', 'lg']
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text) =>
        <Button
          className="refill-btn"
          onClick={showModal}
          block
          type="primary">
          Refill {text}
        </Button>
    },
  ] 

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered={props.bordered}
        pagination={dataSource.length > 3 ? true : false}
        size={props.tableSize}
      />
      <Modal
        title="Refill Prescription"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <PrescriptionForm />
      </Modal>
    </>
  )
}

export default Medications