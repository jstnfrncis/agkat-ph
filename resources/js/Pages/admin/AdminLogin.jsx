import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import MeshBackground from '@/UI/MeshBackground';
import { Head, Link, useForm, usePage} from '@inertiajs/react';
import { useEffect } from 'react';


export default function AdminLogin({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
   

    const { props: { flash = {} } } = usePage();
    const submit = (e) => {
        e.preventDefault();
    
        post(route('admin.login.user'), {
            onSuccess: () => {
                // Handle successful login if needed
            },
            onError: (errors) => {
                console.log(errors); // Log any errors returned from the backend
            },
            onFinish: () => {
                reset('password');
            },
        });
    };
    
    useEffect(() => {
        if (flash.success) {
            alert(flash.success); // Display success message
        }
        if (flash.error) {
            alert(flash.error); // Display error message
        }
        if (flash.loggedout) {
            alert(flash.loggedout); // Display error message
        }
    }, [flash]);
  
    return (
        <GuestLayout>
            <Head title="Admin Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
    <div className="flex min-h-[70vh] items-center justify-center px-2 py-12  max-w-[400px] mx-auto font-Manregular">
    <div className="flex flex-col w-full px-6 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-left text-xl leading-9 tracking-tight text-gray-900 font-Manbold">
            Admin Log in
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
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="current-password"
                    onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
            </div>

            {/* Incorrect Email or Password  */}
            
            {flash.error && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {flash.error}
                </div>
            )}

            {/* Log out succesfully  */}
           
             {flash.success && (
                <div className="text-green-600">
                    {flash.success}
                </div>
            )}

            {flash.loggedout && (
                <div className="text-green-600">
                    {flash.loggedout}
                </div>
            )}
            <div className="mt-4 block">
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
                    </div>

                    <div className="mt-4 flex flex-col items-center">
                

                        <PrimaryButton disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>


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
                  <p className='text-center font-Manregular text-sm mt-4'>Don&apos;t have an account? <a href={route('admin.register')} className='text-accent hover:underline'>Create account</a></p>
    
        </div>

     </div>
     <MeshBackground/>
        </GuestLayout>
    );
}
