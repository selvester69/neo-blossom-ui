import * as React from "react"
import { cn } from "@/lib/utils"
import { SettingsSection } from "./SettingsSection"
import { SettingsRow } from "./SettingsRow"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const AccountSettings = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-8", className)} {...props}>
        <SettingsSection
          title="Profile"
          description="This information will be displayed publicly."
        >
            <div className="space-y-4">
                <SettingsRow label="Username">
                    <div className="flex gap-2">
                        <Input defaultValue="@julesd" />
                        <Button>Save</Button>
                    </div>
                </SettingsRow>
                <SettingsRow label="Email">
                    <div className="flex gap-2">
                        <Input defaultValue="jules@example.com" />
                        <Button>Save</Button>
                    </div>
                </SettingsRow>
            </div>
        </SettingsSection>
        <SettingsSection
          title="Account"
          description="Manage your account settings."
        >
            <SettingsRow
                label="Delete Account"
                description="Permanently delete your account and all of your data. This action cannot be undone."
            >
                <Button variant="destructive">Delete Account</Button>
            </SettingsRow>
        </SettingsSection>
      </div>
    )
  }
)
AccountSettings.displayName = "AccountSettings"

export { AccountSettings }
