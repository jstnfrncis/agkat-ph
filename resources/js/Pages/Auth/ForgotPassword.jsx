import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import MeshBackground from '@/UI/MeshBackground';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
        <main className='max-w-[550px] mx-auto flex flex-col w-full px-6 py-8 bg-white shadow-md rounded-lg font-Manregular'>
            <div className="mb-4 text-sm text-gray-600">
                <h1 className='font-Manbold text-lg'>Forgot your password?</h1>
                 No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600 grid place-items-center">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className='flex flex-col'>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton  disabled={processing}>
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
            </main>
            <MeshBackground/>
        </GuestLayout>
        
    );
}
