import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { logout } from "../../actions/userActions"
import { Link, useNavigate } from 'react-router-dom'

const navigation = [
  { name: "Site", route: "/" },
  { name: "Items", route: "/" },
  { name: "Analytics", route: "/" },
  { name: "Users", route: "/" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminPanel() {
    const disptach = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        disptach(logout())
        navigate('/signin')
    }

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-900">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-8 w-8" src="" alt="" />
                    </div>
                    <div className="hidden md:block ">
                      <div className="ml-10 flex items-baseline space-x-4 ">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.route}
                            
                            className={classNames(
                            
                                 "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                           
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                     

                      {/* Profile dropdown */}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                    </Disclosure.Button>
                  </div>
                  <button onClick={logoutHandler} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ml-auto">
                    Log out
                  </button>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Admin Panel
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}