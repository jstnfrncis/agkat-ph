import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left font-Manregular text-primary">
  
    <div>
        <MenuButton className="bg-white flex items-center justify-center font-Manbold rounded-md appearance-none bg-transparent px-6 py-2 text-sm text-primary placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6 ring-0 ring-stroke shadow-sm hover:bg-accent hover:text-white active:scale-[0.98] active-duration-75 w-full gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>

          Sort
       
        </MenuButton>
      </div>

      <MenuItems transition className="w-full  absolute right-0 z-20 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        <div className="py-1 w-full">
          <MenuItem>
            <button href="#" className="flex items-center gap-2 font-Manbold w-full text-xs text-left px-2 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight">
              Most relevant
            </button>
          </MenuItem>
          <MenuItem>
            <button href="#" className="flex items-center gap-2 font-Manbold w-full text-xs text-left px-2 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight">
              Newest
            </button>
          </MenuItem>
          <MenuItem>
            <button href="#" className="flex items-center gap-2 font-Manbold w-full text-xs text-left px-2 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight">
              Highest rating
            </button>
          </MenuItem>
          <MenuItem>
            <button href="#" className="flex items-center gap-2 font-Manbold w-full text-xs text-left px-2 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight">
              Lowest rating
            </button>
          </MenuItem>
        </div>
      </MenuItems>


{/* Dropdown of 5 star to 1 star */}
      {/* <MenuItems transition className="w-full  absolute right-0 z-20 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        <div className="py-1 w-full">
          <MenuItem>
            <button
              href="#"
              className="flex items-center gap-2 font-Manbold w-full text-md text-left px-4 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight"
            >
            
              5 Star
            </button>
          </MenuItem>
          <MenuItem>
          <button
              href="#"
              className="flex items-center gap-2 font-Manbold w-full text-md text-left px-4 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight"
            >
            
              4 Star
            </button>
          </MenuItem>
          <MenuItem>
          <button
              href="#"
              className="flex items-center gap-2 font-Manbold w-full text-md text-left px-4 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight"
            >
            
              3 Star
            </button>
          </MenuItem>

          <MenuItem>
          <button
              href="#"
              className="flex items-center gap-2 font-Manbold w-full text-md text-left px-4 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight"
            >
            
              2 Star
            </button>
          </MenuItem>

          <MenuItem>
          <button
              href="#"
              className="flex items-center gap-2 font-Manbold w-full text-md text-left px-4 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight"
            >
            
              1 Star
            </button>
          </MenuItem>
        </div>
      </MenuItems> */}
    </Menu>
  )
}
