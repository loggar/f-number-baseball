import React from "react";
import "./Table.css";
import TableRow from "./TableRow"; // Import the TableRow component

const Table: React.FC = () => {
  const rows = 10;
  const columns = 7;

  return (
    <table className="table">
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <TableRow key={rowIndex} columns={columns} rowIndex={rowIndex} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
