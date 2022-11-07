import axios from 'axios'
import React, { Component, useState, useMemo, useEffect } from 'react'
import './App.css'
import { useGlobalFilter, useTable, useAsyncDebounce, useFilters, usesortBy, useSortBy, usePagination } from "react-table";
import { API, graphqlOperation } from 'aws-amplify'

const listIngabos = `
query {
  listIngabos {
    items{
      fullName dateofbirth nationalID gender telephone cooperative addressCell addressSector addressDistrict activity1 activity2 activity3 activity4 activity5 activity6 activity7 activity8
    }
  }
}
`

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      name={id}
      id={id}
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </span>
  )
}


function Table() {

  let [records, setRecords] = useState([])

  const pullData = async () => { 

    let response = await axios.get("https://dummyjson.com/products").catch((err) => console.log(err))

    if (response) {
      records = response.data.products
      console.log(records)
      setRecords(records)
    }

  }

  const data = records;

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "brand",
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Category",
        accessor: "category",
      },
    ],
    []
  );
  
  useEffect(() => { 

    pullData()

  }, [])
  
  const TableInstance = useTable({ columns, data }, useGlobalFilter, useFilters, useSortBy,usePagination)
  
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, preGlobalFilteredRows, setGlobalFilter, page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize} = TableInstance;



  return (

    <>
      
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

        {headerGroups.map((headerGroup) =>
        headerGroup.headers.map((column) =>
          column.Filter ? (
            <div key={column.id}>
              <label for={column.id}>{column.render("Header")}: </label>
              {column.render("Filter")}
            </div>
          ) : null
        )
      )}
      
      <table {...getTableProps()} border="1">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▼'
                        : ' ▲'
                      : ''}
                  </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <select
          value={state.pageSize}
          onChange={e => {
              setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20].map(pageSize => (
              <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        {/* new */}
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div>
    
    </>
  );

}

export default Table;