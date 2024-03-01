import { Form, Select } from "antd";

const PHSelect = ({ label }) => {
  const handelChange = (value: string) => {
    console.log("selet", value);
  };
  return (
    <Form.Item label={label}>
      <Select
        style={{ width: "100%" }}
        onChange={handelChange}
        options={[
          { value: "foysal", label: "Foysal" },
          { value: "mamun", label: "Mamun" },
        ]}
      />
    </Form.Item>
  );
};

export default PHSelect;
