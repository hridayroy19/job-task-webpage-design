
import { Disclosure} from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Account', href: '/deshboard', current: true },
    { name: 'Security', href: '#', current: false },
    { name: 'Data & privicy', href: '#', current: false },
    { name: 'Payments', href: '#', current: false },
    { name: 'Notifications', href: '#', current: false },
    { name: 'Seller Tools', href: '/dashboard/sellTols', current: false },
    { name: 'Statements', href: '#', current: false },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SubNavbar = () => {
    return (
        <div className='drop-shadow-lg'>
        <Disclosure as="nav" className="bg-[#e2e1e1]">
  {({ open }) => (
    <>
      <div className="mx-auto w-full  ">
        <div className="relative px-4 shadow-xl mb-20 lg:px-3 flex h-16 text-center items-center justify-center">
          <div className="absolute  inset-y-0 left-0 flex items-center  px-6 lg:hidden">
            {/* Mobile menu button*/}
            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          <div className="">
            <div className="hidden sm:ml-6 lg:block md:hidden sm:block">
              <div className="flex  space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? ' text-black  hover:bg-gray-300 hover:text-blue-500 hover:rounded-2xl ' : '  text-black  hover:bg-gray-300 hover:text-blue-500 hover:rounded-2xl',
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
        </div>
      </div>

      <Disclosure.Panel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-black hover:text-white',
                'block rounded-md text-center px-3 py-2 text-base font-medium'
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

export default SubNavbar;