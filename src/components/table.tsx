import React from "react";
import { useTable, useGlobalFilter } from "react-table";
import { TableColumns, TableData } from "../utils/column";

type tableProps = {
  columns: TableColumns[];
  data: TableData[] | any;
};

const Table: React.FC<tableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    prepareRow,
    //@ts-ignore
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );
  //@ts-ignore
  const { globalFilter } = state;

  return (
    <div>
      <label
        htmlFor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search product
      </label>
      <input
        id="large-input"
        type="text"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg 
        bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder={"Search name"}
      />
      <table className="shadow-lg bg-white" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="bg-blue-100 border text-left px-8 py-4"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i: number) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="border px-8 py-4" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
