// To remove the classnName is missing a prop validation. Not required.
import PropTypes from 'prop-types';
import HeaderLogo from '../UI/HeaderLogo';
import Button from '../UI/Button';
import Dropdown from '../UI/Dropdown';
import Footer from '../LandingPage/Footer';
import { Link } from '@inertiajs/react';




const  FeaturedSpots = ( {className}) => {
    return (
      <>
     
      <div className='relative flex flex-col gap-6 font-Manregular text-left px-12 py-16 bg-white rounded-xl ring-1 ring-gray-100 shadow-sm md:my-16 my-12 w-full h-90'>
      <div className='absolute inset-0 bg-none md:bg-[url("/explore-banner-v2.png")] bg-cover bg-center rounded-xl'/>
         <div className='relative z-10 '>
           <h1 className='font-clash text-4xl md:text-5xl lg:text-6xl text-white'>Start exploring!</h1>
           <p className='max-w-[430px] mt-2 font-Manregular text-white'>Below are the top cafes and restaurants in San Fernando! Use the search and filter options, or the nearby feature, to find your perfect spot. Happy exploring!</p>
         </div>
      
        </div>

    <div className=' mx-auto md:my-14'>
          <div className='flex flex-col gap-4 justify-between lg:flex-row lg:gap-4 mb-16'>
            <div className='relative font-Manregular w-full md:w-full'>
          
            <input className="bg-white relative font-Manbold block rounded-md appearance-none bg-transparent pl-12 py-2 pr-12 placeholder:text-primary sm:text-sm sm:leading-6 border-none  ring-stroke shadow-sm w-full" placeholder="Enter a keyword" type="text"/>
            <img src="/search-icon.svg" alt="" className='text-primary absolute left-5 top-1/2 transform -translate-y-1/2' />
            </div>
            <div className=' flex-col gap-4 grid grid-cols-2 sm:grid-cols-2 sm:gap-2 lg:flex lg:flex-row lg:gap-4 lg:justify-between '>
              <Button variant="neutral" className="bg-white flex justify-center items-center gap-2 ">
                <img src="/Nearby.svg" className='hover:text-white' alt="" />
                Nearby
              </Button>
             <Button variant="neutral" className="bg-white flex justify-center items-center gap-2">
                <img src="/cafe-icon.svg" alt="" />
                Cafe
              </Button>
              <Button variant="neutral" className="bg-white flex justify-center items-center gap-2">
                <img src="/resto-icon.svg" alt="" />
                Resto
              </Button>
              <Dropdown className="bg-white"/>
            </div>
          </div>
          
        <div className='flex flex-col gap-12 mb-12'>
      
        <div className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
        <FeaturedCard
          className="bg-[url(/estab/Cafe101_Cover.jpg)] bg-no-repeat bg-cover"
          shop="Cafe 101"
          category="Coffee Shop | Cafe"
          ratenumber={4.9}
          stars={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"></path></svg>}
          button="Explore"
        />
        <FeaturedCard
          className="bg-[url(/estab/StellasCafe_Cover2.jpg)] bg-no-repeat bg-cover"
          shop="Stella's Café"
          category="Cafe"
          ratenumber={4.8}
          stars={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"></path></svg>}
          button="Explore"
        />
        <FeaturedCard
          className="bg-[url(/estab/Hangar_sc2.jpg)] bg-no-repeat bg-cover"
          shop="Hangar One Bar"
          category="Restaurant"
          ratenumber={4.6}
          stars={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"></path></svg>}
          button="Explore"
        />
        <FeaturedCard
          className="bg-[url(/estab/Tikvah_sc_2.jpg)] bg-no-repeat bg-cover"
          shop="Tikvah"
          category="Coffee Shop"
          ratenumber={4.8}
          stars={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"></path></svg>}
          button="Explore"
        />
        <FeaturedCard
          className="bg-[url(/estab/Ihaw_sc1.jpg)] bg-no-repeat bg-cover"
          shop="Ihaw"
          category="Restaurant"
          ratenumber={4.3}
          stars={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"></path></svg>}
          button="Explore"
        />
        <FeaturedCard
          className="bg-[url(/estab/Mapa_sc7.jpg)] bg-no-repeat bg-cover"
          shop="Mapa Coffee"
          category="Coffee Shop"
          ratenumber={4.1}
          stars={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"></path></svg>}
          button="Explore"
        />
            <FeaturedCard
          className="bg-[url(/estab/WokItOut_sc1.jpg)] bg-no-repeat bg-cover"
          shop="Wok it out"
          category="Restaurant"
            ratenumber={4.4}
          stars={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"></path></svg>}
          button="Explore"
        />
        <FeaturedCard
          className="bg-[url(/estab/Primero_Cover.png)] bg-no-repeat bg-cover"
          shop="Primero"
          category="Coffee Shop | Cafe"
          ratenumber={4.9}
          stars={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"></path></svg>}
          button="Explore"
        />
        
      </div>
         
      <div className='md:mt-4 mt-6 flex items-center justify-center'>
       <Link href="#Auth"><button className=" font-Manbold text-xl bg-accent hover:bg-blue-900 transition-all active:scale-[0.98] active-duration-75  text-white px-8 py-2 rounded-lg">See more</button></Link>
      </div>
          
        </div>
    </div>
      
      <Footer/>
      </>
    )
  }

// To remove the classnName is missing a prop validation. Not required.
FeaturedSpots.propTypes = {
  className: PropTypes.string,
};

export default FeaturedSpots;

function FeaturedCard({ className = '', shop, category, ratenumber, stars, button }) {
  return (
    <div className={`relative shadow-sm bg-white overflow-hidden md:rounded-3xl rounded-xl ${className}`}>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black to-transparent opacity-35" />

      <div className="relative z-20 p-4 sm:p-6 w-full max-w-md md:max-w-lg lg:max-w-xl h-auto min-h-[250px] md:min-h-[350px] flex flex-col gap-2 justify-end">
        
       <div className=''>
         <h1 className="text-white md:text-2xl lg:text-2xl font-Manbold text-left">{shop}</h1>
         <p className="text-white text-xs font-Manregular text-left opacity-75">{category}</p>
       </div>
       <div className="flex  lg:flex-row justify-between items-center gap-2">
       <div className='flex items-center gap-2'>
           <p className='text-yellow-400 font-Manbold'>{ratenumber}</p>
           {stars}
       </div>
          <Link href="/overview">
            <button className="font-Manbold rounded-lg  text-xs bg-accent text-white hover:bg-blue-900 transition-all inline-flex justify-center py-2 md:px-8 px-4 active:scale-[0.98] duration-75">
              {button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

FeaturedCard.propTypes = {
  className: PropTypes.string,
  shop: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  ratenumber: PropTypes.number.isRequired,
  stars: PropTypes.node.isRequired, // Updated to accept any renderable node
  button: PropTypes.string.isRequired,
};