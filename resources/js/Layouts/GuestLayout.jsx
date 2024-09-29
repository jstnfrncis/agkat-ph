import Logo from '@/UI/Logo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex flex-col items-center sm:justify-center">
            <div>
            <Logo/>
                <Link href="/">
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden px-2 py-4  sm:max-w-md">
                {children}
            </div>
        </div>
    );
}
