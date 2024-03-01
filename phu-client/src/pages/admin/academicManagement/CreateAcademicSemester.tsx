import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log("data", data);
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="Name" />
      <Button htmlType="submit">submit</Button>
    </PHForm>
  );
};

export default CreateAcademicSemester;
