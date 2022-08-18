import './App.css';
import HeaderApp from './component/header';
import FooterApp from './component/footer';
import Login from './component/login';
import UserList from './component/userlist';
import React from 'react'
import "antd/dist/antd.css";
import { Layout, Breadcrumb } from "antd";
const { Content} = Layout;



function App() {


  return (
    <Layout className="layout">
    <HeaderApp/>
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>One</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        <p>Basic Starter Layout</p>

        <Login/>
        <UserList/>
      </div>
    </Content>

<FooterApp/>
   
  </Layout>
  );
}

export default App;
