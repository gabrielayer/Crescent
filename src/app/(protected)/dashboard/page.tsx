"use server"
import React from "react"
import Navigation from "@/components/navigation"
import { HydrationBoundary } from "@tanstack/react-query"
import { QueryClient, dehydrate } from "@tanstack/query-core"
import { billing_read } from "@/actions/billing"

export default async function ContactsPage() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ["bills"],
        queryFn: billing_read
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Navigation>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-0">
                    <div className="flex items-center">
                      
                    </div>
                </main>
            </Navigation>
        </HydrationBoundary>
    )
}