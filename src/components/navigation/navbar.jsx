'use client';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { AiOutlineHeart, AiOutlineInfo } from 'react-icons/ai';
import { FaRegHandshake } from 'react-icons/fa';
import { IoMdHelp } from 'react-icons/io';
import { MdPets } from 'react-icons/md';
import { RiCandleLine } from 'react-icons/ri';

import logo from '../../../public/images/logo/logo.png';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <div className='lg:w-100 lg:bg-danger container-fluid   px-2  lg:flex lg:w-full lg:justify-center lg:bg-red-200'>
      <Disclosure
        as='nav'
        className=' z-50 mx-auto bg-blue-500 lg:fixed lg:rounded-bl-3xl lg:rounded-br-3xl	'
      >
        {({ open }) => (
          <>
            <div
              style={{ width: '75rem' }}
              className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-4'
            >
              <div className='relative flex h-16 items-center justify-between '>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='absolute inset-y-0 right-0  pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  {/* Profile dropdown */}
                  <Menu as='div' className='relative ml-3'>
                    <div className='flex items-center gap-2'>
                      <Menu.Button className='relative flex rounded-full  border bg-transparent p-2 text-sm focus:outline-none'>
                        <span className='absolute ' />
                        {/* <img
                          className='h-8 w-8 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        /> */}
                        <Bars3Icon
                          className='block h-5 w-5 text-white'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                      <span className='text-xs font-bold text-white'>Menu</span>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute inset-x-0	  z-10 mt-2 w-60 origin-top-right rounded-md bg-white  shadow-lg  ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                ' flex items-center gap-2 px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              <span className='  rounded-full border-blue-500 bg-red-200 bg-transparent '>
                                <RiCandleLine className=' rounded-full border border-blue-500 p-1 text-2xl font-bold text-blue-500' />
                              </span>{' '}
                              <span className='text-medium font-medium text-blue-500'>
                                Online memorials
                              </span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex items-center gap-2 px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              <span className='  rounded-full border-blue-500 bg-red-200 bg-transparent '>
                                <AiOutlineHeart className=' rounded-full border border-blue-500 p-1 text-2xl font-bold text-blue-500' />
                              </span>{' '}
                              <span className='text-medium font-medium text-blue-500'>
                                Living Timelines
                              </span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex items-center gap-2 px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              <span className='  rounded-full border-blue-500 bg-red-200 bg-transparent '>
                                <MdPets className=' rounded-full border border-blue-500 p-1 text-2xl font-bold text-blue-500' />
                              </span>{' '}
                              <span className='text-medium font-medium text-blue-500'>
                                Pet memorials
                              </span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex items-center gap-2 px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              <span className='  rounded-full border-blue-500 bg-red-200 bg-transparent '>
                                <IoMdHelp className=' rounded-full border border-blue-500 p-1 text-2xl font-bold text-blue-500' />
                              </span>{' '}
                              <span className='text-medium font-medium text-blue-500'>
                                Help
                              </span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex items-center gap-2 px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              <span className='  rounded-full border-blue-500 bg-red-200 bg-transparent '>
                                <AiOutlineInfo className=' rounded-full border border-blue-500 p-1 text-2xl font-bold text-blue-500' />
                              </span>{' '}
                              <span className='text-medium font-medium text-blue-500'>
                                About Us
                              </span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex items-center gap-2 px-4 py-2 text-sm  text-gray-700'
                              )}
                            >
                              <span className='  rounded-full border-blue-500 bg-red-200 bg-transparent '>
                                <FaRegHandshake className=' rounded-full border border-blue-500 p-1 text-2xl font-bold text-blue-500' />
                              </span>{' '}
                              <span className='text-medium font-medium text-blue-500'>
                                Partners
                              </span>
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <div className='ml-6  flex   '>
                  {/* <img
                    className='h-8 w-auto'
                    src='../../../public/images/logo/logo.png'
                    alt='Your Company'
                  /> */}
                  <Image
                    src={logo}
                    width={250}
                    className='ml-3'
                    height={50}
                    alt='logo'
                  />
                </div>
                <div className='align-center  flex w-max items-end justify-end sm:items-stretch sm:justify-end'>
                  <div className='hidden sm:ml-6 sm:block'>
                    <div className='flex items-center space-x-4'>
                      <button class='border-blue-7500 rounded-lg border border-none bg-yellow-400 px-10 py-2 text-xs font-bold text-black'>
                        Try it free
                      </button>
                      <Link href='#' className='text-sm font-medium text-white'>
                        Sign In
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
}
