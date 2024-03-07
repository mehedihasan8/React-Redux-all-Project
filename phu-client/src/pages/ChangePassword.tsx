import { Button, Col, Divider, Row } from "antd";
import { FieldValues } from "react-hook-form";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.api";
import { toast } from "sonner";
import { TResponse } from "../types/global";
import { useAppDispatch } from "../redux/hooks";
import { Logout } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [ChangePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (inputData: FieldValues) => {
    const res = (await ChangePassword(inputData)) as TResponse<any>;

    console.log("res", res);

    if (res?.data?.success) {
      toast.success("Password Change Successfully");
      dispatch(Logout());
      return navigate("/login");
    } else {
      toast.error(res.data.error.message);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={6}>
        <Divider>Change Password</Divider>
        <PHForm onSubmit={onSubmit}>
          <div>
            <PHInput type="text" name="oldPassword" label="Old Password" />
          </div>
          <div>
            <PHInput type="text" name="newPassword" label="New Password" />
          </div>
          <Button htmlType="submit">Change Password</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default ChangePassword;
