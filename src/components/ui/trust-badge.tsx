import * as React from "react"
import { cn } from "@/lib/utils"
import { ShieldCheck } from "lucide-react"

const TrustBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center gap-2 p-2 border rounded-md bg-muted", className)} {...props}>
    <ShieldCheck className="w-6 h-6 text-success-foreground" />
    <p className="text-sm text-muted-foreground">Secure SSL Encrypted Payment</p>
  </div>
))
TrustBadge.displayName = "TrustBadge"

export { TrustBadge }
