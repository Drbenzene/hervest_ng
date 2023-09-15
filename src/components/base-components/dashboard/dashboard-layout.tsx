import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  ChartPieIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {HiMenuAlt2} from 'react-icons/hi'
import {HiMiniShoppingBag, HiMiniUsers} from 'react-icons/hi2'
import {RxDashboard} from 'react-icons/rx'
import {BsFillCreditCardFill, BsFillChatDotsFill, BsFillExclamationSquareFill} from 'react-icons/bs'
import {TbSquareArrowUpFilled, TbLogout} from 'react-icons/tb'
import {AiFillPieChart} from 'react-icons/ai'
import {RiFileList2Fill} from 'react-icons/ri'
import {FaUserAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface IUserDashboard{
    children: any,
    title: string
}

const navigation = [
  { name: 'Dashboard', href: '#', icon: RxDashboard, current: false },
  { name: 'Plans', href: '#', icon: RiFileList2Fill, current: true },
  { name: 'Purse', href: '#', icon: HiMiniShoppingBag, current: false },
  { name: 'Investments', href: '#', icon: TbSquareArrowUpFilled, current: false },
  { name: 'Banks & Cards', href: '#', icon: BsFillCreditCardFill, current: false },
  { name: 'Referral Code', href: '#', icon: HiMiniUsers, current: false },
  { name: 'Account', href: '#', icon: FaUserAlt, current: false },
  { name: 'Portfolio', href: '#', icon: ChartPieIcon, current: false },
  { name: 'About HerVest', href: '#', icon: BsFillExclamationSquareFill, current: false },
  { name: 'Support', href: '#', icon: BsFillChatDotsFill, current: false },
  { name: 'Logout', href: '#', icon: TbLogout, current: false },

]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard({children, title}: IUserDashboard) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>

                  {/* MOBILE RESPONSIVENESS SIDEBAR */}
                  <div className="flex grow flex-col gap-y-5 p-16 overflow-y-auto bg-white ">
                    <div className="flex h-16 shrink-0  justify-start items-center mb-3">
                      <img
                        className="h-8 w-auto object-cover"
                        src="https://res.cloudinary.com/dlhjvo4tz/image/upload/v1694693309/HerVest_Logo_ye4umd.png"
                        alt="Hervest"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-secondary text-gray font-extrabold'
                                      : 'text-gray hover:bg-secondary',
                                    'group flex gap-x-3 rounded-xl p-3 text-sm leading-6'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-primary font-extrabold' : 'text-[#666666] group-hover:text-primary',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for Large Screens*/}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 p-8 overflow-y-auto bg-white text-gray px-6 pb-4 border-r-4 border-primary">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://res.cloudinary.com/dlhjvo4tz/image/upload/v1694693309/HerVest_Logo_ye4umd.png"
                alt="Hervest"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul  className="flex flex-1 flex-col gap-y-7">
                <li>
                <ul className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-secondary text-gray font-extrabold'
                                      : 'text-gray hover:bg-secondary',
                                    'group flex gap-x-3 rounded-xl p-2.5 text-sm leading-6 '
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-primary font-extrabold' : 'text-[#666666] group-hover:text-primary',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-white bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <HiMenuAlt2 className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <span className="relative flex flex-1">
                <p className='flex justify-start items-center'>{title}</p>
              </span>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <BellIcon className="h-6 w-6 text-black" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
                {children}
                </div>
          </main>
        </div>
      </div>
    </>
  )
}
