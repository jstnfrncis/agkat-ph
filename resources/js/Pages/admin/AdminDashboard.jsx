import { Head } from '@inertiajs/react';
import { Link, usePage } from '@inertiajs/react';
import MeshBackground from '@/UI/MeshBackground';

export default function AdminDashboard() {

  const { adminName, adminEmail } = usePage().props;
  const { users, auth } = usePage().props; 

    
 
    return (
        <>
            <Head title="Admin dashboard" />
            
   
        <main className='flex justify-center items-center h-screen w-full'>
           <aside className='flex justify-between font-Manbold' >
             <div className="absolute left-0 top-0 flex h-screen flex-col justify-between border-e bg-white w-[250px]">
                <div className="px-4 py-6">
                    <span className="grid h-10 w-32  rounded-lg text-xs text-gray-600">
                    <img src="/assets/Favicon.svg" alt="" />
                    </span>

                    <ul className="mt-6 space-y-1">
                    <li>
                        <a
                        href="#"
                        className="block rounded-lg bg-highlight px-4 py-4 text-sm font-medium text-gray-700"
                        >
                        Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="block rounded-lg hover:bg-highlight px-4 py-4 text-sm font-medium text-gray-700"
                        >
                        Users
                        </a>
                    </li>

                    <li>
                        <a
                        href="#"
                        className="block rounded-lg px-4 py-4 text-sm font-medium text-gray-500 hover:bg-highlight hover:text-gray-700"
                        >
                        Establishments
                        </a>
                    </li>

                    <li>
                        <a
                        href="#"
                        className="block rounded-lg px-4 py-4 text-sm font-medium text-gray-500 hover:bg-highlight hover:text-gray-700"
                        >
                        Notifications
                        </a>
                    </li>

                    <li>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-4 text-gray-500 hover:bg-highlight hover:text-gray-700"
          >
            <span className="text-sm font-medium"> Account </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-highlight hover:text-gray-700"
              >
                Details
              </a>
            </li>

            <li>
              
            <a
                href={route('admin.logout')}
                method="get"
                as="button"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-highlight hover:text-gray-700"
            >
                Log out
            </a>
             
            </li>
          </ul>
        </details>
                
                    </li>
                    </ul>
                </div>

                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        alt=""
                        src="/agkat-logo.png"
                        className="size-10 rounded-full object-cover"
                    />

                    <div className='adminname' >
                        <p className='flex flex-col text-xs'>
                        <span className="inline-flex rounded-md bold">
                        <span>{" "} {adminName} </span>
                        </span> 
                        <span>{adminEmail} </span> 
                        </p>
                    </div>
                    </a>
                </div>
                </div>
           </aside>

            <div className="grid grid-cols-2 grid-rows-2 gap-4 text-sm rounded-lg w-full">
                <div className="Total-User row-span-2 flex items-center gap-4  overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg">
                    {/* <img src="/users-icon.svg" alt="users-icon" className='w-20'/> */}
                   <div className='flex flex-col'>
                    <h1 className='font-Manregular'>Total Users</h1>
                    <span className='font-Manbold text-6xl text-primary'>148</span>
                </div>
                </div>

                <div className="Total-Estab row-span-2 flex items-center gap-4 overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg">
                    {/* <img src="/establishment-icon.svg" alt="establishment-icon" className='w-20' /> */}
                   <div className='flex flex-col'>
                     <h1 className='font-Manregular'>Total Establishments</h1>
                     <span className='font-Manbold text-6xl text-primary'>20</span>
                   </div>
                </div>

                <div className="User-table overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg">
                    <h1 className='font-Manbold text-lg'>Users</h1>
                    <p className='text-gray-500'> A list of all the users, including their name, title, email and role.</p>
                    <table className="min-w-full divide-y-2 divide-gray-100 mt-12">
                        <thead className="ltr:text-left rtl:text-right">
                        <tr className='text-left font-Manbold'>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">


                        {users.map(user => (
                                        <tr >
                                            <td className="whitespace-nowrap px-4 py-2">{user.id}</td>
                                            <td className="whitespace-nowrap px-4 py-2">{user.name}</td>
                                            <td className="whitespace-nowrap px-4 py-2">{user.email}</td>
                                            <td className="whitespace-nowrap px-4 py-2 capitalize">{user.usertype}</td>
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <a href="#" className="inline-block rounded px-4 py-2 text-accent hover:text-indigo-800">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                    ))} 
                        
                            
                        </tbody>
                    </table>

            <div className="PAGINATION rounded-b-lg border-t bg-white border-gray-200 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
                <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                <span className="sr-only">Prev Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>
            </li>

            <li>
                <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                1
                </a>
            </li>

            <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                2
            </li>

            <li>
                <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                3
                </a>
            </li>

            <li>
                <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                4
                </a>
            </li>

            <li>
                <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                <span className="sr-only">Next Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>
            </li>
            </ol>

            </div>

            </div>

            <div className="Establishment-table overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg">
                    <h1 className='font-Manbold text-lg'>Establishments</h1>
                    <p className='text-gray-500'> A list of all the Establishments, including their name, title, email and role.</p>
                    <table className="min-w-full divide-y-2 divide-gray-100 mt-12">
                        <thead className="ltr:text-left rtl:text-right">
                        <tr className='text-left font-Manbold'>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">


                        {users.map(user => (
                                        <tr >
                                            <td className="whitespace-nowrap px-4 py-2">{user.id}</td>
                                            <td className="whitespace-nowrap px-4 py-2">{user.name}</td>
                                            <td className="whitespace-nowrap px-4 py-2">{user.email}</td>
                                            <td className="whitespace-nowrap px-4 py-2 capitalize">{user.usertype}</td>
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <a href="#" className="inline-block rounded px-4 py-2 text-accent hover:text-indigo-800">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                    ))} 
                        
                            
                        </tbody>
                    </table>

            <div className="PAGINATION rounded-b-lg border-t bg-white border-gray-200 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
                <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                <span className="sr-only">Prev Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>
            </li>

            <li>
                <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                1
                </a>
            </li>

            <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                2
            </li>

            <li>
                <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                3
                </a>
            </li>

            <li>
                <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                4
                </a>
            </li>

            <li>
                <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                <span className="sr-only">Next Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>
            </li>
            </ol>

            </div>

            </div>


            </div>

        </main>

                
                
        
        <MeshBackground/>   
        </>
    );
}

