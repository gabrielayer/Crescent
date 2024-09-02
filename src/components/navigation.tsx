import { Menu } from "./menu"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ChatBubbleIcon } from "@radix-ui/react-icons"
import { FeedbackDialog } from "./feedback"
import { Logo } from "./icons/logo"

export default async function Navigation({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="h-full flex-col md:flex">
            <div className="container max-w-[100%] flex flex-col items-start justify-between space-y-10 px-6 py-6 sm:flex-row sm:items-center sm:space-y-0 md:h-16 ">
            <h2 className="text-lg font-semibold flex mr-2">
                    <Logo width="25px" className="mr-2 fill-black dark:fill-white" />
                </h2>
                <Menu />
                <div className="ml-auto flex w-full space-x-2 sm:justify-end items-center">
                    <FeedbackDialog>
                        <Button variant="secondary" className="gap-2 text-xs" size="default">
                            <ChatBubbleIcon />
                            Feedback
                        </Button>
                    </FeedbackDialog>
                </div>
            </div>
            <Separator />
            <div className="container max-w-[100%] h-full py-6 px-6">
                {children}
            </div>
        </div>
    )
}