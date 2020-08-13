import { Table } from 'antd'

const dataSource = [
  {
    key: '1',
    date: '08/03/2020',
    doctor: 'Dr. Anna',
    messageTitle: 'Follow up - URGENT!!',
    messageDetails: {
      title: 'Follow up',
      message: 'You are not healthy!!!'
    }
  },
  {
    key: '2',
    date: '07/03/2020',
    doctor: 'Dr Rice',
    messageTitle: 'Follow up - Good',
    messageDetails: {
      title: 'Follow up',
      message: 'You are  healthy'
    }
  },
]

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Doctor',
    dataIndex: 'doctor',
    key: 'doctor',
  },
  {
    title: 'Message',
    dataIndex: 'messageTitle',
    key: 'messageTitle',
  },
]


export default function Messages() {
  return (
    <>
      <Table dataSource={dataSource} bordered columns={columns} />
    </>
  )
}

export const MessageShow = (props) => {
  return (
    <div className="message">
      Message Layout
    </div>
  )
}