import * as React from "react"
import { cn } from "@/lib/utils"

// SVGs for popular payment methods. In a real app, you'd use proper icons.
const Visa = () => <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.8 10.1h-2.2c-.1-.4-.2-.7-.4-.9-.2-.2-.5-.3-.9-.3-.5 0-.8.2-1 .5-.2.3-.3.6-.3.9H28l-1.5 6.4h-2.3L26.3 10h-2.2l-1.5 6.4h-2.3L22.4 10h-2.2c-.1-.4-.2-.7-.4-.9-.2-.2-.5-.3-.9-.3-.5 0-.8.2-1 .5-.2.3-.3.6-.3.9H21l-1.5 6.4h-2.3L21.3 10h-2.2l-1.5 6.4h-2.3L19.4 10h-2.2c-.1-.4-.2-.7-.4-.9-.2-.2-.5-.3-.9-.3-.5 0-.8.2-1 .5-.2.3-.3.6-.3.9H18l-1.5 6.4h-2.3L18.3 10h-2.2l-1.5 6.4h-2.3L16.4 10h-2.2l-1.5 6.4H10l2.9-12.8h2.3l-1.1 4.7h.4c.1-.3.2-.5.4-.7.2-.2.5-.3.8-.3.5 0 .9.2 1.1.5.2.3.4.6.4.9h2.2l-1.5 6.4h2.3l1.5-6.4h-2.2c-.1-.4-.2-.7-.4-.9-.2-.2-.5-.3-.9-.3-.5 0-.8.2-1 .5-.2.3-.3.6-.3.9h2.2l-1.5 6.4h2.3l1.5-6.4h-2.2c-.1-.4-.2-.7-.4-.9-.2-.2-.5-.3-.9-.3-.5 0-.8.2-1 .5-.2.3-.3.6-.3.9h2.2l-1.5 6.4h2.3l1.5-6.4h-2.2c-.1-.4-.2-.7-.4-.9-.2-.2-.5-.3-.9-.3-.5 0-.8.2-1 .5-.2.3-.3.6-.3.9H28l-1.5 6.4h2.3l1.5-6.4h-2.2z" fill="#142688"></path></svg>;
const Mastercard = () => <svg role="img" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" aria-labelledby="pi-mastercard"><title id="pi-mastercard">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7 7-3.1 7-7z"></path></svg>;

const PaymentIcons = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center gap-2", className)} {...props}>
    <Visa />
    <Mastercard />
  </div>
))
PaymentIcons.displayName = "PaymentIcons"

export { PaymentIcons }
