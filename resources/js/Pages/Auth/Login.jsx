import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import MeshBackground from '@/UI/MeshBackground';
import { Head, Link, useForm } from '@inertiajs/react';



export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
    <div className="flex min-h-[70vh] items-center justify-center px-2 py-12  max-w-[400px] mx-auto font-Manregular">
    <div className="flex flex-col w-full px-6 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-left text-xl leading-9 tracking-tight text-gray-900 font-Manbold">
            Log in your account
        </h2>
        <form  className="w-full flex flex-col gap-2 mt-8" onSubmit={submit}>
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
                    <a href="#" className="flex items-center w-full gap-2 leading-6 text-primary hover:text-indigo-500">
                        <button className=" bg-white flex items-center justify-center gap-2 px-3  w-full rounded-md border-0 py-2 ring-1 ring-stroke shadow-sm active:scale-[0.98] active-duration-75 transition-all">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
                            <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"></path>
                            <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"></path>
                            <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"></path>
                            <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"></path>
                        </svg>
                       <span className="font-Manbold text-sm">Sign in with Google</span>
                        </button>
                 </a>
                    </div>
        </form>
       <div className='flex flex-col items-center gap-2 my-4'>
         <a href="/explore-page" className="flex items-center w-full gap-2 leading-6 text-primary hover:text-indigo-500">
                         <button className="font-Manbold text-sm bg-white flex items-center justify-center gap-2 px-3  w-full rounded-md border-0 py-2 ring-1 ring-stroke shadow-sm active:scale-[0.98] active-duration-75 transition-all"> Sign in as guest</button>
                  </a>
                  <p className='font-Manregular text-sm mt-4'>Don&apos;t have an account? <a href="/register" className='text-accent hover:underline'>Create account</a></p>
       </div>
        </div>

     </div>
     <MeshBackground/>
        </GuestLayout>
    );
}
