import ReactQueryProvider from "@/components/providers/react-query"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  )
}