import { Card, Table, Tag, Space, Button } from 'antd'
import './style.scss'
import Link from 'next/link'

const Checkup = () => {
  const { Column } = Table

  const data = [
    {
      key: '1',
      title: 'Annual Physical',
      lastVisit: '08/2019',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      title: 'Dental Cleaning',
      lastVisit: '10/2019',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      title: 'Vision Exam',
      lastVisit: '11/2019',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      title: 'Skin Screening',
      lastVisit: 'Unknown',
      address: 'Sidney No. 1 Lake Park',
    },
  ]
  return (
    <Card 
      title="Wellness Guide" 
      className="checkup">
      <Table className="table" dataSource={data}>
        <Column className="column" title="Title" dataIndex="title" key="title" />
        <Column className="column" title="lastVisit" dataIndex="lastVisit" key="lastVisit" />
        <Column className="column" title="Address" dataIndex="address" key="address" />
        <Column className="column"
          title="Action"
          key="action"
          align="center"
          render={(text, record) => (
            <Space className="space" size="middle">
              <Link href="/appointments">
                <Button className="book-button" type="primary">Book {text.title}</Button>
              </Link>
              <a>Mark as done</a>
            </Space>
          )}
        />
      </Table>
    </Card>
  )
}

export default Checkup