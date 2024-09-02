"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { formSchema } from "@/schemas/feedback"
import { Textarea } from "@/components/ui/textarea"
import { usePathname } from "next/navigation"
import { feedback_create } from "@/actions/feedback"
import { DialogDescription } from "@radix-ui/react-dialog"

export function FeedbackDialog({ children }: Readonly<{ children: React.ReactNode }>) {
    const [AddDialogOpen, setAddDialogOpen] = useState(false)

    const pathname = usePathname()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {}
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await feedback_create(values.body, pathname)
        toast.success("Obrigado por nos enviar um feedback!")
        setAddDialogOpen(false)
        form.reset()
    }

    return (
        <Dialog open={AddDialogOpen} onOpenChange={setAddDialogOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="mb-1">Deixe seu feedback</DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground mb-3">
                        Adoraríamos saber o que deu certo ou como podemos melhorar.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-3"
                        >
                            <FormField
                                control={form.control}
                                name="body"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Seu feedback"
                                                className="resize-none h-28"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="w-full justify-between flex mb-4 mr-2 pt-3 gap-1 items-center">
                                <div className="gap-1 flex">
                                    <Button type="submit">Enviar</Button>
                                    <DialogClose asChild>
                                        <Button variant="ghost">Cancelar</Button>
                                    </DialogClose>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
