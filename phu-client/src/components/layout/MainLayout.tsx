import { Button, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Header } from "antd/es/layout/layout";
import { useAppDispatch } from "../../redux/hooks";
import { Logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
const { Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const handelLogout = () => {
    dispatch(Logout());
    toast.success("Logout success");
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header>
          <Button onClick={handelLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
