"use server"
import { auth } from '@clerk/nextjs/server'
import { db } from "@/lib/db"

export const feedback_create = async (body: string, pathname: string) => {
  const { orgId, userId } = auth()
  try {
    const feedback_create = await db.feedback.create({
      data: {
        userId: (userId as string),
        currentPage: pathname,
        body: body 
      }
    })
    return feedback_create
  } catch {
    return null
  }
}