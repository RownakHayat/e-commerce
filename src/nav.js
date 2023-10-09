import React from 'react'
import { FiTruck } from 'react-icons/fi'
import './nav.css'

const Nav = () => {
    return (
        <>
            <div className="free flex bg-[#0f020b] px-10 py-5">

                <div className="icon-shop text-4xl text-[#edfb13]">
                    <FiTruck />
                </div>
                <p className='px-4 text-l text-yellow-50 uppercase'> Free shipping upto $10000</p>
            </div>
            <div className="main_hd">
                <div className="content">
                    <div className="logo_shop">
                        <img src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-design_23-2149699842.jpg?w=740&t=st=1696850345~exp=1696850945~hmac=75979838ce568a5f890e175076789c984d3460d38c9f37f45a0ff00992f6d803" alt=""
                            className='w-28' />
                    </div>
                    <div className="shopping">
                        <div className="search_form">
                            <form>
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
                                        <svg className="w-4 h-4 text-gray-500 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full text-center p-2 text-sm text-gray-900 border 
                                    border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
                                    dark:border-gray-600 dark:placeholder-gray-400"/>
                                    <button type="submit" className="text-gray-900 text-center absolute right-2.5 bottom-2.5 bg-[#edfb13]
                                    font-medium rounded-lg text-sm px-4">Search</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav