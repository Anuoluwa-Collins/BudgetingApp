
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMonth } from "../context/MonthContext";

const DropDown = () => {
  // Access selectedMonth and setSelectedMonth from context
  const { selectedMonth, setSelectedMonth } = useMonth();

  // Array of month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="container mt-4">
      <h3>Select a Month</h3>
      <Dropdown onSelect={(eventKey) => setSelectedMonth(eventKey)}>
        <Dropdown.Toggle variant="success" id="dropdown-month" className="w-100 text-left">
          {selectedMonth}
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100">
          {months.map((month, index) => (
            <Dropdown.Item key={index} eventKey={month} className="text-left">
              {month}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDown;
