import React, { useEffect, useState } from "react"
import axios from "axios"

import DeleteModal from "./DeleteModal"

const MailList = (props) => {
  //get all orders
  const [emails, setEmails] = useState([])
  const [currentEmailID, setCurrentEmailID] = useState("")

  const [deleteModal, setDeleteModal] = useState(false)

  axios.defaults.baseURL = "http://localhost:8000"
  useEffect(() => {
    axios
      .get("/email")
      .then((res) => {
        console.log(res.data)
        setEmails(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const setDeleteModalFalse = () => {
    setDeleteModal(false)
  }

  //refresh the table
  const refreshTable = () => {
    axios
      .get("/email")
      .then((res) => {
        setEmails(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //delete courseItem
  const deleteEmail = () => {
    //add token to header
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`
    axios
      .delete(`/email/${currentEmailID}`)
      .then((res) => {
        console.log(res.data)
        refreshTable()
        setDeleteModal(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="m-8">
      <div className="flex justify-between mr-5 mb-5">
        <h1 className="text-2xl tracking-tight font-extrabold">Email List</h1>{" "}
      </div>

      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModalFalse}
          refreshTable={refreshTable}
          deleteItem={deleteEmail}
        />
      )}
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {emails.map((email, idx) => (
                    <tr
                      key={email._id}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {email.email}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => {
                            setCurrentEmailID(email._id)
                            setDeleteModal(true)
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailList
