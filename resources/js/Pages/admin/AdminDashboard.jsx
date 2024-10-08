import { Head } from '@inertiajs/react';
import { Link, usePage } from '@inertiajs/react';
import MeshBackground from '@/UI/MeshBackground';
import React, { useState } from 'react'; 
import Inertia from '@inertiajs/inertia';
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
            
   
        <main className='flex justify-center items-center h-screen w-full'>
         {flashMsg && <div className='absolute top-[10px] right-[10px] font-Manbold bg-accent text-white rounded-lg grid place-items-center p-4 '>{flashMsg}</div>}

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

           <div className={`Table-Overview ${activeTable === 'overview' ? '' : 'hidden'} grid grid-cols-2 grid-rows-2 gap-4 text-sm rounded-lg w-full`}>
          <div className="Total-User row-span-2 flex items-center gap-4 overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg">
            <div className='flex flex-col'>
              <h1 className='font-Manregular'>Total Users</h1>
              <span className='font-Manbold text-6xl text-primary'>148</span>
            </div>
          </div>

          <div className="Total-Estab row-span-2 flex items-center gap-4 overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg">
            <div className='flex flex-col'>
              <h1 className='font-Manregular'>Total Establishments</h1>
              <span className='font-Manbold text-6xl text-primary'>20</span>
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
        </main>
        <MeshBackground/>   
        </>
    );
}

