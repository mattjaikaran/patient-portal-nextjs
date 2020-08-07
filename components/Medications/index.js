import { Table, Button } from 'antd'
import './style.scss'

const dataSource = [
  {
    key: '1',
    name: 'Lysergic acid diethylamide',
    dose: 25,
    lastRefill: '08/15/2020',
  },
  {
    key: '2',
    name: 'Methyl​enedioxy​methamphetamine',
    dose: 50,
    lastRefill: '06/12/2020',
  },
  {
    key: '3',
    name: 'Psilocybe mexicana',
    dose: 150,
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
  },
  {
    title: 'Last Refill',
    dataIndex: 'lastRefill',
    key: 'lastRefill',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text) => 
      <Button className="refill-btn" block type="primary">Refill {text}</Button>
  },
] 

const Medications = () => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
      />
    </>
  )
}

export default Medications