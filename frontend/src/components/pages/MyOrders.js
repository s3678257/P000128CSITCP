import React, { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"



const MyOrders = (props) => {
  //get all orders
  const [orders, setOrders] = useState([])
  
   const userLogin = useSelector((state) => state.userLogin)
   const { userInfo } = userLogin

   const id  = userInfo._id

  axios.defaults.baseURL = "http://localhost:8000"
  useEffect(() => {
    //get all orders of the user with the route /orders/myorders parsing in the user id as body
    axios
        .get(`/orders/myorders`, { id: id} )
        .then((res) => {
            console.log(id)
            console.log(res.data)
            setOrders(res.data)
            }
        )
        .catch((err) => {
            console.log(err)
        }
        )

   
  }, [ id])





  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      {/* Replace with your content */}
      <div className="px-4 py-6 sm:px-0">
        <div className=" h-fit rounded-lg border-4 border-dashed border-gray-200 bg-gray-100">
          <div className="m-8">
            <div className="flex justify-between mr-5 mb-5">
              <h1 className="text-2xl tracking-tight font-extrabold">
                My Orders
              </h1>{" "}
            </div>

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
                            Amount
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Ordered At
                          </th>

                         
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order, idx) => (
                          <tr
                            key={order._id}
                            className={
                              idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {order._id}
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

                            
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrders
