import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Analytics = () => {

    const [orders, setOrders] = useState([])
    const [users, setUsers] = useState([])
    const [visitors, setVisitors] = useState([])
    useEffect(() => {
        const fetchOrders = async () => {
            const { data } = await axios.get('/orders')
            setOrders(data)
        }
        const fetchUsers = async () => {
            const { data } = await axios.get('/users')
            setUsers(data)
        }
        const fetchVisitors = async () => {
            const { data } = await axios.get('/api/count')
            setVisitors(data)
        }
        fetchVisitors()

        fetchUsers()
        fetchOrders()
    }, [])

    //get total sales
    const getSales = () => {
        return orders.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)
    }

    //get total users
    const getTotalUsers = () => {
        return users.length
    }

    //get visitor count 
    const getVisitorCount = () => {
       return visitors
    }


const stats = [
  { name: "User Visits", stat: getVisitorCount() },
  { name: "Total Sales", stat: "$" + getSales()},
  { name: "Users Signed Up", stat: getTotalUsers() },
]
  return (
    <div className='p-16'>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        All time statistics
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
          >
            <dt className="text-sm font-medium text-gray-500 truncate">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Analytics