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

const resetPasswordFormSchema = z.object({
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordFormSchema>

const defaultValues: Partial<ResetPasswordFormValues> = {
  password: "",
  confirmPassword: "",
}

interface ResetPasswordFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSubmit: (data: ResetPasswordFormValues) => void
}

const ResetPasswordForm = React.forwardRef<HTMLDivElement, ResetPasswordFormProps>(
  ({ onSubmit, className, ...props }, ref) => {
    const form = useForm<ResetPasswordFormValues>({
      resolver: zodResolver(resetPasswordFormSchema),
      defaultValues,
    })

    return (
      <Card ref={ref} className={cn("w-full max-w-sm", className)} {...props}>
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
            Enter your new password below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Set New Password
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    )
  }
)
ResetPasswordForm.displayName = "ResetPasswordForm"

export { ResetPasswordForm }
