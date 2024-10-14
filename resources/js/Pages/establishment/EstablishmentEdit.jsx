import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FileInput from '@/Components/FileInput'; // Assuming you have a FileInput component
import GuestLayout from '@/Layouts/GuestLayout';
import MeshBackground from '@/UI/MeshBackground';
import { Head, Link, useForm } from '@inertiajs/react';
import DeleteModal from '@/Components/DeleteModal';

export default function EstablishmentEdit({ establishment, flash }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: establishment?.name || '',
        email: establishment?.email || '',
        password: '', // Keep it empty for security
        password_confirmation: '', // Keep it empty for security
        description: establishment?.description || '',
        address: establishment?.address || '',
        cover_photo: establishment?.cover_photo || '', // Initialize with existing photo URL or null
    });

    // console.log(data);

    const submit = (e) => {
        e.preventDefault();

        // Submit the data to the update route
        post(route('establishment.update', establishment.id), {
            onFinish: () => reset('password', 'password_confirmation', 'description', 'address'),
        });
    };
   
    return (
        <GuestLayout>
            <Head title="Edit Establishment" />
            <div className="mx-auto max-w-homepage space-y-6 sm:px-6 lg:px-6 font-Manregular">
                <div className="flex flex-col w-full">
                   

                    <form onSubmit={submit} className="w-full flex flex-col gap-4 mt-8">
                        <div className=' bg-white p-6 shadow rounded-lg sm:p-8'>
                        <h2 className="text-left text-xl leading-9 tracking-tight text-gray-900 font-Manbold">
                        Profile Information
                        </h2>
                         <p className='mt-1 text-sm text-gray-600'>Update your account's profile information and email address.</p>
                        <div className='mt-6'>
                            <InputLabel htmlFor="name" value="Name" className="font-Manregular text-sm leading-6 text-gray-400 text-left" />
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
                            <InputLabel htmlFor="email" value="Email" className="font-Manregular text-sm leading-6 text-gray-400 text-left" />
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


                      <div className=' bg-white p-6 shadow rounded-lg sm:p-8'>
                      <h2 className="text-left text-xl leading-9 tracking-tight text-gray-900 font-Manbold">
                        Update password
                        </h2>
                         <p className='mt-1 text-sm text-gray-600'>Ensure your account is using a long, random password to stay secure.</p>
                            <InputLabel htmlFor="password" value="Password" className='font-Manregular text-sm leading-6 text-gray-400 text-left mt-6' />
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

                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" className='font-Manregular text-sm leading-6 text-gray-400 text-left' />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />

                        </div>

                        <div className=' bg-white p-6 shadow rounded-lg sm:p-8'>
                        <h2 className="text-left text-xl leading-9 tracking-tight text-gray-900 font-Manbold">
                        Update address & description
                        </h2>
                         <p className='mt-1 text-sm text-gray-600'>Keep your customers informed with the latest details</p>
                            <InputLabel htmlFor="description" value="Description" className="font-Manregular text-sm leading-6 text-gray-400 text-left mt-6" />
                            <TextInput
                                id="description"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('description', e.target.value)}
                                required
                            />
                            <InputError message={errors.description} className="mt-2" />
                      
                            <InputLabel htmlFor="address" value="Address" className="font-Manregular text-sm leading-6 text-gray-400 text-left" />
                            <TextInput
                                id="address"
                                name="address"
                                value={data.address}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('address', e.target.value)}
                                required
                            />
                            <InputError message={errors.address} className="mt-2" />
                   

                   
                     <div className='flex flex-col gap-2 mt-6'>
                        <p className='text-sm text-gray-600'>Upload your cover photo here</p>
                           <FileInput
                           
                               id="cover_photo"
                               name="cover_photo"
                               onChange={(e) => setData('cover_photo', e.target.files[0])}
                               required={!establishment?.cover_photo} // Make it required only if there's no existing photo
                           />
                               <InputError message={errors.cover_photo} className="mt-2" />
                     </div>
                 

                        <div className="flex gap-4 justify-end my-4">
                              <Link
                                href={route('establishment.dashboard')}
                                className="flex items-center justify-center md:px-4 rounded-md text-xs px-2 md:text-sm text-accent decoration-none ring-1 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Back to Dashboard
                            </Link>
                            <PrimaryButton disabled={processing} className='!w-auto md:!px-14'>
                                Update
                            </PrimaryButton>
                          
                        </div>
                        </div>

                      

                    </form>
                  </div>
                  <div className=' bg-white p-6 shadow rounded-lg sm:p-8'>
                      <h2 className="text-left text-xl leading-9 tracking-tight text-gray-900 font-Manbold">
                      Delete Account
                        </h2>
                         <p className='mt-1 text-sm text-gray-600 mb-2'>Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
                        <DeleteModal establishmentId={establishment.id} />
                </div>
            </div>
            <MeshBackground />
        </GuestLayout>
    );
}
