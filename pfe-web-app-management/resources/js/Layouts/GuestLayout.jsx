import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
         <div
            className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center opacity:20"
            style={{ backgroundImage: "url('/images/login-bg.png')",}}
        >
            
        
        <div className="flex min-h-screen flex-col items-center bg-gray-200 bg-opacity-0 sm:justify-center sm:pt-0 ">
                <div className=" bg-white rounded-full">
                <Link href="/" >
                    <img
                            src="/images/logo-usersoace.jpg" // 
                        alt="smarthlinkIndustry"
                        className="rounded-full h-36"
                    />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden uppercase bg-gray-300 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
            </div>
        </div>
    );
}
