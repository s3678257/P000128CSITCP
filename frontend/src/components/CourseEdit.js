import { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import axios from "axios"

export default function CourseEdit(props) {
  const [open, setOpen] = useState(true)
  const name = useRef()
  const description = useRef()
  const price = useRef()
  const [image, setImage] = useState("")
  const cancelButtonRef = useRef(null)

  //get course from id
  const [course, setCourse] = useState({ ...props.course })

  //update course
  axios.defaults.baseURL = "http://localhost:8000"

  const updateCourse = () => {
    //add token to header
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`
    axios
      .put(`/courses/${course._id}`, {
        name: name.current.value || course.name,
        description: description.current.value || course.description,
        price: price.current.value || course.price,
        //if image is not uploaded else dont change it
        image: image ? image : course.image,
      })
      .then((res) => {
        console.log(res.data)
        props.refreshTable()
        //close modal
        setOpen(false)
      })
      .catch((err) => console.log(err))
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    //check if file is image
    if (file.type.split("/")[0] !== "image") {
      e.target.value = ""
      return alert("only image files are allowed")
    } else {
      const formData = new FormData()
      formData.append("image", file)

      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
        const { data } = await axios.post("/uploads", formData, config)
        setImage(data)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Edit course details
                      </Dialog.Title>
                      <div className="mt-2">
                        <div>
                          <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <div className="relative mt-1 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                            <input
                              ref={name}
                              type="text"
                              className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder={course.name}
                            />
                            <label
                              htmlFor="price"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Description
                            </label>
                            <textarea
                              ref={description}
                              type="text"
                              className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder={course.description}
                            />
                            <label
                              htmlFor="price"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Price
                            </label>
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                            <input
                              ref={price}
                              type="text"
                              className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder={course.price}
                            />
                            <label
                              htmlFor="price"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Image
                            </label>
                            <input type="file" onChange={uploadFileHandler} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      updateCourse()
                      props.setCourseEdit()
                      setOpen(false)
                      setOpen(true)
                    }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      props.setCourseEdit()
                      setOpen(false)
                      setOpen(true)
                    }}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
