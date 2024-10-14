

import { usePage} from '@inertiajs/react';

const { props: { flash = {} } } = usePage();

export default function Toaster(){
    return (
    <>
    <div className='absolute top-[10px] right-[10px] font-Manbold bg-accent text-white rounded-lg grid place-items-center p-4'>
    {flash.message && <div> {flash.message}</div>}
    </div>
    
    
    </>



    )
}