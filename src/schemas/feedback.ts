import { z } from "zod"
import { LockOpen1Icon, LockOpen2Icon } from "@radix-ui/react-icons"

export const permissions = [
  {
    value: "Full",
    label: "Full access",
    icon: LockOpen2Icon,
  },
  {
    value: "Sending",
    label: "Sending access",
    icon: LockOpen1Icon,
  }
]

export const formSchema = z.object({
  body: z.string()
})

export const editSchema = z.object({
  body: z.string(),
})

export const taskSchema = z.object({
  id: z.string(),
  body: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export type Contact = z.infer<typeof taskSchema>