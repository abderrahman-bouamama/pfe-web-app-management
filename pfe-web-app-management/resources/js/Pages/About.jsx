import React from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import AboutSection from '@/Components/AboutSection';

export default function About() {
    return (
        <PublicLayout>
            <Head title="About" />
            <AboutSection />
        </PublicLayout>
    );
}
