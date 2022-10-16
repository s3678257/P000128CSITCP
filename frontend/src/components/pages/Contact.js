
import { useState, useRef } from "react"
import { Switch } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
export default function Contact() {
  const firstNameRef = useRef();
  const lastNameRef = useRef(); 
  const emailRef = useRef(); 
  const phoneRef = useRef(); 
  const messageRef = useRef(); 
  const agreedRef = useRef();
  const countryRef = useRef(); 

  const [agreed, setAgreed] = useState(false)
  // submit  
  const handleSubmit = (e)=>{
    var params = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      country: countryRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
      agreed: agreed
    } 
    console.log(params)
  } 
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern 
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
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
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
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
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Contact me
          </h2>    
           {/**Contact title */}
          <p className="mt-4 text-lg leading-6 text-black-500">
          We will get back to you.
          </p>

        </div>
        <div className="mt-12">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            {/**First Name */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input ref={firstNameRef}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="First Name"
                  className="py-3 px-4 block w-full shadow-md focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            {/**Last Name */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input ref={lastNameRef}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Last Name"
                  className="py-3 px-4 block w-full shadow-md focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            {/**Client Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter you Email"
                  className="py-3 px-4 block w-full shadow-md focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/**Client Phone Number */}
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              

              {/**Clients Country */}
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select  ref={countryRef}
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-gray-500 focus:border-gray-500 rounded-md"
                  >
                    <option>US</option>
                    <option>EU</option>
                    <option>CA</option>
                    <option>AU</option>
                    <option>UK</option>
                    
                    {/* <option>Country</option> */}
                  </select>
                </div>

                {/**Client input their number */}
                <input ref={phoneRef}
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full pl-20 focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md shadow-md"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>

            {/**Clients input message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea ref={messageRef}
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-md focus:ring-gray-500 focus:border-gray-500 border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch ref={agreedRef}
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-gray-900" : "bg-gray-200",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-5" : "translate-x-0",
                        "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the{" "}
                    <span  className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/**submit button */}
            <div className="sm:col-span-2">
              
              <button type="button" onClick={handleSubmit}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-900"
              >
                Submit
              </button>

              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
