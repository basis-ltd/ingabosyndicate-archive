import axios from "axios";
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import { Button, PageButton } from "./Button";
import React, { Component, useState, useMemo, useEffect } from "react";
import "./App.css";
import {
  useGlobalFilter,
  useTable,
  useAsyncDebounce,
  useFilters,
  usesortBy,
  useSortBy,
  usePagination,
} from "react-table";
import { Amplify, API } from "aws-amplify";
import awsconfig from "./aws-exports";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { DataStore } from "@aws-amplify/datastore";
import { Ingabo } from "./models";
import "./Table.css";
import { Helmet } from "react-helmet";
import IngaboUpdateForm from "./ui-components/IngaboUpdateForm";
import { withAuthenticator } from "@aws-amplify/ui-react";
import * as XLSX from "xlsx";

Amplify.configure(awsconfig);

// TWILIO SMS
export function sendMessage(to, message) {
  const endpoint = process.env.REACT_APP_ENDPOINT_URL;
  const ec2 = "http://44.209.248.214";
  const port = "5000" || process.env.PORT;
  console.log(endpoint);

  const recipient = "+250" + to.slice(-9);

  axios
    .post(
      `${ec2}:${port}/messages`,
      {
        recipient,
        message,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
      }
    )

    .then((res) => {
      console.log(res.data.status);
    })
    .catch((err) => {
      console.log(err);
    });
}

/**
 * 
 * EXPORT DATA
 * 
 */

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
      <span className="text-gray-1000">{render("Header")}: </span>
      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
    </label>
  );
}

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
    console.log(value);
  }, 200);

  return (
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">Search: </span>
      <input
        type="text"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} people...`}
      />
    </label>
  );
}

function Table() {
  // FETCH INGABO MODEL FROM DATASTORE

  let [records, setRecords] = useState([]);

  const pullData = async () => {
    let records = await DataStore.query(Ingabo);

    setRecords(records);
  };

  useEffect(() => {
    pullData();
    const resp = DataStore.observe(Ingabo).subscribe(() => {
      pullData();
    });
    return () => resp.unsubscribe();
  }, []);

  let data = records;
  console.log(data);

  const columns = React.useMemo(
    () => [
      {
        Header: "Amazina Yombi",
        accessor: "fullname",
        width: 30,
      },
      {
        Header: "Igihe Yavukiye",
        accessor: "dateofbirth",
        width: 30,
      },
      {
        Header: "Igitsina",
        accessor: "gender",
        width: 20,
      },
      {
        Header: "Indangamuntu",
        accessor: "nationalID",
        width: 30,
      },
      {
        Header: "Telephone",
        accessor: "telephone",
        width: 30,
      },
      {
        Header: "Cooperative",
        accessor: "cooperative",
        width: 30,
      },
      {
        Header: "Aho Atuye",
        accessor: "district",
        width: 30,
      },
      {
        Header: "Aroroye",
        accessor: "aroroye",
        Filter: SelectColumnFilter,
        filter: "includes",
        width: 20,
      },
      {
        Header: "Arahinga",
        accessor: "arahinga",
        Filter: SelectColumnFilter,
        filter: "includes",
        width: 20,
      },
      {
        Header: "Imyumbati",
        accessor: "imyumbati",
        width: 20,
      },
      {
        Header: "Umuceri",
        accessor: "umuceri",
        width: 20,
      },
      {
        Header: "Ibigori",
        accessor: "ibigori",
        width: 20,
      },
      {
        Header: "Ibinyamisogwe",
        accessor: "ibinyamisogwe",
        width: 20,
      },
      {
        Header: "Imboga n' Imbuto",
        accessor: "imboga_imbuto",
        width: 20,
      },
      {
        Header: "Ibirayi",
        accessor: "ibirayi",
        width: 20,
      },
      {
        Header: "Ihene",
        accessor: "ihene",
        width: 20,
      },
      {
        Header: "Intama",
        accessor: "intama",
        width: 20,
      },
      {
        Header: "Inkoko",
        accessor: "inkoko",
        width: 20,
      },
      {
        Header: "Ingurube",
        accessor: "ingurube",
        width: 20,
      },
      {
        Header: "Inka",
        accessor: "inka",
        width: 20,
      },
      {
        Header: "Signature",
        accessor: "",
        width: 20,
      },
    ],
    []
  );

  let exportExcel = () => {
    let headers = columns.map((column, index) => {
      return {
        ...column,
        idx: index,
      };
    });

    const columnsToInclude = [
      "no",
      "fullName",
      "dateofbirth",
      "gender",
      "nationalID",
      "telephone",
      "cooperative",
      "district",
      "aroroye",
      "arahinga",
      "imyumbati",
      "umuceri",
      "ibigori",
      "ibinyamisogwe",
      "imboga_imbuto",
      "ibirayi",
      "ihene",
      "intama",
      "inkoko",
      "ingurube",
      "inka",
    ];

    const filteredData = data.map((row) => {
      const filteredRow = {};
      columnsToInclude.forEach((column) => {
        filteredRow[column] = row[column];
      });
      return filteredRow;
    });

    //FILTERING COLUMNS TO APPEAR IN EXCEL EXPORT
    const filteredColumns = columnsToInclude.map(
      (col) => headers.find((h) => h.accessor === col).Header
    );

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(filteredData);

    ws["!cols"] = [];

    headers.forEach((column) => {
      ws["!cols"][column.idx] = { width: column.width };
      console.log(column.width);
    });

    // define the column headers
    const titles = filteredColumns;
    titles.forEach((header, i) => {
      const cell = ws[`${String.fromCharCode(65 + i)}1`]; // e.g. A1, B1, C1, etc.
      cell.v = header;
    });

    XLSX.utils.book_append_sheet(wb, ws, "Page 1");
    XLSX.writeFile(wb, "Ingabo Syndicate Database.xlsx");
  };

  // EDIT MODAL

  const [modalEdit, setModalEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const toggleEditModal = async (id) => {
    let modelEdit = await DataStore.query(Ingabo, id);
    setEditId(id);
    setModalEdit(!modalEdit);
  };

  // DELETE MODAL

  const [modalDelete, setModalDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const toggleDeleteModal = async (id) => {
    setDeleteId(id);
    setModalDelete(!modalDelete);
  };

  // MESSAGE POP-UP

  const [modalMessage, setModalMessage] = useState(false);
  const [messageID, setMessageID] = useState("");

  const toggleMessageModal = async (id) => {
    let nameModel = await DataStore.query(Ingabo, id);
    setMessageID(nameModel);
    setModalMessage(!modalMessage);
  };

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      {
        id: "edit",
        Header: "Edit",
        Cell: ({ row }) => (
          <div className="edit-delete-message">
            <Button
              id="edit-btn"
              className="relative inline-flex items-center px-2 py-1.5 border border-gray-100 rounded-full"
              onClick={async () => {
                toggleEditModal(row.original.id);
              }}
            >
              {/* <Link to="/update"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              {/* </Link> */}
            </Button>

            <Button
              id="delete-btn"
              className="relative inline-flex items-center px-2 py-1.5 border border-gray-100 rounded-full"
              onClick={async () => {
                toggleDeleteModal(row.original.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </Button>

            {/* MESSAGE BUTTON
            <Button
              id="message-btn"
              className="relative inline-flex items-center px-2 py-1.5 border border-gray-100 rounded-full"
              onClick={async () => {
                toggleMessageModal(row.original.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </Button> */}
          </div>
        ),
      },
      {
        id: "no",
        Header: "No",
        Cell: ({ row, index }) => (
          <p>
            {row.index + 1}
          </p>
        ),
      },
      ...columns,
    ]);
  };

  const TableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    tableHooks
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = TableInstance;

  const exportPDF = () => {
    let info = [];

    data.forEach((element, index, array) => {
      info.push([
        element.fullname,
        element.dateofbirth,
        element.district,
        element.gender,
        element.cooperative,
        element.telephone,
        element.nationalID,
        element.imyumbati,
        element.umuceri,
        element.ibigori,
        element.ibinyamisogwe,
        element.imboga_imbuto,
        element.inkoko,
        element.ingurube,
        element.inka,
        element.intama,
        element.ingurube,
        element.inka,
        element.signature,
      ]);
    });

    const doc = new jsPDF("landscape", "mm", "a3");

    doc.autoTable({
      head: [
        [
          "Amazina Yombi",
          "Igihe Yavukiye",
          "Aho Atuye",
          "Igitsina",
          "Koperative",
          "Telephone",
          "Indangamuntu",
          "Imyumbati",
          "Umuceri",
          "Ibigori",
          "Ibinyamisogwe",
          "Imboga n'Imbuto",
          "Inkoko",
          "Ibirayi",
          "Ihene",
          "Intama",
          "Ingurube",
          "Inka",
          "Signature",
        ],
      ],
      body: info,
      columnWidth: [
        80, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 60, 40, 40, 40, 40, 40,
        40, 40,
      ],
    });

    doc.save("Ingabo Syndicate PDF Report.pdf");
    console.log(info);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ingabo Syndicate Database</title>
      </Helmet>

      {/*<------- POP-UP MODALS -------->*/}

      {/* DELETE MODAL */}

      {modalDelete && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h1 className="text-xl font-medium">
                Please confirm deletion of this record
              </h1>
              <div className="modal-delete-cta">
                <Button
                  className="delete-confirmation"
                  onClick={async () => {
                    let modelDelete = await DataStore.query(Ingabo, deleteId);
                    console.log(modelDelete.fullName);
                    await DataStore.delete(modelDelete);
                    toggleDeleteModal();
                  }}
                >
                  Delete
                </Button>
                <Button
                  onClick={async () => {
                    toggleDeleteModal();
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}

      {modalEdit && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <IngaboUpdateForm
              id={editId}
              onSuccess={async () => {
                toggleEditModal();
              }}
              onCancel={toggleEditModal}
              />
            </div>
          </div>
        </div>
      )}

      {/* MESSAGE MODAL */}

      {modalMessage && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="message-container">
                <form action="" className="message-form">
                  <div className="address-name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      id="fullname"
                      required
                      value={messageID.fullname}
                    />
                  </div>

                  <div className="message">
                    <textarea
                      name="message"
                      id="message"
                      cols="50"
                      rows="8"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </form>

                <div className="message-cta">
                  <Button
                    className="message-btn-cancel"
                    onClick={() => {
                      toggleMessageModal();
                    }}
                  >
                    Cancel
                  </Button>

                  <Button
                    className="message-btn-send"
                    onClick={() => {
                      let message = document.getElementById("message").value;
                      console.log(messageID.telephone);
                      sendMessage(messageID.telephone, message);
                    }}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="table-header-container flex gap-x-2">
          <div className="search-filter">
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

          <div className="table-header-cta">
            {/* BUTTON TO EXPORT EXCEL */}
            {/* <CsvDownloader
                datas={data}
                columns={columns}
                filename="Ingabo Syndicate Database.csv"
              > */}
            <Button className="ml auto" onClick={exportExcel}>
              Excel
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                  />
                </svg>
              </span>
            </Button>
            {/* </CsvDownloader> */}

            {/* BUTTON TO PRINT PDF */}
            <Button onClick={exportPDF}>
              Print PDF
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
        {/* global search and filter */}
        {/* table */}

        <div className="mt-2 flex flex-col">
          <div className="mt-2 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table
                    {...getTableProps()}
                    border="1"
                    className="min-w-full divide-y divide-gray-200"
                  >
                    <thead className="bg-gray-50">
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                            >
                              {column.render("Header")}
                              <span>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? " ▼"
                                    : " ▲"
                                  : ""}
                              </span>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody
                      className="bg-white divide-y divide-gray-200"
                      {...getTableBodyProps()}
                    >
                      {page.map((row, i) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  className="px-6 py-4 whitespace-nowrap"
                                >
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination">
        <div className="py-3 flex items-center justify-between">
          <div className="flex-1 flex justify-between sm:hidden">
            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </Button>
            <Button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </Button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="flex gap-x-2">
              <span className="text-sm text-gray-700">
                {" "}
                <span className="font-medium">
                  {state.pageIndex + 1}
                </span> of{" "}
                <span className="font-medium">{pageOptions.length}</span>
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
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <PageButton
                  className="rounded-l-md"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  <span className="sr-only">First</span>
                  <ChevronDoubleLeftIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </PageButton>
                <PageButton
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </PageButton>
                <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </PageButton>
                <PageButton
                  className="rounded-r-md"
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  <span className="sr-only">Last</span>
                  <ChevronDoubleRightIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </PageButton>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuthenticator(Table);
