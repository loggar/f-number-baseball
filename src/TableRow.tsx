import React from "react";
import "./TableRow.css";

interface TableRowProps {
  columns: number;
  rowIndex: number;
}

const TableRow: React.FC<TableRowProps> = ({ columns, rowIndex }) => {
  return (
    <tr>
      {Array.from({ length: columns }).map((_, colIndex) => (
        <td key={colIndex} className="cell">
          {colIndex === 0 ? rowIndex + 1 : ""}
          {/* Place your other game logic here for other cells */}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
