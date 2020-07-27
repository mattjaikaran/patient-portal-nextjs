import Header from '../Header'

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Header />
    {children}
  </div>
)


export default MainLayout