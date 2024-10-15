
import Input from '@/UI/Input';
import HeaderLogo from '@/UI/HeaderLogo';
import MeshBackground from '@/UI/MeshBackground';
import Button from '@/UI/Button';
import { useState } from 'react';
import {  usePage} from '@inertiajs/react';



export default function EstablishmentResetPassword() {
    
const { props: { flash = {} } } = usePage();
const [flashMsg, setFlashMsg] = useState(flash.message);
    setTimeout(()=>{
        setFlashMsg(null)
    }, 3000);

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/password-reset', { email }, {
            onSuccess: () => {
                setSuccess('Password reset link sent!');
                setEmail('');
            },
            onError: (errors) => {
                setError(errors.email);
            }
        });
    };

    return (
      <>
            <HeaderLogo/>
            <div className="flex min-h-[70vh] items-center justify-center px-2 py-12 bg-white-100 max-w-[450px] mx-auto">
  <div className="flex flex-col items-center w-full max-w-md bg-white rounded-xl ring-1 ring-gray-100 shadow-sm">
    <div className="flex flex-col w-full px-6 py-8">
      <h2 className="text-left text-xl leading-9 tracking-tight text-gray-900 font-Manbold">
      Forgot Password?
      </h2>
      <div className='text-left'>
          <p className='font-Manregular mt-4 text-sm'>Enter the email address you used when you joined and we’ll send you a <span className='font-Manbold'>Link</span> to reset your password.</p>
      </div>
      <form 
      method='POST'
      className="w-full flex flex-col gap-4 mt-8">
        <div>
          <Input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           placeholder="Enter your email"
           />
        </div>
        {flashMsg && <div className='absolute top-[10px] right-[10px] font-Manbold bg-accent text-white rounded-lg grid place-items-center p-4 '>{flashMsg}</div>}
          <Button type="submit" variant="primary">
           Confirm
          </Button>
      </form>
    </div>
  </div>
</div>        
        <MeshBackground />

      </>
    )
  }