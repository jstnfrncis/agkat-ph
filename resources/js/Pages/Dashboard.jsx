import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FeaturedSpots from './ExplorePage';
import MeshBackground from '@/UI/MeshBackground';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
          
        >
            <Head title="Explore establishments" />

           <FeaturedSpots/>
           <MeshBackground/>
        </AuthenticatedLayout>
    );
}
