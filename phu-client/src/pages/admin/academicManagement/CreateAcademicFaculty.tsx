import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";

import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateAcademicFaculty = () => {
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const facultyDate = {
      faculty: data.faculty,
    };
    console.log("facutly", facultyDate);
    // try {
    //   const res = (await addAcademicSemester(semesterDate)) as TResponse;
    //   if (res?.error) {
    //     toast.error(res?.error?.data?.message, { id: toastId });
    //   } else {
    //     toast.success("Semester creates", { id: toastId });
    //   }
    // } catch (error) {
    //   toast.error("somthing want wrong", { id: toastId });
    // }
  };
  return (
    <div>
      <Flex justify="center">
        <Col span={12}>
          <PHForm onSubmit={onSubmit}>
            <PHInput type="text" name="faculty" label="Write faculty name" />
            <Button htmlType="submit">submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicFaculty;
