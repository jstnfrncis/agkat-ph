import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import MeshBackground from '@/UI/MeshBackground';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />
            <div className="flex mt-24 flex-col min-h-auto items-center justify-center px-8 py-12 bg-white-100 max-w-[500px] mx-auto  bg-white rounded-xl ring-1 ring-gray-100 shadow-sm">
      
            <div className="mb-4 text-primary font-Manregular">
               <h2 className='text-2xl font-bold mb-2'> Thanks for signing up!</h2>
               <p>
                Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
               </p>
               
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <form onSubmit={submit} className='w-full'>
                <div className="mt-4 flex flex-col gap-4  items-center justify-between">
                    <PrimaryButton disabled={processing}>
                        Resend Verification Email
                    </PrimaryButton>

                    <Link
                        
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="font-Manbold hover:underline text-accent px-2 py-4 text-sm leading-6 l w-full"
                    >
                        Log out
                    </Link>
                </div>
            </form>
            </div>
            
           
            <MeshBackground/>
        </GuestLayout>
    );
}
