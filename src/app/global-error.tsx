"use client"

import { Button } from "@/components/ui/button"

export default function GlobalError({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    console.log("Error:", error)
    return (
        <div>
            <h2>The page needs to be realoded.</h2>
            <Button onClick={() => reset()}>Reload</Button>
        </div>
    )
}