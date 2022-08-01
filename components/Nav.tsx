/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'GCN Show', href: '#', current: false },
    { name: 'How To', href: '#', current: false },
    { name: 'Maintenance', href: '#', current: false },
    { name: 'Ask GCN', href: '#', current: false },
    { name: 'Training', href: '#', current: false },
    { name: 'Features', href: '#', current: false },
    { name: 'Top 10s', href: '#', current: false },
    { name: 'GCN Racing', href: '#', current: false },
    { name: 'GCN Tech', href: '#', current: false },
    { name: 'Presenters', href: '#', current: false },
    { name: 'Conor Dunne', href: '#', current: false },
    { name: 'Daniel Lloyd', href: '#', current: false },
    { name: 'James Lowsley-Williams', href: '#', current: false },
    { name: 'Jon Cannings', href: '#', current: false },
    { name: 'Manon Lloyd', href: '#', current: false },
    { name: 'Oliver Bridgewood', href: '#', current: false },
    { name: 'Simon Richardson', href: '#', current: false },
    { name: 'Tom Last', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <Disclosure as="nav" className="bg-black">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div id='menuButton' className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-8 w-8" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute space-x-1 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button>
                                    <span className='sr-only'>facebook Icon</span>
                                    <img src='/IconCrc_Facebook.png' alt='facebook' className=' h-8 w-8' />
                                </button>
                                <button>
                                    <span className='sr-only'>Twitter Icon</span>
                                    <img src='/IconCrc_Twitter.png' alt='instagram' className=' h-8 w-8' />
                                </button>
                                <button>
                                    <span className='sr-only'>Instagram Icon</span>
                                    <img src='/IconCrc_Instagram.png' alt='instagram' className=' h-8 w-8' />
                                </button>
                                <button>
                                    <span className='sr-only'>Google Icon</span>
                                    <img src='/YouTubeLogo.png' alt='facebook' className=' h-8 w-8' />
                                </button>


                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-2xl font-medium border-b-2 border-gray-700'
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
    )
}
