import React from 'react'
import { Layout } from 'antd'
import NavLeft from '../../components/navLeft/index'

const { Header, Footer, Sider, Content } = Layout

class Home extends React.Component {
  render() {
    return (
      <div id="mainPage" style={styles.bodyHeight}>
        <Layout style={styles.bodyHeight}>
          <Sider>
            <NavLeft />
          </Sider>
          <Layout>
            <Header>头部</Header>
            <Content>内容</Content>
            <Footer>底部</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

const styles = {
  bodyHeight: {
    height: '100%'
  }
}
export default Home