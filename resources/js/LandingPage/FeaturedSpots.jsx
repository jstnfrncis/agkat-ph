import PropTypes from 'prop-types';
import { Link } from '@inertiajs/react';
import Button from '../UI/Button';

const FeaturedSpots = ({ className }) => {
  return (
    <div className="flex flex-col md:gap-12 gap-4">
      <h1 className="font-clash text-primary text-4xl md:text-5xl lg:text-6xl text-left">Featured spots</h1>

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
    </div>
  );
};

FeaturedSpots.propTypes = {
  className: PropTypes.string,
};

export default FeaturedSpots;

function FeaturedCard({ className = '', shop, category, ratenumber, stars, button }) {
  return (
    <div className={`relative shadow-sm bg-white overflow-hidden md:rounded-3xl rounded-xl ${className}`}>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black to-transparent opacity-65" />

      <div className="relative z-20 p-4 sm:p-6 w-full max-w-md md:max-w-lg lg:max-w-xl h-auto min-h-[250px] md:min-h-[350px] flex flex-col gap-2 justify-end">
        
       <div className='space-y-1'>
         <h1 className="text-white md:text-2xl lg:text-3xl font-Manbold text-left ">{shop}</h1>
         <p className="text-white text-xs font-Manregular text-left opacity-75">{category}</p>
       </div>
        <div className="flex  lg:flex-row justify-between items-center gap-2">
       <div className='flex items-center gap-2'>
           <p className='text-yellow-400 font-Manbold'>{ratenumber}</p>
           {stars}
       </div>
          <Link href="/login">
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
