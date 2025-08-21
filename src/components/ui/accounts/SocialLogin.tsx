import * as React from "react"
import { SocialLoginButton } from "./SocialLoginButton"
import { Github, Twitter, Key } from "lucide-react" // Using Key as a placeholder
import { ButtonProps } from "@/components/ui/button"

// Note: lucide-react does not include brand icons for Google, Facebook, etc.
// A more complete implementation would use a different icon library or custom SVG icons.
// For this implementation, we use a placeholder icon.

export const GoogleLogin = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <SocialLoginButton ref={ref} providerName="Google" icon={<Key className="h-5 w-5" />} {...props} />
))
GoogleLogin.displayName = "GoogleLogin"

export const FacebookLogin = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <SocialLoginButton ref={ref} providerName="Facebook" icon={<Key className="h-5 w-5" />} {...props} />
))
FacebookLogin.displayName = "FacebookLogin"

export const TwitterLogin = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <SocialLoginButton ref={ref} providerName="Twitter" icon={<Twitter className="h-5 w-5" />} {...props} />
))
TwitterLogin.displayName = "TwitterLogin"

export const GitHubLogin = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <SocialLoginButton ref={ref} providerName="GitHub" icon={<Github className="h-5 w-5" />} {...props} />
))
GitHubLogin.displayName = "GitHubLogin"

export const AppleLogin = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <SocialLoginButton ref={ref} providerName="Apple" icon={<Key className="h-5 w-5" />} {...props} />
))
AppleLogin.displayName = "AppleLogin"

export const MicrosoftLogin = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <SocialLoginButton ref={ref} providerName="Microsoft" icon={<Key className="h-5 w-5" />} {...props} />
))
MicrosoftLogin.displayName = "MicrosoftLogin"

export const LinkedInLogin = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <SocialLoginButton ref={ref} providerName="LinkedIn" icon={<Key className="h-5 w-5" />} {...props} />
))
LinkedInLogin.displayName = "LinkedInLogin"
