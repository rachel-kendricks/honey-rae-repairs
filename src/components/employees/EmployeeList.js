import { useEffect, useState } from "react";
import "./Employee.css";
import { getStaffUsers } from "../../services/userService";
import { User } from "../../users/User";
import { Link } from "react-router-dom";

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
        return (
          <Link to={`/employees/${employeeObject.id}`} key={employeeObject.id}>
            <User user={employeeObject} key={employeeObject.id} />;
          </Link>
        );
      })}
    </div>
  );
};
