import { Head, Link } from '@inertiajs/react';
import Home from './Home';
import Close from '../UI/Close';
import Logo from '../UI/Logo';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className=" dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                            <div className="flex lg:col-start-2 lg:justify-center">                      
                            </div>
                            <header>
   
   <nav className="flex justify-between items-center max-w-5xl  mx-auto z-10 ">

      {/* Navigation Desktop */}
       <div>
         <Logo/>
       </div>
         {/* Contents Navigation Desktop */}
       <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">

           <ul className="flex md:flex-row flex-col md:items-center ] gap-11 font-epilogue bold">
               <li><a href="#event" className='hover:text-accent transition text-primary'>News & Events</a></li>
               <li><a href="#discover" className='hover:text-accent transition text-primary'>Discover</a></li>
               <li ><a href="#about" className='hover:text-accent transition text-primary'>About</a></li>
              
           </ul>
          
       </div>
       <div>
       <div>
           {auth.user ? (
                                   <div className='flex gap-8 font-epilogue bold justify-center items-center'>
                                     <Link
                                         href={route('dashboard')}
                                         className="font-epilogue bg-accent hover:bg-blue-900 transition-all text-white px-6 py-2 rounded-lg active:scale-[0.98] active-duration-75"
                                     >
                                         Dashboard
                                     </Link>
                                   </div>
                                ) : (
                                    <>
                                   <div className='flex gap-8 font-epilogue bold justify-center items-center'>
                                    <Link href={route('login')} className="hover:text-accent transition text-primary">Log in</Link>
                                    <Link href={route('register')} className="bg-accent hover:bg-blue-900 transition-all text-white px-6 py-2 rounded-lg active:scale-[0.98] active-duration-75"> Register </Link>
                                   </div>
                                       
                                    </>
                                )}
           </div>
       </div>
       
  



        {/* Hamburger Mobile Side Navigation */}
        <button className='md:hidden relative peer hover:text-accent transition cursor-pointer'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg>
        </button>

             {/* Background Blur Filter */}
        <div className="fixed inset-0 bg-white/50 backdrop-blur-md transition-opacity duration-300 ease-out peer-focus:opacity-100 peer-focus:pointer-events-auto opacity-0 pointer-events-none"></div>

          {/* Contents Mobile Side Navigation */}
       <div className="md:hidden z-20 fixed top-0 -right-[600px] lg:right-0 h-screen w-4/5 lg:w-4/5 bg-white shadow-2xl peer-focus:right-0 peer:transition ease-out delay-100 duration-200  flex-col text-left gap-6 font-epilogue px-10 py-4">
           <div className='flex justify-between items-center py-4'>
             <Logo/>
             <button className="hover:text-accent transition"><Close/></button>                 
           </div>

         <div className='flex flex-col text-left py-6 border-t border-b border-slate-900/10 '>
             <a href="#event" className="py-3 px-2 rounded-xl text-primary hover:text-accent transition hover:bg-highlight">News & Events</a>
             <a href="#discover" className="py-3 px-2 rounded-xl text-primary hover:text-accent transition hover:bg-highlight">Discover</a>
             <a href="#about" className="py-3 px-2 rounded-xl text-primary hover:text-accent transition hover:bg-highlight">About</a>
           
         </div>
           <Link href="/login-select" className="my-4 bg-accent text-white  hover:bg-blue-900 transition inline-flex justify-center rounded-lg text-sm  py-3 px-4 w-full">Sign in</Link>
           
          
       </div>
    

     </nav>

</header>
                            {/* <nav className="-mx-3 flex flex-1 justify-center">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                   <div className='flex gap-8 font-epilogue bold'>
                                    <Link href={route('login')} className="hover:text-accent transition text-primary">Log in</Link>
                                    <Link href={route('register')} className="hover:text-accent transition text-primary"> Register </Link>
                                   </div>
                                       
                                    </>
                                )}
                            </nav> */}

                             <Home/>
                    </div>
                </div>
            </div>
        </>
    );
}
