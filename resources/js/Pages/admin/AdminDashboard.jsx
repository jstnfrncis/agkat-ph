import { Head } from '@inertiajs/react';
import { Link, usePage } from '@inertiajs/react';
import MeshBackground from '@/UI/MeshBackground';
import React, { useState } from 'react'; 
import Inertia from '@inertiajs/inertia';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Calendar from '@/UI/Calendar';
export default function AdminDashboard() {

  const { adminName, adminEmail } = usePage().props;
  const { establishmentId, users, establishments, archivedestablishments = [] } = usePage().props; 

  const { props: { flash = {} } } = usePage();
  const [flashMsg, setFlashMsg] = useState(flash.message);
  setTimeout(()=>{
      setFlashMsg(null)
  }, 3000);


  const [activeTable, setActiveTable] = useState('overview'); // Default to overview
  const handleTableChange = (tableName) => {
    setActiveTable(tableName); 
  };
  
  const restoreEstablishment = async (id) => {
    try {
        const response = await axios.post(`/establishments/${id}/restore`, {
        });
        console.log('Establishment restored:', response.data);
    } catch (error) {
        console.error('Error restoring establishment:', error.response ? error.response.data : error.message);
    }
};
 
    return (
        <>
            <Head title="Admin dashboard" />
            
   
        <main className='flex gap-12 bg-white'>
         {flashMsg && <div className='absolute top-[10px] right-[10px] font-Manbold bg-accent text-white rounded-lg grid place-items-center p-4 '>{flashMsg}</div>}

           <aside className='flex justify-between font-Manbold' >
             <div className=" flex h-[100vh] flex-col justify-between border-e bg-white w-[250px]">
                <div className="px-4 py-6">
                    <span className="grid h-10 w-32  rounded-lg text-xs text-gray-600">
                    <img src="/assets/Favicon.svg" alt="" />
                    </span>

                    <ul className="mt-6 space-y-1">
                        <li>
                    <a
                        href="#"
                        className={`block rounded-lg ${activeTable === 'overview' ? 'bg-highlight' : ''} px-4 py-4 text-sm font-medium text-accent`}
                        onClick={() => handleTableChange('overview')}
                    >
                        Dashboard
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className={`block rounded-lg ${activeTable === 'users' ? 'bg-highlight' : 'hover:bg-highlight'} px-4 py-4 text-sm font-medium text-gray-700`}
                        onClick={() => handleTableChange('users')}
                    >
                        Users
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className={`block rounded-lg ${activeTable === 'establishments' ? 'bg-highlight' : 'hover:bg-highlight'} px-4 py-4 text-sm font-medium text-gray-500`}
                        onClick={() => handleTableChange('establishments')}
                    >
                        Establishments
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className={`block rounded-lg ${activeTable === 'archives' ? 'bg-highlight' : 'hover:bg-highlight'} px-4 py-4 text-sm font-medium text-gray-500`}
                        onClick={() => handleTableChange('archives')}
                    >
                        Archive accounts
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className={`block rounded-lg ${activeTable === 'activity' ? 'bg-highlight' : 'hover:bg-highlight'} px-4 py-4 text-sm font-medium text-gray-500`}
                        onClick={() => handleTableChange('activity')}
                    >
                       Activity
                    </a>
                </li>

                    
                    </ul>
                </div>

                {/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
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
                </div> */}
                </div>
           </aside>
        <div className='flex flex-col  w-full'>
          <header className="py-14 flex justify-between items-center">
          <div className="flex gap-4 items-center ">
                    <img
                        alt=""
                        src="/agkat-logo.png"
                        className="size-20 rounded-full object-cover"
                    />

                    <div className='Admin-Name font-Manregular ' >
                        <div className='flex flex-col  '>
                        <p ><span className="inline-flex rounded-md text-3xl font-Manbold">{'Admin '}{adminName} </span></p>
                        <p className="text-gray-500 text-md">Have an in-depth look at all the metrics within your dashboard.</p> 
                        </div>
                    </div>
                </div>
                  <div className="flex gap-4 items-center ">
                <Menu as="div" className="Profile relative inline-block text-left rounded-full">
                    <div>
                        <MenuButton className="inline-flex p-2 justify-center gap-x-1.5 rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none transform data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="py-1">
                        <MenuItem>
                            <a href="#" className="font-Manbold block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                           Notifications here
                            </a>
                        </MenuItem>
                        </div>
                        </MenuItems>
                    </Menu>


                <Menu as="div" className="Profile relative inline-block text-left rounded-full mr-12">
                    <div>
                        <MenuButton className="font-Manbold inline-flex px-4 py-2 justify-center items-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-stroke hover:bg-gray-50">
                        Account settings
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>

                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none transform data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="py-1">
                        <MenuItem>
                            <a href="#" className="font-Manbold block px-4 py-2 text-sm text-primary hover:bg-gray-100   transition duration-300">
                           Update profile
                            </a>
                            
                        </MenuItem>
                        </div>
                        <div className="py-1">
                        <MenuItem>
                          <a
                          href={route('admin.logout')}
                          method="get"
                          as="button"
                          className="font-Manbold block  px-4 py-2 text-sm font-medium text-primary hover:bg-gray-100 transition duration-300"
                      >
                          Log out
                      </a>
                            
                        </MenuItem>
                        </div>
                        </MenuItems>

                        
                    </Menu>
                    </div>
           
          </header>
           <div className={`Table-Overview ${activeTable === 'overview' ? '' : 'hidden'} flex  gap-4 text-sm rounded-lg w-full`}>
          
            <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
          <div className='Accent-overview flex justify-center items-center bg-accent gap-8 rounded-xl '>
          <div className="Total-User row-span-2 text-white  flex items-center gap-4 overflow-x-auto font-Manregular p-8  rounded-lg">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>

            </span>
            <div className='flex flex-col'>
              <h1 className='font-Manregular text-sm'>Total Users</h1>
              <span className='font-Manbold text-3xl text-white'>300</span>
              <p className=''>Monthly users <span className='font-Manbold text-lg'>145</span></p>
            </div>
          </div>

          <div className="Total-Estab row-span-2 text-white  flex items-center gap-4 overflow-x-auto font-Manregular p-8  rounded-lg">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
          </svg>

            </span>
            <div className='flex flex-col'>
              <h1 className='font-Manregular'>Total Establishments</h1>
              <span className='font-Manbold text-3xl text-white'>20</span>
              <p className=''>Currently active</p>
            </div>
          </div>
          
          <div className="Total-Reviews row-span-2  text-white flex items-center gap-4 overflow-x-auto font-Manregular p-8  rounded-lg">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>

            </span>
            <div className='flex flex-col'>
              <h1 className='font-Manregular'>Total Reviews</h1>
              <span className='font-Manbold text-3xl text-white'>123</span>
              <p className=''>Monthly reviews <span className='font-Manbold text-lg'>26</span></p>

            </div>
          </div>

          </div>
          
         
            </div>
            <div className='overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg'>
            <h1 className='font-Manbold text-lg'>Users</h1>
            <p className='text-gray-500'>A list of all the users, including their name, title, email and role.</p>
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
                    </tr>
                ))}
                </tbody>
            </table>
            </div>


            <div className='overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg'>
            <h1 className='font-Manbold text-lg'>Establishments</h1>
            <p className='text-gray-500'>A list of all the users, including their name, title, email and role.</p>
            <table className="min-w-full divide-y-2 divide-gray-100 mt-12">
                <thead className="ltr:text-left rtl:text-right">
                <tr className='text-left font-Manbold'>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Location</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                    <th className="px-4 py-2"></th>
                </tr>
                </thead>

                {establishments.map(establishment => (
                <tr key={establishment.id}>
                  <td className="whitespace-nowrap px-4 py-2">{establishment.id}</td>
                  <td className="whitespace-nowrap px-4 py-2">{establishment.name}</td>
                  <td className="whitespace-nowrap px-4 py-2">{establishment.email}</td>
                  <td className="whitespace-nowrap px-4 py-2 capitalize">{establishment.usertype}</td>
                </tr>
              ))}
            </table>
            </div>

        </div>
       
        <div className='flex flex-col gap-4'>
         <div>
          <Calendar/>
         </div>
         <div className='overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg'>
              <h1 className='font-Manbold text-lg'>Archive Accounts</h1>
                  <p className='text-gray-500'>A list of all the archived accounts.</p>
                <table className="min-w-full divide-y-2 divide-gray-100 mt-12">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr className='text-left font-Manbold'>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>

                      
                      <th className="px-4 py-2"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                  {archivedestablishments.map(archivedestablishment => (
          <tr key={archivedestablishment.id}>
              <td className="whitespace-nowrap px-4 py-2">{archivedestablishment.id}</td>
              <td className="whitespace-nowrap px-4 py-2">{archivedestablishment.name}</td>
              <td className="whitespace-nowrap px-4 py-2">{archivedestablishment.email}</td>
              <td className="whitespace-nowrap px-4 py-2">{archivedestablishment.description}</td>

              <td className="whitespace-nowrap px-4 py-2">
                  <button
                      onClick={() => restoreEstablishment(archivedestablishment.id)}
                      className='font-Manbold text-xs px-4 py-2 rounded-md bg-accent text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] active-duration-75'>
                      Restore
                  </button>
              </td>
          </tr>
      ))}
                  </tbody>
                </table>
         </div>
        </div>
        </div>
            <div className={`User-table ${activeTable === 'users' ? '' : 'hidden'} w-full overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg`}>
            <h1 className='font-Manbold text-lg'>Users</h1>
            <p className='text-gray-500'>A list of all the users, including their name, title, email and role.</p>
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
                   
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            <div className={`Establishment-table ${activeTable === 'establishments' ? '' : 'hidden'} overflow-x-auto w-full font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg`}>
          <h1 className='font-Manbold text-lg'>Establishments</h1>
          <p className='text-gray-500'>A list of all the Establishments, including their name, title, email and role.</p>
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
            {establishments.map(establishment => (
                <tr key={establishment.id}>
                  <td className="whitespace-nowrap px-4 py-2">{establishment.id}</td>
                  <td className="whitespace-nowrap px-4 py-2">{establishment.name}</td>
                  <td className="whitespace-nowrap px-4 py-2">{establishment.email}</td>
                  <td className="whitespace-nowrap px-4 py-2 capitalize">{establishment.usertype}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>

            <div className={`Archive-accounts ${activeTable === 'archives' ? '' : 'hidden'} w-full overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg`}>
            <h1 className='font-Manbold text-lg'>Archive Accounts</h1>
            <p className='text-gray-500'>A list of all the archived accounts.</p>
          <table className="min-w-full divide-y-2 divide-gray-100 mt-12">
            <thead className="ltr:text-left rtl:text-right">
              <tr className='text-left font-Manbold'>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>

                
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
            {archivedestablishments.map(archivedestablishment => (
    <tr key={archivedestablishment.id}>
        <td className="whitespace-nowrap px-4 py-2">{archivedestablishment.id}</td>
        <td className="whitespace-nowrap px-4 py-2">{archivedestablishment.name}</td>
        <td className="whitespace-nowrap px-4 py-2">{archivedestablishment.email}</td>
        <td className="whitespace-nowrap px-4 py-2">{archivedestablishment.description}</td>

        <td className="whitespace-nowrap px-4 py-2">
            <button
                onClick={() => restoreEstablishment(archivedestablishment.id)}
                className='font-Manbold text-xs px-4 py-2 rounded-md bg-accent text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] active-duration-75'>
                Restore
            </button>
        </td>
    </tr>
))}
            </tbody>
          </table>
            </div>

            <div className={`Activity ${activeTable === 'activity' ? '' : 'hidden'} overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg`}>
            <h1 className='font-Manbold text-lg'>Activities here</h1>
            <p className='text-gray-500'>A list of all the activities here.</p>
            {/* Add the archived accounts table or content here */}
            </div>
            </div>
        </main>
        {/* <MeshBackground/>    */}
        </>
    );
}

