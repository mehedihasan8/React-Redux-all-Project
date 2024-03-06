import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types/global";
import { useGetAllStudentQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../types/userManagement.type";
import { Link } from "react-router-dom";

export type tableData = Pick<TStudent, "name" | "id" | "fullName">;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data, isFetching } = useGetAllStudentQuery(params);

  const tableData = data?.data?.result?.map(({ _id, fullName, id }) => ({
    key: _id,
    fullName,
    id,
  }));

  const columns: TableColumnsType<tableData> = [
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Roll",
      dataIndex: "id",
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/student-data/${item.key}`}>
              <Button>Details</Button>
            </Link>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<tableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
    // console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
      />
    </div>
  );
};

export default StudentData;
