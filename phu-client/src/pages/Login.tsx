import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
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
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const res = await login(data).unwrap();

    // const user = verifyToken(res.data.accessToken) as TUser;
    // dispatch(setUser({ user, token: res.data.accessToken }));
    // toast.success("Login success");
    // navigate(`/${user.role}/dashboard`);
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="id">Id:</label>
        <PHInput type="text" name="id" />
      </div>
      <div>
        <label htmlFor="id">password</label>
        <PHInput type="text" name="password" />
      </div>

      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
