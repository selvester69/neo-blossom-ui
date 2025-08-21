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

const changePasswordFormSchema = z.object({
    currentPassword: z.string().min(1, { message: "Please enter your current password." }),
    newPassword: z.string().min(8, { message: "New password must be at least 8 characters." }),
    confirmPassword: z.string(),
}).refine(data => data.newPassword === data.confirmPassword, {
    message: "New passwords do not match.",
    path: ["confirmPassword"],
});

type ChangePasswordFormValues = z.infer<typeof changePasswordFormSchema>

const defaultValues: Partial<ChangePasswordFormValues> = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
}

interface ChangePasswordFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSubmit: (data: ChangePasswordFormValues) => void
}

const ChangePasswordForm = React.forwardRef<HTMLDivElement, ChangePasswordFormProps>(
  ({ onSubmit, className, ...props }, ref) => {
    const form = useForm<ChangePasswordFormValues>({
      resolver: zodResolver(changePasswordFormSchema),
      defaultValues,
    })

    return (
      <Card ref={ref} className={cn("w-full max-w-sm", className)} {...props}>
        <CardHeader>
          <CardTitle className="text-2xl">Change Password</CardTitle>
          <CardDescription>
            Enter your current and new password below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
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
                Change Password
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    )
  }
)
ChangePasswordForm.displayName = "ChangePasswordForm"

export { ChangePasswordForm }
