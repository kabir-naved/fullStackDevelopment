import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="text-blue-500 w-12 h-14 mr-3"><path d="m28.21 0.002054c-0.5 0.01039-1.006 0.05246-1.517 0.1252-2.411 0.3395-4.533 1.358-6.196 3.201-1.567 1.746-2.363 3.832-2.508 6.184-0.0969 1.689 0.1114 3.29 0.7141 4.776-3.107-3e-3 -6.214-0.02078-9.321 2e-3 -0.5304 0-0.6509-0.1699-0.6509-0.6792v-12.25c0-0.485-0.2333-0.7276-0.6994-0.7276-1.688 0-3.399 0.04846-5.111 0-0.5786-0.02428-0.6994 0.1697-0.6994 0.7032v9.216h0.0241v9.216c0 0.7276 0.0242 0.7276 0.7234 0.7276h3.989c-1.364 0.601-2.573 1.487-3.57 2.748-1.832 2.328-2.387 5.044-2.049 7.955 0.651 5.36 5.087 9.095 10.41 8.779 2.314-0.1455 4.436-0.8004 6.196-2.401 0.641-0.5935 1.165-1.233 1.599-1.907 0.4267 0.6171 0.937 1.187 1.541 1.7 2.628 2.255 5.666 3.007 9.041 2.425 8.294-1.407 10.37-10.31 6.847-15.79v0.02408c-1.376-2.142-3.242-3.397-5.422-4.029 2.045-0.5895 3.803-1.676 5.142-3.459 1.832-2.474 2.387-5.263 1.856-8.27l0.0244 0.02438c-0.4822-2.789-1.857-5.02-4.243-6.572-1.9-1.222-3.959-1.771-6.126-1.726zm-0.1281 5.938c0.5581 0.00799 1.128 0.1355 1.698 0.3719 1.519 0.6063 2.266 1.867 2.483 3.468 0.024 0.2425 0.0243 0.4607 0.0484 0.7032 0 2.158-1.157 3.832-2.99 4.341h0.0241c-2.748 0.7518-5.256-1.14-5.377-4.026-0.0482-1.504 0.3137-2.838 1.471-3.856 0.8137-0.6972 1.712-1.016 2.642-1.002zm-7.85 10.89c1.318 1.595 2.928 2.599 4.757 3.142-2.087 0.6051-3.866 1.751-5.224 3.604-0.064 0.08863-0.1231 0.1786-0.1838 0.2682-0.8976-1.469-2.088-2.625-3.626-3.38 1.186-5e-3 2.372-0.01089 3.554-0.01089 0.6992 0 0.7231-0.02428 0.7231-0.7276zm-8.644 7.981c1.546-0.02398 2.653 0.786 3.422 2.15 0.1688 0.291 0.2892 0.2423 0.5062 0.1212 1.059-0.5609 2.131-1.122 3.197-1.682-0.3527 0.7921-0.5919 1.614-0.7309 2.459h-6.468c-0.3134 0-0.4341 0.09683-0.4341 0.4362v4.341c0 0.3637 0.1205 0.4606 0.4822 0.4606h3.423c2e-3 0.1598-0.0808 0.2495-0.1681 0.3154-1.35 1.334-3.641 1.649-5.304 0.7276-2.098-1.14-3.014-3.905-2.098-6.33 0.6751-1.77 1.929-2.813 3.857-2.983 0.107-9e-3 0.2122-0.01459 0.3153-0.01619zm16.42 0.6445c2.274-0.03777 4.233 1.809 4.177 4.5 0 1.989-0.9644 3.565-2.556 4.22-2.772 1.116-5.666-0.8004-5.786-3.856-0.0723-1.867 0.4823-3.492 2.218-4.365 0.6487-0.3289 1.31-0.4875 1.947-0.4981z" fill="currentColor"></path></svg>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="login"
                            className="text-gray-800 hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to={'/'}
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'about'}
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'contact'}
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'blog'}
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



export default Header