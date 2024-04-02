
  import { Disclosure} from '@headlessui/react'
  import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBell } from '@fortawesome/free-regular-svg-icons'; 
  import { faGear } from '@fortawesome/free-solid-svg-icons'; // Import the solid version of the gear icon
import { Link } from 'react-router-dom';



  const navigation = [
      { name: 'Dashboard', href: '/dashboard', current: true },
      { name: 'Finances', href: '#', current: false },
      { name: 'Send and Request', href: '#', current: false },
      { name: 'Deals', href: '#', current: false },
      { name: 'Wallet', href: '#', current: false },
      { name: 'Activity', href: '#', current: false },
      { name: 'Help', href: '#', current: false },
    ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const Navbar = () => {
      return (
          <div className=''>
              <Disclosure as="nav" className="bg-blue-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
              <div className="relative px-4 lg:px-3 flex h-16 items-center justify-between">
                <div className="absolute  inset-y-0 left-0 flex items-center  sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                 <Link to={"/"}>
                 <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://i.ibb.co/26dPy52/kisspng-paypal-logo-payment-business-sales-5af84e85b30c26-5507677615262224697334-1.png"
                      alt="logo"
                    />
                  </div></Link>
                  <div className="hidden sm:ml-6 lg:block md:hidden sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? ' text-white  hover:bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div>     
                  <div  className='flex items-center gap-4'>
                    <div className="text-[18px] rounded-full flex gap-4 text-white hover:text-gray-600">

                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                    </div>
                    <div className="text-[18px] rounded-full flex gap-4 text-white hover:text-gray-600  ">
                    <FontAwesomeIcon icon={faGear} />
                    </div>   
                    <button className=' text-white'> Log Out</button>     
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
          </div>
      );
  };

  export default Navbar;