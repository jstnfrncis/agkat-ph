
import * as Inertia from '@inertiajs/inertia';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import MeshBackground from '@/UI/MeshBackground';
import ReviewCard from '@/Functions/ReviewCard';
import { Button } from '@headlessui/react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

export default function EstablishmentDashboard() {
  const {establishment, establishmentName ,establishmentCoverPhoto, establishmentAddress, establishmentDescription, sale_section_photo } = usePage().props;
  const review = {
    profileImage: "/featured-image-1.png",
    userName: "Darwin M.",
    ratingImage: "/5Stars.svg",
    reviewTitle: "Review for At the blanc",
    reviewText: "Loved the cozy atmosphere and friendly staff! The latte was perfect, and the pastries were fresh and delicious. The outdoor seating area is a great place to relax and enjoy a sunny afternoon. Definitely my new go-to spot!",
    reviewPhotos: ["/demo-photo.png", "/demo-photo.png", "/demo-photo.png"]
};
    const { props: { flash = {} } } = usePage();
    const [flashMsg, setFlashMsg] = useState(flash.message);
    setTimeout(()=>{
        setFlashMsg(null)
    }, 3000);

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    const LineChart = () => {
        const data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: '',
              data: [3, 2, 2, 1, 5, 4],
              borderColor: '#5D5FEF',  // Custom line color
              borderWidth: 3,          // Custom line thickness
              pointRadius: 3,          // Custom point size
              pointBackgroundColor: '#ffff', // Custom point color (white)
              fill: true,
            },
          ],
        };
      
        const options = {
          responsive: true,
          plugins: {
            legend: {
                display: false,
              position: 'top',
              labels: {
                font: {
                  family: 'Manbold',  // Custom font family for legend
                  size: 25,           // Font size
                  weight: 'bold',     // Font weight
                  color: '#262641',   // Font color (gray-700 in Tailwind)
                },
              },
            },
          },
          scales: { // Move scales outside of plugins
            x: {
                title: {
                    display: false, // Hides the x-axis title
                  },
              grid: {
                color: '#ffff', // Customize grid line color (e.g., gray-300 in Tailwind)
              },
            },
            y: {
              grid: {
                display: false // Disables horizontal lines
              },
            },
          },
        };
      
        return <Line data={data} options={options} />;
      };

      const [salePhoto, setSalePhoto] = useState(null);

    const handleUploadChange = (event) => {
        const file = event.target.files[0];
        setSalePhoto(file);
    };

    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent default form submission
  
      const formData = new FormData();
      formData.append('sale_photo', salePhoto);
  
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  
      try {
          const response = await fetch('/establishment/upload-sale-photo', {
              method: 'POST',
              headers: {
                  'X-CSRF-TOKEN': csrfToken, // Include CSRF token
              },
              body: formData,
          });
  
          if (!response.ok) {
              // Handle non-2xx responses
              const errorData = await response.json();
              throw new Error(errorData.message || 'Upload failed');
          }
  
          const data = await response.json(); // Parse the JSON response
          console.log('Upload successful:', data); // Handle success
          // Optionally redirect to the dashboard
          window.location.href = '/establishment/dashboard'; // Redirect to the dashboard after upload
      } catch (error) {
          console.error('Upload failed:', error.message); // Handle error
      }
  };
  


    return (
        <>
            <Head title="Establishment dashboard" /> 
        <main className='h-full max-w-homepage mx-auto'>
        {flashMsg && <div className='absolute top-[10px] right-[10px] z-50 font-Manbold bg-accent text-white rounded-lg grid place-items-center p-4 '>{flashMsg}</div>}
            <header className='Navigation font-Manbold'>
                <nav className='flex justify-between items-center'>
                    <div><img src="/assets/Favicon.svg" alt="agkat-logo" /></div>
                    <div className='flex gap-12 group'>
                    <button className='text-blue-500 group-hover:text-gray-500 text-sm'>
                      Overview
                    </button>
                    <button className='hover:text-blue-500 text-sm'>
                     Reviews
                    </button>
                    <button className='hover:text-blue-500 text-sm'>
                      Gallery
                    </button>
                  </div>
                  <div className='flex gap-2'>

                  <Menu as="div" className="Profile relative inline-block text-left rounded-full">
                    <div>
                        <MenuButton className="inline-flex p-2 justify-center gap-x-1.5 rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                        </svg>
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none transform data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="py-1">
                        <MenuItem>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                           Generate QR Code
                            </a>
                        </MenuItem>
                        </div>
                        </MenuItems>
                    </Menu>

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
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                           Notifications here
                            </a>
                        </MenuItem>
                        </div>
                        </MenuItems>
                    </Menu>

                    
                
                      <div>
                       <Menu as="div" className="Profile relative inline-block text-left">
                            <div>
                                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                {establishmentName}
                                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="py-1">
                                <MenuItem>
                                <Link href={route('establishment.edit', establishment.id)} // Call the edit URL
                                         className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">Edit profile
                                </Link>
                                </MenuItem>
                              
                                <form action="#" method="POST">
                                    <MenuItem>
                                
                                    <a
                                        
                                        href={route('establishment.logout')}
                                        method="get"
                                        as="button"
                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                    >
                                        Log out
                                    </a>
                                    </MenuItem>
                                </form>
                                </div>
                            </MenuItems>
                </Menu>

                    
                  </div>
                   
                    </div>
                </nav>
          </header>

        <section className='Contents flex flex-col justify-center  gap-4 mt-12 w-full'>
        
            <div className="Cover-Photo-Establishment-Nam overflow-hidden rounded-3xl">
                <div className='relative overflow-hidden rounded-3xl w-full h-[300px] '>
                <div className='Establishment-Header absolute flex flex-col font-Manregular text-left text-white z-20 p-16 mt-6'>
                <h1 className='font-clash text-4xl md:text-5xl lg:text-5xl '>{establishmentName}</h1>
                <span className='opacity-50'>{establishmentDescription}</span>
                <p className='max-w-[430px] mt-2'>{establishmentAddress}</p>
                </div>
                <img className="absolute inset-0 w-full h-full object-cover" src={`/storage/${establishmentCoverPhoto}`} alt="Cover-photo"/>
                 <div className="absolute inset-0 z-2 bg-gradient-to-r from-black via-black to-transparent opacity-25 "/>
                    
                </div>
              
        </div>

       
     
        <div className='flex gap-4'>
            <div className="flex flex-col gap-4 text-sm rounded-lg w-full">
            <div className='flex gap-4  rounded-lg '>
                          <div className="flex flex-grow items-center gap-4  px-6 py-6 rounded-xl bg-accent ring-1 ring-stroke ">
                             <div className='flex flex-col '>
                               <h1 className='font-Manregular  text-white'>Total Reviews</h1>
                              <span className='font-Manbold text-4xl text-white border-b border-stroke py-2'>148</span>
                              <p className='font-Manregular mt-4  text-white'>Overview of All Submitted Reviews</p>
                          </div>
                          </div>

                          <div className="flex  flex-grow items-center gap-4  px-6 py-6 rounded-xl bg-white ring-1 ring-stroke ">
                             <div className='flex flex-col '>
                               <h1 className='font-Manregular  text-gray-500'>Average Rating</h1>
                               <span className='font-Manbold text-4xl text-primary flex border-b border-stroke py-2'>4.5</span>
                              <p className='font-Manregular mt-4  text-gray-500'>Overall Satisfaction Score</p>
                          </div>
                          </div>

                          <div className="flex  flex-grow items-center gap-4  px-6 py-6 rounded-xl bg-white ring-1 ring-stroke ">
                             <div className='flex flex-col '>
                               <h1 className='font-Manregular  text-gray-500'>Total User Reviews</h1>
                              <span className='font-Manbold text-4xl text-primary border-b border-stroke py-2'>148</span>
                              <p className='font-Manregular mt-4  text-gray-500'>Total number of reviews received by the establishment.</p>
                          </div>
                          </div>
                    
                      </div>
                  
                      
                        
               <div className='flex gap-4'>
                <div className="Rating-Reviews overflow-x-auto font-Manregular p-8 bg-white ring-1 ring-stroke rounded-lg">
                    <h1 className='font-Manbold text-lg'>Ratings & Reviews</h1>
                    <p className='text-gray-500'> A list of all users with their respective rating and reviews.</p>
                    <ReviewCard
                        profileImage={review.profileImage}
                        userName={review.userName}
                        ratingImage={review.ratingImage}
                        reviewTitle={review.reviewTitle}
                        reviewText={review.reviewText}
                        reviewPhotos={review.reviewPhotos}/>

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


            </div>

            <div className='flex flex-col gap-4'>
    <div className='rounded-xl bg-white w-[400px] h-[450px] flex flex-col'>
    <div className='flex-grow w-full h-[200px] flex items-center justify-center bg-white outline-none px-4 py-4 border-2 border-dashed rounded-lg border-gray-300'>
        <img
            src={`/storage/${sale_section_photo}`}
            alt="Sale Photo Section"
            className='w-full h-full object-cover rounded-t-xl' // Set height to 100% to cover the entire div
        />
    </div>

        {/* Form below the image */}
        <form onSubmit={handleSubmit} className='p-4 flex flex-col items-center'>
          <div className='flex w-full gap-4'>
            <label htmlFor="file-upload" className="w-full flex justify-center items-center cursor-pointer gap-2 ring-accent ring-1 rounded-lg">
                <span className="font-Manbold text-accent">Choose image</span>
                <input
                    id="file-upload"
                    type="file"
                    onChange={handleUploadChange}
                    accept="image/*"
                    required
                    className='hidden'
                />
            </label>
            <button
                type="submit"
                className='w-full bg-accent font-Manbold text-white rounded-md py-2'
            >
                Upload
            </button>
            </div>
        </form>
    </div>

    <div className="Line-chart flex flex-grow justify-between gap-4">
        <div className='bg-white p-8 rounded-lg'>
            <h1 className='font-Manbold'>Monthly User Visits</h1>
            <p className='text-gray-500 font-Manregular mb-2'>
                A list of all the users, including their name, title, email, and role.
            </p>
            <LineChart />
        </div>
    </div>
</div>

            </div>
        </section>

        </main>
                
        
        <MeshBackground/>   
        </>
    );
}

