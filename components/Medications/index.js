import { useState } from 'react'
import { Form, Table, Modal, Button } from 'antd'
import PrescriptionForm from '../PrescriptionForm'
import './style.scss'

const Medications = (props) => {
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()
  const onCreate = values => {
    console.log('Received values of form: ', values) 
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
      responsive: ['lg']
    },
    {
      title: 'Last Refill',
      dataIndex: 'lastRefill',
      key: 'lastRefill',
      responsive: ['lg']
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text) =>
        <Button
          className="refill-btn"
          onClick={() => setVisible(true)}
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
        okText="Create"
        cancelText="Cancel"
        onCancel={props.onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields()
              onCreate(values)
            })
            .catch(info => {
              console.log('Validate Failed:', info) 
            })
        }}
      >
        <PrescriptionForm
          visible={visible}
          form={form}
          onCreate={onCreate}
          onCancel={() => setVisible(false)} />
      </Modal>
    </>
  )
}

export default Medications