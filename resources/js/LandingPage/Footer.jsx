import Logo from "../UI/Logo"
import { Link } from '@inertiajs/react';


const  Footer = () => {
  return (
    <div className="border-t-2 border-stroke flex flex-col justify-center items-center">

       <div className="mt-12 flex flex-col justify-center items-center gap-4">
        <Logo/>
        <p className="text-icons font-Manregular font-light ">© 2024 agkat.ph  All rights reserved.</p>
       </div>
        <div className="flex font-Manbold text-primary gap-4 font-medium mt-14">
            <Link href="" className="hover:text-accent transition">Terms & Conditions</Link>
            <Link href="" className="hover:text-accent transition">Privacy Policy</Link>
        </div>
    </div>
  )
}

export default Footer


