import Logo from "@/UI/Logo";
import { Link } from "@inertiajs/react";



export default function ForgotEmail(){

    return(
        <>
        <main className='flex flex-col max-w-custom mx-auto'>
        <Logo/>

        <div>
            <Link 
            href={route(establishments.resetpassword.link, $token)}>
            Click here to reset password</Link>
        </div>
        </main>
        
        </>
    )
}