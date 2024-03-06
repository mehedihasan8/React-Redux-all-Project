import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types/global";
import { useGetAllStudentQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../types/userManagement.type";
import { Link } from "react-router-dom";

export type tableData = Pick<
  TStudent,
  "fullName" | "id" | "email" | "_id" | "contactNo" | "gender"
>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetAllStudentQuery([
    { name: "limit", value: 2 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const metaData = data?.data?.meta;

  // console.log(data?.data?.result);

  const tableData = data?.data?.result?.map(
    ({ _id, fullName, id, email, contactNo, gender }: tableData) => ({
      key: _id,
      fullName,
      id,
      email,
      gender,
      contactNo,
    })
  );

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
      title: "Email",

      dataIndex: "email",
    },
    {
      title: "Gender",

      dataIndex: "gender",
    },
    {
      title: "Contact No.",
      key: "contactNo",
      dataIndex: "contactNo",
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
        pagination={false}
      />
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.totalPage}
      />
    </div>
  );
};

export default StudentData;
