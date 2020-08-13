import { Table, Button } from 'antd'
import '../style.scss'

const dataSource = [
  {
    key: '1',
    date: '08/12/2020',
    description: 'Open Heart Surgery - Unverified superior vena cava',
    info: <Button>See Info</Button>
  },
  {
    key: '2',
    date: '08/13/2020',
    description: 'Hip replacement - Insurance not covered',
    info: <Button>See Info</Button>
  },
  {
    key: '3',
    date: '08/14/2020',
    description: 'Knee replacement - Patient provided knee to cover costs',
    info: <Button>See Info</Button>
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


const ApptTable = (props) => {
  return (
    <>
      <Table 
        dataSource={dataSource} 
        size={props.tableSize}
        pagination={dataSource.length > 3 ? true : false}
        columns={columns} />
    </>
  )
}

export default ApptTable