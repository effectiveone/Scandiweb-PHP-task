
import { Layout, Menu } from "antd";
const { Header } = Layout;

function HeaderApp() {
  return (
    <Header>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">One</Menu.Item>
      <Menu.Item key="3">Two</Menu.Item>
    </Menu>
  </Header>
  );
}

export default HeaderApp;
