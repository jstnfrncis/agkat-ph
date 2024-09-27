import { Head } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import MeshBackground from '@/UI/MeshBackground';

export default function AdminDashboard() {
    const { users, auth } = usePage().props; // Get users from props
    const user = auth.user; // Get authenticated user
  
 
    console.log(user); 
    return (
        <>
            <Head title="Admin dashboard" />
            
   
           <main className=''>
           <aside className='flex justify-between font-Manbold' >
      
             {/* <Dropdown>
                                     <Dropdown.Trigger>
                                         <span className="inline-flex rounded-md bold">
                                             <button
                                                 type="button"
                                                 className="inline-flex  items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-bold leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                             >
                                                <span>Admin{" "}  {user.name}</span>
                                                 <svg
                                                     className="-me-0.5 ms-2 h-4 w-4"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                 >
                                                     <path
                                                         fillRule="evenodd"
                                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                         clipRule="evenodd"
                                                     />
                                                 </svg>
                                             </button>
                                         </span>
                                     </Dropdown.Trigger>
            
                                     <Dropdown.Content>
                                         <Dropdown.Link
                                             href={route('profile.edit')}
                                         >
                                             Profile
                                         </Dropdown.Link>
                                         <Dropdown.Link
                                             href={route('logout')}
                                             method="post"
                                             as="button"
                                         >
                                             Log Out
                                         </Dropdown.Link>
                                     </Dropdown.Content>
             </Dropdown> */}


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
                            <Dropdown>
                                     <Dropdown.Trigger>
                                         <span className="inline-flex rounded-md bold">
                                             <button
                                                 type="button"
                                                 className="inline-flex  items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-bold leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                             >
                                                <span>Admin{" "} Account</span>
                                                 <svg
                                                     className="-me-0.5 ms-2 h-4 w-4"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                 >
                                                     <path
                                                         fillRule="evenodd"
                                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                         clipRule="evenodd"
                                                     />
                                                 </svg>
                                             </button>
                                         </span>
                                     </Dropdown.Trigger>
            
                                     <Dropdown.Content>
                                         <Dropdown.Link
                                             href={route('profile.edit')}
                                         >
                                             Profile
                                         </Dropdown.Link>
                                         <Dropdown.Link
                                             href={route('logout')}
                                             method="post"
                                             as="button"
                                         >
                                             Log Out
                                         </Dropdown.Link>
                                     </Dropdown.Content>
             </Dropdown>
                           
                  

                        <ul className="mt-2 space-y-1 px-4">
                            
                        </ul>
                
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

                    <div >
                        <p className='flex flex-col text-xs'>
                        <span className="inline-flex rounded-md bold">
                        <span> {user.name}</span>
                        </span>
                        <span> {user.email} </span>
                        </p>
                    </div>
                    </a>
                </div>
                </div>
           </aside>
           <div className="p-8 bg-white text-sm rounded-lg mt-24 ring-1 ring-stroke">

            <div className="overflow-x-auto font-Manregular">
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
                            <tr key={user.id}>
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

