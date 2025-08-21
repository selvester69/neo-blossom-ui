import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

interface SocialLoginButtonProps extends ButtonProps {
  providerName: string
  icon: React.ReactNode
}

const SocialLoginButton = React.forwardRef<HTMLButtonElement, SocialLoginButtonProps>(
  ({ providerName, icon, className, ...props }, ref) => {
    return (
      <Button ref={ref} variant="outline" className={cn("w-full", className)} {...props}>
        {icon}
        <span className="ml-2">Login with {providerName}</span>
      </Button>
    )
  }
)
SocialLoginButton.displayName = "SocialLoginButton"

export { SocialLoginButton }
