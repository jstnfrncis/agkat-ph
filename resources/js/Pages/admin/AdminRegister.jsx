import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import MeshBackground from '@/UI/MeshBackground';
import { Head, Link, useForm } from '@inertiajs/react';

export default function AdminRegister({flash}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.register.create'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="flex min-h-[70vh] items-center justify-center px-2 py-12  max-w-[400px] mx-auto font-Manregular">
            <div className="flex flex-col w-full px-6 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-left text-xl leading-9 tracking-tight text-gray-900 font-Manbold">
           Create your account
        </h2>

                   


            <form onSubmit={submit} className="w-full flex flex-col gap-2 mt-8">
                <div>
       

                    <InputLabel htmlFor="name" value="Name" className='font-Manbold text-sm leading-6 text-primary text-left'/>

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="">
                <InputLabel htmlFor="name" value="Email" className='font-Manbold text-sm leading-6 text-primary text-left'/>

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="">
                <InputLabel htmlFor="password" value="Password" className='font-Manbold text-sm leading-6 text-primary text-left'/>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="">
        
                       <InputLabel htmlFor="password_confirmation"
                        value="Confirm Password" className='font-Manbold text-sm leading-6 text-primary text-left'/>

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex flex-col gap-2 items-center justify-end my-4">
                

                    <PrimaryButton  disabled={processing}>
                        Register
                    </PrimaryButton>
                    <Link
                        href={route('admin.login')}
                        className="mt-4 rounded-md text-sm text-accent decoration-none hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>
                </div>
            </form>

            </div>
            </div>
            <MeshBackground/>
        </GuestLayout>
    );
}
