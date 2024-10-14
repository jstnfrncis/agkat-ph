

import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import MeshBackground from '@/UI/MeshBackground';
import { Head, Link, useForm, usePage} from '@inertiajs/react';

import { useEffect, useState } from 'react';


export default function EstablishmentLogin({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const { props: { flash = {} } } = usePage();
    const [flashMsg, setFlashMsg] = useState(flash.message);
    setTimeout(()=>{
        setFlashMsg(null)
    }, 3000);
    console.log(usePage());

    const submit = (e) => {
        e.preventDefault();
    
        post(route('establishment.login.user'), {
            onSuccess: (response) => {
                console.log('Login Successful:', response); // Log success response
                // Handle successful login, e.g., redirecting
            },
            onError: (errors) => {
                console.error('Login Errors:', errors); // Log errors
            },
            onFinish: () => {
                reset('password'); // Reset password field after submit
            },
        });
    };
    
  
  
    return (
        <GuestLayout>
            <Head title="Establishment Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
    <div className="flex min-h-[70vh] items-center justify-center px-2 py-12  max-w-[400px] mx-auto font-Manregular">
    {flashMsg && <div className='absolute top-[10px] right-[10px] font-Manbold bg-accent text-white rounded-lg grid place-items-center p-4 '>{flashMsg}</div>}
    <div className="flex flex-col w-full px-6 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-left text-xl leading-9 tracking-tight text-gray-900 font-Manbold">
            Establishment Log in
        </h2>
      
        <form  className="w-full flex flex-col gap-2 mt-8" onSubmit={submit} action=''>
            <div>
            <label className='font-Manbold text-sm leading-6 text-primary text-left'>Email</label>
            <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
            </div>

            <div>
            <label className='font-Manbold text-sm leading-6 text-primary text-left'>Password</label>

            <TextInput
                id="password"
                type={showPassword ? 'text' : 'password'} // Toggle password visibility
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                autoComplete="current-password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <InputError message={errors.password} className="mt-2" />

            <div className="mt-4 flex items-center">
                <Checkbox
                    id="show-password"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)} // Toggle show password state
                />
                <label
                    htmlFor="show-password"
                    className="ms-2 text-sm text-gray-600 cursor-pointer" // Add cursor pointer
                >
                    Show password
                </label>
            </div>
        </div>

                    <div className="mt-4 flex flex-col items-center">
                

                        <PrimaryButton disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                    {/* Remember me  */}
                    {/* <div className="mt-4 block">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div> */}

                    <div className='flex flex-col gap-6 w-full items-center mt-6'>
                    {canResetPassword && (
                            <Link
                                href={route('password.request')} 
                                className="rounded-md text-sm text-accent decoration-none hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Forgot your password?
                            </Link>
                        )}
                  
                    </div>
                 </form>
                  <p className='text-center font-Manregular text-sm mt-4'>Don&apos;t have an account? <a href={route('establishment.register')} className='text-accent hover:underline'>Create account</a></p>
    
        </div>

     </div>
     <MeshBackground/>
        </GuestLayout>
    );
}
