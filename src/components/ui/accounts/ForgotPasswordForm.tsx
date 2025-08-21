import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const forgotPasswordFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
})

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordFormSchema>

const defaultValues: Partial<ForgotPasswordFormValues> = {
  email: "",
}

interface ForgotPasswordFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSubmit: (data: ForgotPasswordFormValues) => void
}

const ForgotPasswordForm = React.forwardRef<HTMLDivElement, ForgotPasswordFormProps>(
  ({ onSubmit, className, ...props }, ref) => {
    const form = useForm<ForgotPasswordFormValues>({
      resolver: zodResolver(forgotPasswordFormSchema),
      defaultValues,
    })

    return (
      <Card ref={ref} className={cn("w-full max-w-sm", className)} {...props}>
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    )
  }
)
ForgotPasswordForm.displayName = "ForgotPasswordForm"

export { ForgotPasswordForm }
