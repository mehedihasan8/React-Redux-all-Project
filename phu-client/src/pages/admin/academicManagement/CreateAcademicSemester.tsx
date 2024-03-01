import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log("data", data);
  };
  return (
    <Flex justify="center">
      <Col span={12}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="name" label="Name" />
          <PHInput type="date" name="date" label="Year" />
          <PHSelect label="Selet your name" />
          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
