import React from "react";
import { useTable } from "react-table";

type SpreadsheetProps = {
  columns: string[];
  data: string[];
};

const Spreadsheet: React.FC<SpreadsheetProps> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="rounded-lg shadow border border-gray-300 bg-white overflow-auto">
      <table
        {...getTableProps()}
        className="min-w-full text-sm text-left border-separate border-spacing-0"
      >
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 border-b border-gray-300 font-semibold text-gray-700 sticky top-0 bg-gray-100"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                className="hover:bg-gray-50 transition"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 border-b border-gray-200"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
