import { Layout, Menu, MenuProps, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard"> Deshboard</NavLink>,
  },
  {
    key: "User Mangement",
    label: "User Mangement",
    children: [
      {
        key: "011",
        label: "Add User",
      },
      {
        key: "22532",
        label: "Add Admin",
      },
    ],
  },
];

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "800",
            marginTop: "10px",
          }}
        >
          PH Uni
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Mehedi Hasan Foysal ©{new Date().getFullYear()} Created by MHF
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
