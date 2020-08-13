import { Table } from 'antd'
import '../style.scss'

const dataSource = [
  {
    key: '1',
    date: '08/12/2020',
    description: 'Open Heart Surgery',
  },
  {
    key: '2',
    date: '08/13/2020',
    description: 'Hip replacement',
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