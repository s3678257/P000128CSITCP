import React, { useEffect, useState } from "react"
import axios from "axios"

import DeleteModal from "./DeleteModal"

const OrderList = (props) => {
  //get all orders
  const [orders, setOrders] = useState([])
  const [id, setId] = useState("")

  const [deleteModal, setDeleteModal] = useState(false)

  axios.defaults.baseURL = "http://localhost:8000"
  useEffect(() => {
    axios
      .get("/orders")
      .then((res) => {
        console.log(res.data)
        setOrders(res.data)
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
      .get("/orders")
      .then((res) => {
        setOrders(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //delete courseItem
  const deleteOrder = () => {
    //add token to header
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`
    axios
      .delete(`/orders/${id}`)
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
        <h1 className="text-2xl tracking-tight font-extrabold">Order List</h1>{" "}
      </div>

      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModalFalse}
          refreshTable={refreshTable}
          deleteItem={deleteOrder}
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
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      User
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ordered At
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, idx) => (
                    <tr
                      key={order._id}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.totalPrice}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {
                          //convert date to string then substring(0, 10)
                          order.createdAt.toString().substring(0, 10)
                        }
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => {
                            setId(order._id)
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

export default OrderList
