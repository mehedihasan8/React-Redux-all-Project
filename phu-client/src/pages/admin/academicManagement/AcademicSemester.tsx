import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(null);

  console.log(data);

  return (
    <div>
      <h1>Academic management</h1>
    </div>
  );
};

export default AcademicSemester;
