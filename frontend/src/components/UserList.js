import React, { useEffect, useState } from "react"
import axios from "axios"
import UserEdit from "./UserEdit"
import DeleteModal from "./DeleteModal"
import UserCreateModal from "./UserCreateModal"
const CourseList = (props) => {
  const [userEdit, setUserEdit ] = useState(false)
  const [createUserModal, setCreateUserModal] = useState(false)
  //get all courses
  const [users, setUsers] = useState([])
  const [id, setId] = useState("")
  const [userItem, setUser] = useState({})
  const [deleteModal, setDeleteModal] = useState(false)

  axios.defaults.baseURL = "http://localhost:8000"
  useEffect(() => {
    axios
      .get("/users")
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const setUserEditFalse = () => {
    setUserEdit(false)
  }
  const setCourseCreateFalse = () => {
    setCreateUserModal(false)
  }
  const setDeleteModalFalse = () => {
    setDeleteModal(false)
  }

  //refresh the table
  const refreshTable = () => {
    axios
      .get("/users")
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //delete courseItem
  const deleteUser= () => {
    //add token to header
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`
    axios
      .delete(`/users/${id}`)
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
        <h1 className="text-2xl tracking-tight font-extrabold">User List</h1>{" "}
        <button
          className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
          onClick={() => setCreateUserModal(true)}
        >
          Add User
        </button>
      </div>
      {createUserModal && (
        <UserCreateModal
          setCourseEdit={setCourseCreateFalse}
          refreshTable={refreshTable}
        />
      )}
      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModalFalse}
          refreshTable={refreshTable}
          deleteItem={deleteUser}
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr
                      key={user._id}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.isAdmin ? "Admin" : "User"}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => {
                            setUserEdit(true)
                            setId(user._id)
                            setUser({ ...user })
                          }}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Edit
                        </button>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => {
                            setId(user._id)
                            setDeleteModal(true)
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                      {userEdit && (
                        <UserEdit
                          user={userItem}
                          id={id}
                          setCourseEdit={setUserEditFalse}
                          refreshTable={refreshTable}
                        />
                      )}
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

export default CourseList
