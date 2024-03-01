import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
const nameOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summar" },
  { value: "03", label: "Fall" },
];

const currentYear = new Date().getFullYear();

const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data.name) - 1].label;
    const semesterDate = {
      name,
      code: data.name,
      year: data.year,
    };

    console.log("data", semesterDate);
  };

  return (
    <Flex justify="center">
      <Col span={12}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect label="Name" name="name" options={nameOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={nameOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={nameOptions} />
          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
