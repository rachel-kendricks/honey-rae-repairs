import "./App.css";
import { CustomerList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeeList";
import { TicketList } from "./components/tickets/TicketList";
//testing stuff

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      {/* <CustomerList /> */}
      <EmployeeList />
    </>
  );
};
