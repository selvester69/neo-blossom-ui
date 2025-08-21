import * as React from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export interface ProfileTab {
    value: string
    label: string
    content: React.ReactNode
}

interface ProfileTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: ProfileTab[]
  defaultValue?: string
}

const ProfileTabs = React.forwardRef<HTMLDivElement, ProfileTabsProps>(
  ({ tabs, defaultValue, className, ...props }, ref) => {
    return (
      <Tabs ref={ref} defaultValue={defaultValue || (tabs.length > 0 ? tabs[0].value : undefined)} className={cn("w-full", className)} {...props}>
        <TabsList className="grid w-full grid-cols-3">
            {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
            ))}
        </TabsList>
        {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
                {tab.content}
            </TabsContent>
        ))}
      </Tabs>
    )
  }
)
ProfileTabs.displayName = "ProfileTabs"

export { ProfileTabs }
