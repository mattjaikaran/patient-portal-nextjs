import Link from 'next/link'
import { Layout, Menu } from 'antd'
import { 
  BankOutlined, UserOutlined, HomeOutlined, CalendarOutlined
} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout
import './style.scss'

const MainLayout = ({ children }) => (
  <Layout>
    <Sider
      breakpoint="lg"
      className="sider"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <div className="logo">Logo</div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined />}>
          <Link href="/appointments">
            <a>Appointments</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<BankOutlined />}>
          <Link href="/billing">
            <a>Billing &amp; Payments</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link href="/profile">
            <a>My Health</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header 
        className="site-layout-sub-header-background">
        <h2>Patient Portal</h2>
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div 
          className="site-layout-background" 
          style={{ 
            padding: 24, 
            margin: '0 auto',
            minHeight: 360, 
            maxWidth: 1400 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <a 
          href="https://github.com/mattjaikaran/patient-portal-nextjs"
          target="_blank">
          ©2020 Patient Portal
        </a>
      </Footer>
    </Layout>
  </Layout>
)


export default MainLayout


