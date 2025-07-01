import React from 'react';
import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function PublicLayout({ children, title = 'Welcome' }) {
    return (
        <>
            <Head title={title} />
            <Header />
            <main className="min-h-screen bg-white p-6">
                {children}
            </main>
            
        </>
    );
}
