import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FeaturedSpots from './ExplorePage';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
          
        >
            <Head title="Explore establishments" />

           <FeaturedSpots/>
        </AuthenticatedLayout>
    );
}
