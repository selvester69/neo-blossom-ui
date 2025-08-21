import * as React from "react"
import { cn } from "@/lib/utils"
import { UserCard, User } from "./UserCard"

interface UserListProps extends React.HTMLAttributes<HTMLDivElement> {
  users: User[]
}

const UserList = React.forwardRef<HTMLDivElement, UserListProps>(
  ({ users, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    )
  }
)
UserList.displayName = "UserList"

export { UserList }
