import React from "react";
import PublicLayout from "@/Pages/Layouts/PublicLayout";
import ClientsSection from "@/Components/ClientsSection";

export default function Client() {
    return (
        <PublicLayout title="Clients">
            <ClientsSection />
        </PublicLayout>
    );
}
