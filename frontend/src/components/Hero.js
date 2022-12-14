import img3 from "../img3.jpg"
import axios from "axios"
import { useRef, useState } from "react"

export default function Hero() {
  const email = useRef()
  const [message, setMessage] = useState("")
  const addEmailHandler = () => {
    axios.defaults.baseURL = "http://localhost:8000"

    //check if email is valid
    if (
      !email.current.value.includes("@") ||
      !email.current.value.includes(".")
    ) {
      setMessage("Please enter a valid email address")
      return
    } else {
      axios
        .post("/email", {
          email: email.current.value,
        })
        .then((res) => {
          setMessage(res.data)
          console.log(res)
        })
        .catch((err) => {
          setMessage("Email in use already")
        })
    }
  }

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  Jennifer Pronga
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">
                    Superconscious Coach
                  </span>
                </span>
                {/** The content title here */}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                You are invited to go on a journey with your SUPERCOUNSCIOUS
                TEEN!
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">
                  Sign up to get notified when it???s ready.
                </p>
                <div className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    onClick={() => setMessage("")}
                    ref={email}
                    className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300"
                    placeholder="Enter your email"
                  />
                  <button
                    onClick={addEmailHandler}
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Notify me
                  </button>
                </div>
              </div>
              {message === "Thank you for subscribing" ? (
                <p className=" text-green-500">{message}</p>
              ) : (
                <p className=" text-red-500">{message}</p>
              )}
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img
                    className="w-full h-full"
                    src={img3}
                    alt="Pictures here"
                  />
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    aria-hidden="true"
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
