import axios from 'axios'
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { Button, PageButton } from './Button'
import React, { Component, useState, useMemo, useEffect } from 'react'
import './App.css'
import { useGlobalFilter, useTable, useAsyncDebounce, useFilters, usesortBy, useSortBy, usePagination } from "react-table";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { CSVLink } from 'react-csv'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { listIngabos } from './graphql/queries'
import {DataStore} from '@aws-amplify/datastore';


Amplify.configure(awsconfig);

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
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
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">{render("Header")}: </span>
      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
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
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">Search: </span>
      <input
        type="text"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} people...`}
      />
    </label>
  )
}


function Table() {



  let [records, setRecords] = useState([])

  const pullData = async () => {

    let response = await API.graphql(graphqlOperation(listIngabos))


    if (response) {
      records = response.data.listIngabos.items
      for (let i = 1; i <= records.length; i++){
        records[i-1].no = i;
        const activity1 = records[i - 1].activity1 == true ? records[i - 1].activity1 = "Yego" : records[i - 1].activity1 = "Oya"
        const activity2 = records[i-1].activity2 == true ? records[i-1].activity2 = "Yego" : records[i-1].activity2 = "Oya"
        const activity3 = records[i-1].activity3 == true ? records[i-1].activity3 = "Yego" : records[i-1].activity3 = "Oya"
        const activity4 = records[i-1].activity4 == true ? records[i-1].activity4 = "Yego" : records[i-1].activity4 = "Oya"
        const activity5 = records[i-1].activity5 == true ? records[i-1].activity5 = "Yego" : records[i-1].activity5 = "Oya"
        const activity6 = records[i-1].activity6 == true ? records[i-1].activity6 = "Yego" : records[i-1].activity6 = "Oya"
        const activity7 = records[i-1].activity7 == true ? records[i-1].activity7 = "Yego" : records[i-1].activity7 = "Oya"
        const activity8 = records[i-1].activity8 == true ? records[i-1].activity8 = "Yego" : records[i-1].activity8 = "Oya"
      
      }
      console.log(records);
      setRecords(records)
    }

  }

    
  useEffect(() => {

    pullData()

  }, [])

  const data = records;

    const columns = React.useMemo(
      () => [
        {
          Header: "No",
          accessor: "no",
        },
        {
          Header: "Amazina Yombi",
          accessor: "fullName",
        },
        {
          Header: "Igihe Yavukiye",
          accessor: "dateofbirth",
        },
        {
          Header: "Igitsina",
          accessor: "igitsina",
        },
        {
          Header: "Ingandamuntu",
          accessor: "nationalID",
        },
        {
          Header: "Telephone",
          accessor: "telephone",
        },
        {
          Header: "Cooperative",
          accessor: "cooperative",
        },
        {
          Header: "Aho Atuye",
          accessor: "addressDistrict",
        },
        {
          Header: "Arahinga",
          accessor: "activity1",
          Filter: SelectColumnFilter,
          filter: 'includes',
        },
        {
          Header: "Aroroye",
          accessor: "activity2",
          Filter: SelectColumnFilter,
          filter: 'includes',
        },
        {
          Header: "Imyumbati ",
          accessor: "activity3",
        },
        {
          Header: "Umuceri",
          accessor: "activity4",
        },
        {
          Header: "Ibinyampeke",
          accessor: "activity5",
        },
        {
          Header: "Inka",
          accessor: "activity6",
        },
        {
          Header: "Ingurube",
          accessor: "activity7",
        },
        {
          Header: "Inkoko",
          accessor: "activity8",
        },
        {
          Header: "Signature",
          accessor: ""
        }
      ],
      []
    );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      {
        id: "edit",
        Header: "Edit",
        Cell: ({ row }) => (
          <Button onClick={() => alert("Editing: " + row.values.telephone)}>
            Edit
          </Button>
        )
      },
      {
        id: "checkbox",
        Header: "Select",
        Cell: ({ row }) => (
          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        )
      },
      ...columns
    ]);
  };
  
    const TableInstance = useTable({ columns, data }, useGlobalFilter, useFilters, useSortBy, usePagination, tableHooks)
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, preGlobalFilteredRows, setGlobalFilter, page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize } = TableInstance;
  
  
  const exportPDF = () => {

    let info = [], header = []

    data.forEach((element, index, array) => {
      info.push([element.no, element.fullName, element.gender, element.nationalID, element.cooperative])
    })

    // columns.forEach((col, index) => {
    //   header.push(col.Header)
    // })

    // for (let i = 0; i < 5; i++){
    //   header.push(columns[i]);
    // }

    const doc = new jsPDF('landscape', 'mm', 'a3');

    doc.autoTable({
      head: [['No', 'Amazina Yombi', 'Igitsina', 'Ingandamuntu', 'Koperative']],
      body: info
    })


    // doc.text("Ingabo Syndicate Report", 20, 20);

    doc.save('Report.pdf')
    console.log(header)
  }

    return (

      <>
        <div className="flex gap-x-2">

      
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />

          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                <div key={column.id}>
                  <label for={column.id}></label>
                  {column.render("Filter")}
                </div>
              ) : null
            )
          )}
        </div>
        {/* global search and filter */}
        {/* table */}

        
        <Button className="ml auto"><CSVLink data={records}>Export Excel</CSVLink></Button>

      <Button onClick={exportPDF}>Export PDF</Button>

        
        <div className="mt-2 flex flex-col">
          <div className="mt-2 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                  <table {...getTableProps()} border="1" className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                    <tbody className="bg-white divide-y divide-gray-200"
                      {...getTableBodyProps()}>
                      {page.map((row, i) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return <td {...cell.getCellProps()}
                                className="px-6 py-4 whitespace-nowrap"
                              >{cell.render("Cell")}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="pagination">
        
          <div className="py-3 flex items-center justify-between">
            <div className="flex-1 flex justify-between sm:hidden">
              <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
              <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="flex gap-x-2">
                <span className="text-sm text-gray-700">
                  Page <span className="font-medium">{state.pageIndex + 1}</span> of <span className="font-medium">{pageOptions.length}</span>
                </span>
                <label>
                  <span className="sr-only">Items Per Page</span>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={state.pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                    }}
                  >
                    {[5, 10, 20, 50].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <PageButton
                    className="rounded-l-md"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  >
                    <span className="sr-only">First</span>
                    <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </PageButton>
                  <PageButton
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </PageButton>
                  <PageButton
                    onClick={() => nextPage()}
                    disabled={!canNextPage
                    }>
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </PageButton>
                  <PageButton
                    className="rounded-r-md"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  >
                    <span className="sr-only">Last</span>
                    <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                  </PageButton>
                </nav>
              </div>
            </div>
          </div>
        </div>
    
      </>
    );

  }

export default Table;