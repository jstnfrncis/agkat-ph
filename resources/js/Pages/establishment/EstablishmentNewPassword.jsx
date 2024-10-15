
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import MeshBackground from '@/UI/MeshBackground';
import { Head, Link, useForm, usePage} from '@inertiajs/react';
import { useEffect, useState } from 'react';


export default function EstablishmentNewPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

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

    return(
        <>
          <form  className="w-full flex flex-col gap-2 mt-8" onSubmit={submit} action=''>
   
            <div>
            <label className='font-Manbold text-sm leading-6 text-primary text-left'>Enter new password</label>

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
        <div>
            <label className='font-Manbold text-sm leading-6 text-primary text-left'>Confirm new password</label>

            <TextInput
                id="password"
                type={showPassword ? 'text' : 'password'} // Toggle password visibility
                name="password-confirmation"
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
                 

                 </form>
        </>
    )
}