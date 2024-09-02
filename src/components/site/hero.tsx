import { MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Logo } from "../icons/logo"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export const Hero = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <Logo width="55px" className="mr-2 fill-black dark:fill-white" />
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
            This is the start of something new
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Managing personal finances can be challenging enough without outdated and tedious methods making it harder.
            Our goal is to simplify personal financial management, making it easier and more efficient than ever.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Link href="/dashboard">
            <Button size="lg" className="gap-4">
              Dashboard <MoveRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="https://github.com/gabrielayer/Crescent" target="_blank">
            <Button size="lg" variant="outline" className="gap-4">
              <GitHubLogoIcon className="w-4 h-4" /> Github
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)