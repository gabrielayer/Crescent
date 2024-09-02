"use server"
import { auth } from '@clerk/nextjs/server'
import { db } from "@/lib/db"

export const billing_read = async () => {
    const { orgId, userId } = auth()
    try {
        const billing_create = await db.billing.findMany({})
        return billing_create
    } catch {
        return null
    }
}