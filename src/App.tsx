import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { router } from './routes';
const { Header, Footer, Content } = Layout;
import styles from './App.less';
export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Header className={styles.header}>Header</Header>
            <Content className={styles.container}>
              <Switch>
                {router.map((route, index) => (
                  <Route key={index} path={route.path} exact component={route.main} />
                ))}
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </div>
      </Router>
    );
  }
}
