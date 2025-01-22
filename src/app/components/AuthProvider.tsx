// app/components/AuthProvider.tsx
'use client'

import { 
  SignInButton, 
  SignedIn, 
  SignedOut, 
  UserButton 
} from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Exclude auth buttons from certain pages (optional)
  const hideAuthButtons = ['/sign-in', '/sign-up'].includes(pathname)

  return (
    <>
      {!hideAuthButtons && (
        <div className="auth-controls">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn btn-primary">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
      {children}
    </>
  )
}