import { Input } from "antd";
import { Controller } from "react-hook-form";

const PHInput = ({ type, name, label }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <p style={{ marginBottom: "5px" }}>{label ? label : null}</p>

      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
