import { Button, Col, Divider, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/veriflyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const defaultValues = {
    id: "2026030001",
    password: "student123",
  };
  // const defaultValues = {
  //   id: "A-0001",
  //   password: "admin123",
  // };

  const onSubmit = async (data: FieldValues) => {
    const res = await login(data).unwrap();
    const user = verifyToken(res.data.accessToken) as TUser;

    dispatch(setUser({ user, token: res.data.accessToken }));
    toast.success("Login success");
    if (res?.data?.needsPasswordChange) {
      navigate(`/change-password`);
    } else {
      navigate(`/${user.role}/dashboard`);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={6}>
        <Divider>Login </Divider>
        <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <div>
            <PHInput type="text" name="id" label="Id : " />
          </div>
          <div>
            <PHInput type="text" name="password" label="password" />
          </div>
          <Button htmlType="submit">Login</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default Login;
