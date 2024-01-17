import { useEffect, useState } from "react";
import "./Employee.css";
import { getStaffUsers } from "../../services/userService";
import { User } from "../../users/User";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArr) => {
      setEmployees(employeeArr);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObject) => {
        return <User user={employeeObject} />;
      })}
    </div>
  );
};
